---
layout: page
title: Harmonising terminology
permalink: /FAIRification/ontologies
parent: FAIRification
has_children: false
nav_order: 30

universe_topics:
  - name: semantic annotation
    title: Annotate your science
    url: /FAIRification/ontologies/#for-data-producers-and-curators-annotating-data
    shape: rect
    x: 4
    y: 2
    w: 590
    h: 407
  - name: term definition
    title: Create a defined terminology with clear definitions
    url: /FAIRification/ontologies/#for-domain-experts-generating-harmonised-terminologies-including-clear-definitions
    shape: rect
    x: 606
    y: 2
    w: 590
    h: 407
  - name: ontology development
    title: Create semantic relationships to improve the ontologies
    url: /FAIRification/ontologies/#for-ontology-developments-integrating-collections-of-terms-into-a-semantic-model
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

Semantic annotation of data and generally of scientific output across all areas of nanosafety and nanoinformatics still requires large additional efforts to define and building the required terminologies/ontologies, to provide the support infrastructure for data input and curation but also training to foster general uptake. Many different competences (domain experts, ontology experts, software development experts,...) are needed and many tools have to be made available to support the ontology development as well as then the users willing to annotated their data, protocols and standard operation procedures, results and publications all leading to more open science and FAIRness. To help all players to understand their roles and how to communicate with each other, this area of the user handbook provides general introductions, tutorials and training materials as well as links to a collaborative research platform for terminology development.
{: .lead }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## The Ontology universe
{: .mb-4 }

{% include clickable_image.html image_name="FAIRification/OntologyUniverse.png" image_width=1396 image_height=720 image_areas=page.universe_topics %}

**The Ontology universe:** Click on one area to be linked to relevant guidance and tools.

## Nanosafety-specific ontologies

This section includes information on specific nanosafety ontologies or ontology development projects.

### eNanoMapper
The eNanoMapper ontology is one of the largest collection of nanosafety and nanoinformatics terminology. It was developed first in the eNanoMapper project, is now maintained and extended by the NanoCommons and NanoSolveIT projects and supported by many other projects providing new terms and community-agreed definitions. 

An introduction to the ontology is available in this short video:
<center>
<iframe width="364" height="273" src="//www.youtube.com/embed/rVIc_fr5R1Y" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>
</center>

[Slides of the introduction video]({{site.baseurl}}/FAIRification/ontologies/eNanoMapper-intro/)
{: .more-link .more-link--slides }

[Extensions to the eNanoMapper Ontology by NanoCommons](https://zenodo.org/record/3601620#.YSipJY4zaUm)
This report available on Zenodo describes the work extending the ontology done in the NanoCommons projects including a description of the system for maintenance and the major releases 5 and 6.  
{: .more-link .more-link--text }

[Extensions to the eNanoMapper Ontology by NanoSolveIT]()
{: .more-link .more-link--text }


### ACEnano
Due to its focus on physico-chemical characterisation, the ACEnano project collected terminology specifically in this area and proposed it to be added to the eNanoMapper ontology. 

[Presentation of the concept during a general assembly]({{site.baseurl}}/FAIRification/ontologies/ACEnano-WP4/)
The slides show how first a simple spreadsheet was used to collect terms needed for annotation of the ACEnano knowledge warehouse and datasets stored in it. This is now replaced by a physico-chemical characterisation area in the [EU NanoSafety Terminology Harmonizer](#for-domain-experts-generating-harmonised-terminologies-including-clear-definitions).
{: .more-link .more-link--slides }

[Corresponding deliverable report](https://zenodo.org/record/3753040#.YSi2Go4zaUk)
{: .more-link .more-link--text }

## Guidance and tools

### For data producers and curators annotating data

[Browsing the eNanoMapper ontology with BioPortal, AberOWL and Protégé](https://enanomapper.github.io/tutorials/BrowseOntology/Tutorial%20browsing%20eNM%20ontology.html) 
<img src="{{site.baseurl}}/images/FAIRification/eNM-bioportal.png" width="40%" class="image--right" />
The eNM ontology can be accessed through three different ways, namely online via BioPortal and AberOWL or locally using the open-source Protégé software. The tutorial focusses on browsing through the eNM ontology when one would be interested in finding a Unique Resource Identifier (URI) for mapping a term originating from, for example, a database schema. Using URIs for database schemas will facilitate the harmonization of data originating from different sources and will make them more comparable.
<br clear="all">
{: .more-link .more-link--webpages }


### For domain experts generating harmonised terminologies including clear definitions

[EU NanoSafety Terminology Harmonizer](https://terminology-harmonizer.greendecision.eu/)
Provided by the GRACIOUS project this is a tool to work collaboratively on a collection of well defined terms to be used across the complete nanosafety community. Separate but harmonised areas exist at the moment for physicochemical characterisation, nanoinformatics and simulations, bio-nano interactions, safe-by-design, regulation and manufacturing. More areas can always be added. Everyone is welcome to contribute to these area. Besides these public areas, also project specific areas exist.
[![EU NanoSafety Terminology Harmonizer]({{site.baseurl}}/images/FAIRification/terminology-harmonizer.jpg)](https://terminology-harmonizer.greendecision.eu/)
{: .more-link .more-link--app }


### For ontology developments integrating collections of terms into a semantic model

[Expanding the eNanoMapper Ontology](https://zenodo.org/record/4032809#.YSi-JI4zaUm)
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
