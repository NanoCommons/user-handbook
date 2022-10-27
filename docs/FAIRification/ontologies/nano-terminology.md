---
layout: page
title: Harmonising nano terminology
description_long: This page gives an overview of the activities towards the development of standardised terminologies and ontologies in the nanosafety / nanoinformatics area, training resources and tool.
permalink: /FAIRification/ontologies/nano-terminology/
parent: Terminology / ontology
grand_parent: FAIRification
has_children: false
nav_order: 312

universe_topics:
  - name: semantic annotation
    title: Annotate your science
    url: /FAIRification/ontologies/nano-terminology/#for-data-producers-and-curators-annotating-data
    shape: rect
    x: 4
    y: 2
    w: 590
    h: 407
  - name: term definition
    title: Create a defined terminology with clear definitions
    url: /FAIRification/ontologies/nano-terminology/#for-domain-experts-generating-harmonised-terminologies-including-clear-definitions
    shape: rect
    x: 606
    y: 2
    w: 590
    h: 407
  - name: ontology development
    title: Create semantic relationships to improve the ontologies
    url: /FAIRification/ontologies/nano-terminology/#for-ontology-developments-integrating-collections-of-terms-into-a-semantic-model
    shape: rect
    x: 4
    y: 422
    w: 1185
    h: 287
  - name: ontology governance
    title: Organise and harmonise ontologies within and across disciplines (to be established)
    shape: rect
    x: 1207
    y: 2
    w: 186
    h: 706
---

# Harmonised terminology, ontologies development and semantic annotation
{: .no_toc }

Semantic annotation of data and generally of scientific output across all areas of nanosafety and nanoinformatics still requires large effort to define and build the required terminologies/ontologies, to provide the support infrastructure for data input and curation and also training to foster general uptake. 
{: .lead }

Many different competences (domain experts, ontology experts, software development experts,...) are needed and many tools have to be made available to support the ontology development as well as then the users willing to annotate their data, protocols and standard operation procedures, results and publications all leading to more open science and FAIRness. To help all stakeholders understand their roles and how to communicate with each other, this area of the user handbook provides general introductions, tutorials and training materials as well as links to a collaborative research platform for terminology development.

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## The Ontology universe
First, it is important to place yourself into the ontology universe. Are you a data produced who wants to annotate your data, a domain expert who wants to provide your expertise to clearly define the terms or an ontology developer in the nano or neighbouring area.
{: .mb-4 }

{% include clickable_image.html image_name="FAIRification/OntologyUniverse.png" image_width=1396 image_height=720 image_areas=page.universe_topics %}

**The Ontology universe:** Click on one area to view relevant guidance and tools.
{: .caption }

## Nanosafety-specific ontologies and project contributions

This section includes information on specific nanosafety ontologies or ontology development projects.

### eNanoMapper
<img src="{{ site.baseurl }}/images/logos/eNanoMapper.png" width="200" class="image--right" />
The eNanoMapper ontology is one of the largest collections of nanosafety and nanoinformatics terminology. It was developed first in the eNanoMapper project and is now maintained and extended by the NanoCommons and NanoSolveIT projects and supported by many other projects providing new terms and community-agreed definitions.

An introduction to the ontology is available in this short video:
<iframe width="364" height="273" src="//www.youtube.com/embed/rVIc_fr5R1Y" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>

[Slides of the introduction video]({{site.baseurl}}/FAIRification/ontologies/eNanoMapper-intro/)
{: .more-link .more-link--slides }

