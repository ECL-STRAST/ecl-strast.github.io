// Fills every <ul class="pubs"> from the web-pubs catalog's index.json.
// The catalog stays the single source of truth for publications: this
// site never copies an entry, it only lists and links to them.

(function () {
  const lists = document.querySelectorAll("ul.pubs");
  const counts = document.querySelectorAll("[data-pubs-count]");
  if (!lists.length && !counts.length) return;

  const base = window.PUBS_URL || "/web-pubs/";

  function escape(text) {
    const box = document.createElement("div");
    box.textContent = text == null ? "" : String(text);
    return box.innerHTML.replace(/"/g, "&quot;");
  }

  // "García-Carmona", "Garcia Carmona" and "garcia-carmona" are one name.
  function fold(text) {
    return String(text || "").normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[-‐]/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function kindBit(e) {
    const bits = e.type === "thesis"
      ? [e.degree ? `${e.degree} thesis` : "thesis"]
      : [e.venue || e.kind];
    return bits.filter(Boolean).map(escape).join(" &middot; ");
  }

  function card(e) {
    const topics = (e.topics || []).map((t) =>
      `<a href="${base}?group=${encodeURIComponent(e.type)}&topic=${encodeURIComponent(t)}">${escape(t)}</a>`).join("");
    return `<li>
      <a class="title" href="${base}${escape(e.url)}">${escape(e.title)}</a>
      <p class="meta">${escape(e.authors.join(", "))} &middot; ${escape(e.year)} &middot; ${kindBit(e)}</p>
      <p class="topics">${topics}</p>
    </li>`;
  }

  function select(entries, ds) {
    let shown = entries;
    if (ds.slugs) {
      const wanted = ds.slugs.split(",").map((s) => s.trim()).filter(Boolean);
      shown = shown.filter((e) => wanted.includes(e.slug));
    }
    if (ds.type) shown = shown.filter((e) => e.type === ds.type);
    if (ds.topic) shown = shown.filter((e) => (e.topics || []).includes(ds.topic));
    if (ds.author) {
      const who = fold(ds.author);
      shown = shown.filter((e) => e.authors.concat(e.supervisors || []).some((a) => fold(a).includes(who)));
    }
    // Newest first, whatever order the catalog happens to be in.
    shown = shown.slice().sort((a, b) =>
      String(b.published || b.year).localeCompare(String(a.published || a.year)));
    const limit = parseInt(ds.limit, 10);
    return limit > 0 ? shown.slice(0, limit) : shown;
  }

  fetch(`${base}index.json`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((entries) => {
      lists.forEach((ul) => {
        const shown = select(entries, ul.dataset);
        ul.innerHTML = shown.length
          ? shown.map(card).join("")
          : `<li class="pubs-empty">Nothing here yet. <a href="${base}">Browse the full catalog</a>.</li>`;
      });
      counts.forEach((node) => {
        node.textContent = entries.filter((e) => e.type === node.dataset.pubsCount).length;
      });
    })
    .catch(() => {
      // The fallback link in the markup stays: the catalog is one click away.
      lists.forEach((ul) => ul.classList.add("pubs-offline"));
    });
})();
