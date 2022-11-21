---
layout: home
title: Home
nav_order: 1
description: Data and nanoinformatics shepherds’ user guidance handbook
permalink: /
projects:
  - url: https://www.nanosafetycluster.eu/
    logo: NSC.png
    width: 180
  - url: https://www.nanocommons.eu
    logo: nanocommons.png
    width: 100
  - url: https://worldfair-project.eu/
    logo: worldfair.webp
    width: 80
  - url: https://openrisknet.org
    logo: openrisknet.png
    width: 240
  - url: https://nanosolveit.eu/
    logo: nanosolveit.jpg
    width: 160
  - url: https://www.h2020gracious.eu/
    logo: gracious.png
    width: 120
  - url: http://www.acenano-project.eu/
    logo: acenano.png
    width: 160
  - url: http://www.nanofase.eu/
    logo: nanofase.png
    width: 160
  - url: https://ceint.duke.edu/research/nikc
    logo: NIKC.png
    width: 120
  - url: http://www.enanomapper.net/
    logo: eNanoMapper.png
    width: 120
  - url: https://www.asina-project.eu/
    logo: ASINA.png
    width: 120
  - url: https://www.sabydoma.eu/
    logo: Sabydoma.png
    width: 160
  - url: https://www.sabyna.eu/
    logo: SAbyNA.png
    width: 160
  - url: https://nanofabnet.eu/
    logo: NanoFabNet.png
    width: 160
  - url: https://susnanofab.eu/
    logo: SUSNANOFAB.png
    width: 120
  - url: https://nanopartikel.info/en/
    logo: dana-logo.png
    width: 120
  - url: https://nanoharmony.eu
    logo: nanoharmony.webp
    width: 200

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
<table class="table--no-border">
  <tr>
    <td><a href="https://zenodo.org/badge/latestdoi/392611144"><img src="https://zenodo.org/badge/392611144.svg"></a></td>
    <td align="right"><a href="{{ site.baseurl }}/changelog">See the newest changes</a></td>
  </tr>
</table>
# NanoCommons User Guidance Handbook 
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Book",
  "inLanguage": "en-gb",
  "name": "NanoCommons User Guidance Handbook",
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

A knowledge resource for the nanosafety community from the data and nanoinformatics shepherds
{: .lead }

This online resource started by collecting and organising knowledge and training materials for the **two strongly interconnected areas of data management for nanosafety and nanoinformatics** but will be constantly extended to also cover areas like risk assessment, Safe-and-Sustainable-by-Design and nanofabrication directly profiting from data, tools and services.

{% include clickable_image.html image_name="StartingPage.png" image_width=890 image_height=577 image_areas=page.topics %}

The generation of knowledge, common to all these areas, can be visualised as two interlinked cycles. You can hover over the figure to access short introductions to the different aspects of the cycle. Click on any of the three general areas in the lower part of the figure to access information on that topic.

If you are
- a nano scientist (wet or dry lab), who produces and wants to access and share data and knowledge
- a data manager, curator or steward or even shepherd
- a computer geek interested in nano
- want to become one of the above

or are just interested in these areas, then this handbook is for you.

## Working together
Many different research groups and projects (small and large) have and are developing data resources, software and platforms. The NanoCommons infrastructure is meant to be even one level above these platforms to bring them together and govern harmonisation and interoperability aspects across platform / projects / country borders. The success is dependent on the underlying platforms and services and since not all information on these can and should be reproduced here, we provide [short summaries and access links to the partners' websites, platforms and networks]({{ site.baseurl }}/about-and-partner-projects/).

**If you are a fan of collaborative research and want to get involved personally or with your project in extending and strengthening this community resource, you can find contact details in the [About page]({{ site.baseurl }}/about-and-partner-projects/)**. 


## A big THANK YOU to the contributing projects!

<center>
<ul class="list-style-none mt-6">
{% for contributor in page.projects %}
  <li class="d-inline-block mr-3 mb-3">
     <a href="{{ contributor.url }}"><img src="images/logos/{{ contributor.logo }}" width="{{ contributor.width }}" align="middle"/></a>
  </li>
{% endfor %}
</ul>
</center>
