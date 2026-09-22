# ecl-strast.github.io

The website of the Embodied Computing Lab, published at
<https://ecl-strast.github.io>. GitHub Pages builds it with Jekyll on every
push to `main`: edit a file on github.com, commit, and the site updates in
a minute or two.

The publications section is the [web-pubs](https://github.com/ECL-STRAST/web-pubs)
catalog, served at `/web-pubs/`. This site never copies a paper: it reads
the catalog's `index.json` to list papers and theses on the home page, on
research pages, on people pages and under news items. Add a paper to
web-pubs and it shows up here too.

## Layout

    index.md                 home page (intro, latest news, research, latest papers)
    news.md people.md research.md   section index pages
    _news/                   one Markdown file per news item
    _people/                 one Markdown file per person
    _research/               one Markdown file per research line
    _data/navigation.yml     the top menu
    _data/roles.yml          the groups on the People page
    _config.yml              site title, tagline, affiliation, contact
    assets/img/{news,people,research,gallery}/   images
    assets/video/            small video files (prefer YouTube for big ones)

Any other `.md` file you add at the top level becomes a page; link it from
`_data/navigation.yml` to put it in the menu.

## Adding news

Create `_news/YYYY-MM-DD-short-name.md`:

```markdown
---
title: Our paper is out in Virtual Reality
image: /assets/img/news/cool-figure.jpg        # optional, thumbnail and header
publication: 2025-santos-paz-cervical-rom      # optional, web-pubs slug(s), comma separated
---
The first paragraph is the teaser shown in the news list.

Everything else is the full story, in Markdown.
```

## Adding a person

Create `_people/first-last.md`:

```markdown
---
title: Jane Doe
role: student              # lead, researcher, student, alumni or collaborator
order: 3                   # position inside the group
position: PhD student
photo: /assets/img/people/jane-doe.jpg     # square, at least 300x300
email: jane@example.org
github: https://github.com/janedoe
linkedin: https://www.linkedin.com/in/janedoe/
orcid: 0000-0000-0000-0000
scholar: https://scholar.google.com/citations?user=XXXX
website: https://janedoe.org
pubs_author: Doe           # lists her papers and theses from web-pubs
---
A short bio in Markdown.
```

Every field except `title` and `role` is optional; a person without a photo
gets their initials. Collaborators are listed by name only, and get a link
to their own page once the file has some text below the front matter.

## Adding a research line

Create `_research/short-name.md`:

```markdown
---
title: Musculoskeletal assessment with virtual reality
order: 1                   # position on the Research page
summary: One sentence shown on the card.
image: /assets/img/research/cover.jpg      # card and header image, 16:9 works best
image_caption: Optional caption
publications:              # web-pubs slugs, listed at the end of the page
  - 2025-santos-paz-cervical-rom
# or, instead of a list, every entry with a web-pubs topic:
# pubs_topic: vr
---
Introduction in Markdown.

## A subsection

More text.
```

## Text, subsections, images and videos

Pages are Markdown. `## Heading` starts a subsection, `### Heading` a
sub-subsection. The following snippets work in any page, person, research
line or news item:

```liquid
{% include figure.html src="/assets/img/research/setup.jpg" alt="The lab setup" caption="Our VR lab." %}
{% include figure.html src="/assets/img/news/photo.jpg" caption="Half width, floated right" size="small" %}

{% include video.html youtube="M4Zs9HhYMzI" caption="FarmDay" %}
{% include video.html vimeo="123456789" %}
{% include video.html file="/assets/video/demo.mp4" poster="/assets/img/news/demo.jpg" %}

{% include gallery.html folder="/assets/img/gallery/open-day-2026" %}
{% include gallery.html images="/assets/img/a.jpg, /assets/img/b.jpg" %}

{% include publications.html slugs="2025-santos-paz-cervical-rom, 2022-santos-paz-crom-app" %}
{% include publications.html topic="vr" limit=5 %}
{% include publications.html author="Santos-Paz" %}
```

The YouTube id is what follows `youtu.be/` or `watch?v=` in the link. A
gallery shows every image in the folder in file-name order, so dropping
photos into a new folder is enough. Images from the web-pubs catalog can be
used directly, e.g. `/web-pubs/entries/<slug>/image.png`.

Keep images reasonably small (under 500 KB, 1600 px wide is plenty).

## Previewing locally

    bundle install
    bundle exec jekyll serve --config _config.yml,_config.local.yml

`_config.local.yml` points the publication lists at the live catalog, since
there is no `/web-pubs/` on your machine. Images taken from the catalog
(`/web-pubs/...`) only appear on the live site.
