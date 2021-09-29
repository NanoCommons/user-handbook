---
layout: page
title: Data management
nav_order: 200

description: General and nanosafety-specific aspects of data curation, storage and sharing
permalink: /data-management/
has_children: true
has_toc: false
---
# Data management: general and nanosafety-specific aspects

## The data management life cycle

Based on: Papadiamantis, A.G.; Klaessig, F.C.; Exner, T.E.; Hofer, S.; Hofstaetter, N.; Himly, M.; Williams, M.A.; Doganis, P.; Hoover, M.D.; Afantitis, A.; Melagraki, G.; Nolan, T.S.; Rumble, J.; Maier, D.; Lynch, I. Metadata Stewardship in Nanosafety Research: Community-Driven Organisation of Metadata Schemas to Support FAIR Nanoscience Data. Nanomaterials 2020, 10, 2033. [https://doi.org/10.3390/nano10102033](https://doi.org/10.3390/nano10102033)
{: .source }

Despite its significance, structured (meta)data capturing and managing to allow retrieval and sharing (by yourself, your team or the public) is not widely implemented in everyday's scientific practice. This is due to the general perception of data management as being something done for others postponed to the end of a study / project and after the data are fully analysed and published. As a result, data curators accessing original data files or extracting data from a publication are often unable to locate the information needed to fully implement the necessary metadata. Therefore, the first critical change needed is to shift the design and implementation of data management workflows from project end to project outset. It is imperative to encourage (meta)data upload to data repositories after its creation as depicted in the figure below. This can be implemented with appropriate access restrictions in place to protect intellectual properties where necessary, and with automatic release data following publication. As a result of the cyclical nature of the data lifecycle, it is always possible to optimise the (meta)data coverage, taking into account the needs of different users and re-users.

![](../images/data-management/DataLifeCycle.png)

The resources below will give guidance how such a distributed (meta)data collection and management can be organised:

{% include childrenTOC.html page=page pages=site.pages %}

Additionally, the Demonstration Cases show highlight specific aspects like study design and SOPs and implementation:

{% for parent_page in site.pages %}
{% if parent_page.title == "Demonstration cases" %}
{% include childrenTOC.html page=parent_page pages=site.pages %}
{% endif %}
{% endfor %}