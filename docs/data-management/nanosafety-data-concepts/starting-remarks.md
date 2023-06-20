---
layout: page
title: Some starting remarks

description: 
permalink: /data-management/nanosafety-data-concepts/starting-remarks/
parent: "(Meta)data concepts from the many years of nanosafety research"
grand_parent: Data/knowledge management
nav_order: 231
has_references: true
nav_exclude: false
---

#  Some starting remarks
In the past years and especially since the introduction of the concept of data FAIRness (derived from the  FAIR principles with FAIR standing for Findable, Accessible, Interoperable and Reusable), data management has again become a major topic not only discussed in circles normally associated with it like database developers and managers or data curators. This can be attributed to two major societal and political trends forcing the scientific community to rethink their standard practices. 
1. There is an increasing skepticism about the trustworthiness of scientific results in the general public towards science, associated with words like “fake news” and “alternative facts”, but also within the scientific community resulting in the announcement of a reproducibility crisis (Baker, 2016). Providing the data and the evidence extractable from it in a more comprehensive, open and easily accessible manner will not be able to restore full confidence in science but will be supportive to provide the best arguments, which can be evaluated and reproduced by others. 
2. The valid motion that maximum benefit needs to be extracted from public research investments has resulted in funding agencies, publishers and governmental agencies demanding the integration of more and more thorough data management and stewardship for making data reuse possible. Especially in the field of chemical and nanomaterial safety assessment, the societal pressure to reduce, refine and replace animal testing, collectively called the 3Rs, has inspired the development on many new methods, both in vitro and in silico. These, because of their currently still missing standardisation and complete validation, are especially demanding with respect to the information accompanying the data needed for trusted reuse or even primary use in regulatory reporting.

In the first part of this series of metadata stewardship papers (Papadiamantis et al., 2020), we described how the practical implementation of high-quality data management can be facilitated by a deeper understanding of what metadata is, and how to capture it, leading to the definition of clear roles and responsibilities across the complete data lifecycle. The main goal of the paper was to make clear that good data management is not a goal in itself done to please funding agencies or an anonymous reuser but that it is a central part of knowledge discovery and innovation providing benefits to but also requiring commitment from everyone. It is also important to mention that the possible benefits are not depending on the setting, in which the data is produced and used, and its size since data sharing and reuse happens at the individual level (using information from earlier work to design new studies) or individual groups up to international, multi-partner projects. Most of the time, we focus on the latter since here many different existing approaches have to be brought together but it is also where funding institutions have the most influence to enforce open data and open science approaches. Big projects also often include specific groups for data management and for developing database solutions made specifically for the projects but ultimately meant to become standard public data resources. An immense amount of expertise and know-how is generated in these activities especially when solutions are handed over from one project to the next and constantly improved over time in this way. In the second paper (Exner et al., in preparation) and in this section of the Handbook meant to become extended supporting information, we describe some best-practice examples and analyse the specific implementations of databases, data warehouses and guidance documents to extract features and learnings optimally addressing challenges in managing nanosafety data. We then discuss how these features might be combined and potentially also separated from a specific database solution to be able to support the different data lifecycle stages with specific tools to collect, curate and manage the on the fly and share it in an already harmonised and interoperable way with downstream stages including analysis, modelling and reuse. 

## A first classification of the reviewed approaches
A way to classify data approaches is by judging if they focus on individual data points or on datasets. Even if this might seem to be a strange classification at first, since datasets are constructed out of data points, it will be used here to show that different applications and stakeholder groups require different representations of the data. 

- As a primary dataset, we define here a set of (meta)data points, which are collected and stored together as part of an experiment or study. Many data curation templates described below are following this concept since they were designed to support experimentalists working on a study to prepare the data for upload to a database including all relevant (meta)data for this study. 
- Other datasets, i.e. secondary datasets, can be created from existing data e.g. to be used as input for nanoinformatics approaches and to train _in silico_ models. These can be stored to document the model development and, thus, are associated with a very specific purpose. However, such datasets generated for data reuse have already some links to the data point focused viewpoint. The data points building the dataset have to be collected from potentially different sources. These might be the primary literature or databases. 
- Before such a secondary dataset is produced, the data points can be seen as independent since they can be combined in many different ways to many different datasets. Such a separation of the data from their production, i.e. from the primary dataset describing the full study, is also often realised in relational databases, which collect information using a data model created to support specific search functionality. For example, data can be organised to provide all available information for a (nano)material, cell system, assay or any other object of interest. It is clear that each data point has to be supported by (meta)data at least on where it comes from and how it was created/curated (provenance metadata). Thus, there has to be a dataset describing the original study associated with it. However, this additional information is, unfortunately, often only seen as of secondary interest to the (re-)user and might even have been lost during the processing of the data. 

Roughly speaking, we could say that the dataset focus is better suited to address the data generator needs while the data point focus is allowing a multitude of data-reuse cases. However, both need high quality standards with respect to the metadata and especially provenance metadata provided.

References
{: .references-header }
- Baker, 2016: Baker, M. 1,500 scientists lift the lid on reproducibility. <i>Nature</i> <b>2016</b>, <i>533</i>, 452–454. <a href="https://doi.org/10.1038/533452a">https://doi.org/10.1038/533452a</a>.
- Papadiamantis et al., 2020: Papadiamantis, A. G.; Klaessig, F. C.; Exner, T. E.; Hofer, S.; Hofstaetter, N.; Himly, M.; Williams, M. A.; Doganis, P.; Hoover, M. D.; Afantitis, A.; Melagraki, G.; Nolan, T. S.; Rumble, J.; Maier, D.; Lynch, I. Metadata Stewardship in Nanosafety Research: Community-Driven Organisation of Metadata Schemas to Support FAIR Nanoscience Data. <i>Nanomaterials</i> <b>2020</b>, <i>10</i> (10), 2033. <a href="https://doi.org/10.3390/nano10102033">https://doi.org/10.3390/nano10102033</a>.
{: .references }

## Keep on reading about (meta)data concepts
{% for sitepage in site.pages %}
    {% if sitepage.title == page.parent %}
        {% include childrenTOC.html page=sitepage pages=site.pages %}
    {% endif %}
{% endfor %}
