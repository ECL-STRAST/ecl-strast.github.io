---
layout: default
title: Home
---
<section class="hero" markdown="1">

<p class="lead">{{ site.tagline }}</p>

We are a research group at [{{ site.affiliation }}]({{ site.affiliation_url }})
(Madrid, Spain). We design, build and validate interactive technology for
health: virtual reality applications that measure how the body moves,
immersive simulators for training clinicians, low-cost motion capture, and
physiological signals that tell us how people respond to all of it.

Everything we build is meant to leave the lab. That is why we test commodity
hardware against clinical gold standards, and why our code and datasets are
[open on GitHub](https://github.com/{{ site.github_org }}).

<ul class="stats">
  <li><strong data-pubs-count="publication">&nbsp;</strong> publications</li>
  <li><strong data-pubs-count="thesis">&nbsp;</strong> theses</li>
  <li><strong>{{ site.research | size }}</strong> research lines</li>
</ul>

</section>

<div class="section-head"><h2>News</h2><a href="{{ '/news/' | relative_url }}">All news &rarr;</a></div>
{% include news-list.html limit=4 %}

<div class="section-head"><h2>Research</h2><a href="{{ '/research/' | relative_url }}">All research &rarr;</a></div>
{% include research-cards.html %}

<div class="section-head"><h2>Latest publications</h2><a href="{{ site.pubs_url }}?group=publication">All publications &rarr;</a></div>
{% include publications.html type="publication" limit=5 %}
