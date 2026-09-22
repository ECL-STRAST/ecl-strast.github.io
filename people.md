---
title: People
permalink: /people/
---
{% for role in site.data.roles %}
  {% assign members = site.people | where: "role", role.key | sort: "order" %}
  {% if members.size > 0 %}
<h2>{{ role.title }}</h2>
    {% if role.key == "collaborator" %}
<ul class="collaborators">
      {% for p in members %}
  <li>{% if p.content.size > 10 %}<a href="{{ p.url | relative_url }}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}{% if p.affiliation %} <span class="meta">({{ p.affiliation }})</span>{% endif %}</li>
      {% endfor %}
</ul>
    {% else %}
<ul class="people">
      {% for p in members %}
  <li><a href="{{ p.url | relative_url }}">{% include portrait.html person=p %}<strong>{{ p.title }}</strong></a>
    <p>{{ p.position }}</p></li>
      {% endfor %}
</ul>
    {% endif %}
  {% endif %}
{% endfor %}

<h2>Join us</h2>
We regularly supervise bachelor, master and doctoral theses on virtual
reality, motion capture and health technology. If you are interested,
get in touch with {% assign lead = site.people | where: "role", "lead" | first %}[{{ lead.title }}]({{ lead.url | relative_url }}).