[Extensions to the eNanoMapper Ontology by NanoCommons](https://zenodo.org/record/3601620)
This report available on Zenodo describes the work extending the ontology done in the NanoCommons projects including a description of the system for maintenance and the major releases 5 and 6.
{: .more-link .more-link--text }

<!-- [Extensions to the eNanoMapper Ontology by NanoSolveIT]()
{: .more-link .more-link--text } -->

### Nanofabrication taxonomy
![]({{ site.baseurl }}/images/FAIRification/NanoFabNet-taxonomy.png)

[Implementation roadmap for infrastructures, knowledge & skills development in nanofabrication](https://acumenist.com/implementation-roadmap-for-infrastructures-knowledge-skills-development-in-nanofabrication/)
<img src="{{ site.baseurl }}/images/logos/NanoFabNet-New-Logo.png" width="200" class="image--right" />
The proposed NanoFabNet taxonomy currently covers ca. 80-90% of nanofabrication tools available in studied nanofabrication facilities, and is constructed in a flexible way, so that new categories can easily be added, if deemed necessary; it is thus only a starting point, which needs to be adopted and extended by a broad nanofabrication community and integrated with other nano taxonomies and ontologies to reach its full potential.
{: .more-link .more-link--text }

### ACEnano
<img src="{{ site.baseurl }}/images/logos/acenano.png" width="200" class="image--right" />
Due to its focus on physico-chemical characterisation, the ACEnano project collected terminology specifically in this area and proposed it to be added to the eNanoMapper ontology.

[Presentation of the concept during a general assembly]({{site.baseurl}}/FAIRification/ontologies/ACEnano-WP4/)
The slides show how first a simple spreadsheet was used to collect terms needed for annotation of the ACEnano knowledge warehouse and datasets stored in it. This is now replaced by a physico-chemical characterisation area in the [EU NanoSafety Terminology Harmonizer](#for-domain-experts-generating-harmonised-terminologies-including-clear-definitions).
{: .more-link .more-link--slides }

[Corresponding deliverable report](https://zenodo.org/record/3753040)
{: .more-link .more-link--text }

## Guidance and tools

### For data producers and curators annotating data
Semantic annotation is needed for understanding and evaluating the data as well as finding, accessing and integrating it in a more automatic way. Nanosafety and nanoinformatics produce many different types of data, all needing specific terminology for their annotation. Currently no single ontology is able to cover all these areas. Therefore, multiple ontologies have to be used for the time being, which, fortunately, follow similar concepts with respect to searching and using of terms. Training material was generated for the eNanoMapper ontology, which is generally helpful when annotating data.

[Using the eNanoMapper ontology](https://www.youtube.com/watch?v=WpKMukSbG7s&list=PLTxtsS5QQK1w8WvgocPu-xI5bJwDM8t2g&index=5)
Webinar given by Janna Hastings (EMBL-EBI, UK) as part of the eNanoMapper training
{: .more-link .more-link--video }

<img src="{{site.baseurl}}/images/FAIRification/eNM-bioportal.png" class="image--left" />
The eNanoMapper ontology can be accessed through three different ways, namely online via BioPortal and AberOWL or locally using the open-source Protégé software.
<br clear="all">

[Browsing the eNanoMapper ontology with BioPortal, AberOWL and Protégé](https://enanomapper.github.io/tutorials/BrowseOntology/Tutorial%20browsing%20eNM%20ontology.html)
The tutorial focusses on browsing through the eNM ontology when one would be interested in finding a Unique Resource Identifier (URI) for mapping a term originating from, for example, a database schema. Using URIs for database schemas will facilitate the harmonization of data originating from different sources and will make them more comparable.
{: .more-link .more-link--webpages }

BioPortal is also useful to search across many different ontologies in the life sciences:

[BioPortal](https://enanomapper.github.io/tutorials/BrowseOntology/Tutorial%20browsing%20eNM%20ontology.html)
Searching and browsing tool for terms across many ontologies including eNanoMapper
{: .more-link .more-link--app }

<!--- Finally, if you do not find anything, you can request new terms using the [provisional term generator]() and immediately continue with your data annotation. --->

#### Put this all into action
Have a look at the NanoCommons Workshop “Annotating Your Experimental Data Workshop” by Egon Willighagen providing hands-on training to participants in how to enrich their (published) data to give it more impact, by linking the description of the experimental data to community terminology (ontology terms) and making their research articles findable to other researchers.

[Spreadsheets in nanosafety research](https://www.youtube.com/watch?v=YSH-COr30BI&t=7s)
{: .more-link .more-link--video }

[FAIR starts with findable: data sets and nanomaterials](https://www.youtube.com/watch?v=VqerJojpBpM)
{: .more-link .more-link--video }

[Slides available on Zenodo](https://zenodo.org/record/3772185)
{: .more-link .more-link--webpages }

### For domain experts generating harmonised terminologies including clear definitions
The most time consuming part of ontology development is the collection of the needed terms and agree on the preferred synonym and clear definition. This is done in different projects as described above. However, with the tools described here, everybody is able to participate and provide expert knowledge.

#### EU NanoSafety Terminology Harmonizer (also known as GRACIOUS WIKI)
Provided by the GRACIOUS project this is a tool to work collaboratively on a collection of well defined terms to be used across the complete nanosafety community. Separate but harmonised areas exist at the moment for physicochemical characterisation, nanoinformatics and simulations, bio-nano interactions, Safe-by-Design, regulation and manufacturing. More areas can always be added. Everyone is welcome to contribute to these area. Besides these public areas, also project specific areas exist.
![EU NanoSafety Terminology Harmonizer]({{site.baseurl}}/images/FAIRification/terminology-harmonizer.jpg)

[Access the harmonizer](https://terminology-harmonizer.greendecision.eu/)
{: .more-link .more-link--app }

[GRACIOUS WIKI Introduction (Part 1)](https://www.youtube.com/watch?v=GaEUTYFD0SQ)
{: .more-link .more-link--video }
[GRACIOUS WIKI Introduction (Part 2)](https://www.youtube.com/watch?v=IjqN28OzleE)
{: .more-link .more-link--video }


### For ontology developments integrating collections of terms into a semantic model

[Expanding the eNanoMapper Ontology](https://zenodo.org/record/4032809)
This poster presented at ICBO2020 describes ow the eNanoMapper ontology was recreated using ROBOT’s MERGE command.
{: .more-link  .more-link--slides }

[Adding ontology terms to eNanoMapper](https://enanomapper.github.io/tutorials/Added%20ontology%20terms/README.html)
<img src="{{site.baseurl}}/images/FAIRification/eNM-slicing.png" width="20%" class="image--right" />
The eNanoMapper ontology is mostly composed of parts of other ontologies, with extensions here and there. This tutorial introduces the tools to slice parts out of these ontologies and merge them together.
<br clear="all">
{: .more-link .more-link--webpages }

[eNanoMapper issue tracker to propose new terms](https://github.com/enanomapper/ontologies/issues)
New terms to be added to eNanoMapper can be proposed using the issue tracker on github. This should be used by the ontology development teams from the different project after the terms and corresponding definitions have been discussed and approved by the community. To generate these definitions and get community approval, the [EU NanoSafety Terminology Harmonizer](#for-domain-experts-generating-harmonised-terminologies-including-clear-definitions) should be used.
{: .more-link .more-link--app }
