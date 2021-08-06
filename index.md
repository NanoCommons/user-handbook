---
layout: home
title: Home
nav_order: 1
description: Data and nanoinformatics shepherds’ user guidance handbook
permalink: /
projects:
  - url: https://nanocommons.eu
    logo: nanocommons.png
    width: 100
  - url: https://openrisknet.org
    logo: openrisknet.png
    width: 256
  - url: https://www.h2020gracious.eu/
    logo: gracious.png
    width: 200
  - url: https://nanosolveit.eu/
    logo: nanosolveit.jpg
    width: 200
  - url: http://www.acenano-project.eu/
    logo: acenano.png
    width: 200

annotater:
  - name: This
    tooltip: Let's work together

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
    title: Preserving means bringing your data so that it can be found by you but also in institutional repositories and public data respositories and warehouses 
    shape: circle
    x: 384
    y: 409
    r: 70
  - name: aquisition
    title: Acquisition 
    shape: circle
    x: 526
    y: 200
    r: 50
  - name: cleansing-prcessing
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

This is an activity of **NanoCommons** or better **NanoMaterialCommons**, not meaning the [NanoCommons project](https://nanocommons.eu) even if it started it all but in the sense of a commons for nanomaterials following the [definition from Wikipedia](https://en.wikipedia.org/wiki/Commons):

_“The commons is the cultural and natural resources accessible to all members of a society, including natural materials such as air, water, and a habitable earth. These resources are held in common, not owned privately. Commons can also be understood as natural resources that groups of people (communities, user groups) manage for individual and collective benefit. Characteristically, this involves a variety of informal norms and values (social practice) employed for a governance mechanism. Commons can be also defined as a social practice of governing a resource not by state or market but by a community of users that self-governs the resource through institutions that it creates.”_

If you are a
- scientist (wet or dry lab), who produces and wants to share data
- data manager, curator or steward and want to become more
- computer geek

in the area of nanosafety, nanoinformatics or material safe-by design or want to become one, then this handbook is for you.


## Our mission
This user guidance handbook is one resource of our commons collecting and structuring knowledge and training materials for **the two strongly interlinked areas of data management for nanomaterials and nanoinformatics**. Besides covering general concepts, guidelines and recommendations, it will show, demonstrate and train real-world solutions in the form of data sources, software and workflows integrated or linked into the NanoCommons infrastructure, where both terms are meant in a very broad sense to be able to cover as many solutions as possible from all projects working in the nanosafety area and neighbouring fields.

The interrelationships can be visualised as two interlinked cycles together representing the extended data life cycle. You can hover over the figure to access short introductions to the different aspects or on the three general areas in the lower part of the figure to access general information with links to individual subareas.

<figure id=topics>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 890 577" >
	<image width="890" height="577" xlink:href="images/StartingPage.png">
	</image>
{% for s in page.topics %}
  {% if s.url %}
	<a xlink:href="{{ site.baseurl }}/data-management/" title="test">
  {% endif %}
  {% if s.shape == "circle" %}
		<circle cx="{{ s.x }}" cy="{{ s.y }}" fill="#fff" opacity="0" r={{ s.r }}>
  {% elsif s.shape == "rect" %}
  	<rect x="{{ s.x }}" y="{{ s.y }}" fill="#fff" opacity="0" width="{{ s.w }}" height="{{ s.h }}" >
 {% endif %}
     <title>{{ s.title }}</title>
    </{{ s.shape }} >
  {% if s.url %}
	</a>
  {% endif %}
{% endfor %}
</svg>
</figure>

## Working together
Many different research groups and projects (small and large) have and are developing data resources, software and platforms combining these. The NanoCommons infrastructure is meant to be even one level above these platforms to bring these together and gover harmonisation and interoperability aspects across platform / projects / country borders.The success is dependent on the underlying platforms and services and since not all information on this can and should be reproduced here, this will lead you to [short summaries and access links to the partnering platforms and networks]().

Information on individual tools and services including the contact points and specialised material can be found in the [service catalogue](https://infrastructure.nanocommons.eu/services/).


## A big THANK YOU to the contributing projects!

<ul class="list-style-none">
{% for contributor in page.projects %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.url }}"><img src="images/{{ contributor.logo }}" width="{{ contributor.width }}"/></a>
  </li>
{% endfor %}
</ul>
