---
layout: home
title: Home
nav_order: 1
description: Data and nanoinformatics shepherds’ user guidance handbook
permalink: /
projects:
  - url: https://nanocommons.eu
    logo: nanocommons.png
    width: 80
  - url: https://openrisknet.org
    logo: openrisknet.png
    width: 200
  - url: https://www.h2020gracious.eu/
    logo: gracious.png
    width: 120
  - url: https://nanosolveit.eu/
    logo: nanosolveit.jpg
    width: 160
  - url: http://www.acenano-project.eu/
    logo: acenano.png
    width: 160
  - url: http://www.nanofase.eu/
    logo: nanofase.png
    width: 160
  - url: http://www.enanomapper.org/
    logo: eNanoMapper.png
    width: 120
  - url: https://www.asina-project.eu/
    logo: ASINA.png
    width: 120
  - url: https://www.sabydoma.eu/
    logo: Sabydoma.png
    width: 160
  - url: https://nanofabnet.eu/
    logo: NanoFabNet.png
    width: 160
  - url: https://susnanofab.eu/
    logo: SUSNANOFAB.png
    width: 120
  - url: https://ceint.duke.edu/research/nikc
    logo: NIKC.png
    width: 120

topics:
  - name: planning
    title: Data management should start at the planning stage by documenting the study design and decisions leading to the selected methods
    shape: circle
    x: 374
    y: 81
    r: 70
  - name: sharing
    title: Publicly sharing for re-use according to open science and FAIR standards
    shape: circle
    x: 211
    y: 246
    r: 70
  - name: preserving
    title: Preserving means bringing your data so that it can be found by you but also in institutional repositories and public data repositories and warehouses
    shape: circle
    x: 384
    y: 409
    r: 70
  - name: acquisition
    title: Acquisition
    shape: circle
    x: 526
    y: 200
    r: 50
  - name: cleansing-processing
    title: Cleansing and processing
    shape: circle
    x: 621
    y: 141
    r: 50
  - name: modelling-prediction
    title: Modelling and prediction
    shape: circle
    x: 714
    y: 200
    r: 50
  - name: integration
    title: Integration
    shape: circle
    x: 717
    y: 306
    r: 50
  - name: annotation-qc
    title: Annotation and quality control
    shape: circle
    x: 625
    y: 368
    r: 50
  - name: analysis
    title: Analysis
    shape: circle
    x: 524
    y: 307
    r: 50
  - name: data-management
    title: All about data management
    url: /data-management/
    shape: rect
    x: 0
    y: 510
    w: 130
    h: 60
  - name: fairification
    title: All about FAIRification
    url: /FAIRification/
    shape: rect
    x: 410
    y: 480
    w: 130
    h: 60
  - name: nanoinformatics
    title: All about nanoinformatics
    url: /nanoinformatics/
    shape: rect
    x: 790
    y: 510
    w: 100
    h: 60

---

# Data and nanoinformatics shepherds’ user guidance handbook

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Book",
  "inLanguage": "en-US",
  "name": "Data and nanoinformatics shepherds’ user guidance handbook",
  "url": "https://nanocommons.github.io/user-handbook/",
  "publisher": {
    "@type": "Organization",
    "name": "GitHub"
  },
  "copyrightYear": "2021",
  "license": "http://creativecommons.org/licenses/by/4.0/",
  "discussionUrl": "https://github.com/NanoCommons/user-handbook/issues"
}
</script>

This online resource collects and organizes knowledge and training materials for the two strongly interlinked areas of data management for nanomaterials and nanoinformatics as well as areas like Safe-and-Sustainable-by-Design directly profiting from data, tools and services.
{: .lead }

If you are a
- scientist (wet or dry lab), who produces and wants to share data
- data manager, curator or steward and want to become more
- computer geek

in the area of nanosafety, nanoinformatics or material Safe-by-Design or want to become one, then this handbook is for you.

{% include clickable_image.html image_name="StartingPage.png" image_width=890 image_height=577 image_areas=page.topics %}


The **two strongly interlinked areas of data management for nanomaterials and nanoinformatics** covered in this handbook can be visualised as two interlinked cycles together representing the extended data life cycle. You can hover over the figure to access short introductions to the different aspects of the cycle. Click on any of the three general areas in the lower part of the figure to access information on that topic.

## Working together
Many different research groups and projects (small and large) have and are developing data resources, software and platforms combining these two areas. The NanoCommons infrastructure is meant to be even one level above these platforms to bring them together and govern harmonisation and interoperability aspects across platform / projects / country borders. The success is dependent on the underlying platforms and services and since not all information on these can and should be reproduced here, we provide [short summaries and access links to the partners' websites, platforms and networks]({{ site.baseurl }}/about-and-partner-projects/).

Information on individual tools and services including the contact points and specialised material can be found in the [service catalogue](https://infrastructure.nanocommons.eu/services/).


## A big THANK YOU to the contributing projects!

<center>
<ul class="list-style-none mt-6">
{% for contributor in page.projects %}
  <li class="d-inline-block mr-3 mb-3">
     <a href="{{ contributor.url }}"><img src="images/logos/{{ contributor.logo }}" width="{{ contributor.width }}"/></a>
  </li>
{% endfor %}
</ul>
</center>
