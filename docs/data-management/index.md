---
layout: page
title: Data/knowledge management
nav_order: 200

description: General and nanosafety-specific aspects of data/knowledge curation, storage and sharing
permalink: /data-management/
has_children: true
has_toc: false
has_references: true
---
# Data/knowledge management: general and nanosafety-specific aspects

## The data management life cycle
Based on: Papadiamantis et al., 2020<br>
© 2020 by the authors. Licensee MDPI
{: .source }

Despite its significance, structured (meta)data capturing and managing to allow retrieval and sharing (by yourself, your team or the public) is not widely implemented in everyday's scientific practice. This is due to the general perception of data management as being something done for others postponed to the end of a study / project and after the data are fully analysed and published. As a result, data curators accessing original data files or extracting data from a publication are often unable to locate the information needed to fully implement the necessary metadata. Therefore, the first critical change needed is to shift the design and implementation of data management workflows from project end to project outset. It is imperative to encourage (meta)data upload to data repositories after its creation as depicted in the figure below. This can be implemented with appropriate access restrictions in place to protect intellectual properties where necessary, and with automatic release data following publication. As a result of the cyclical nature of the data lifecycle, it is always possible to optimise the (meta)data coverage, taking into account the needs of different users and re-users.

<img src="{{ site.baseurl }}/images/data-management/DataLifeCycle.png" width="80%" />

The resources below will give guidance how such a distributed (meta)data collection and management can be organised for the nanosafety and nanoinformatic areas:

{% include childrenTOC.html page=page pages=site.pages %}

### Did we miss something (we definitely did)? Please let us know.

[Click here to edit the mural below.](https://app.mural.co/invitation/mural/acumenist5564/1657265160401?sender=u8c5a98e82311f4aac9975917&key=9bc484c1-ddd9-4bfc-b25c-771637ef22d4)
<iframe src='https://app.mural.co/embed/6b9dd0cc-48d6-4b63-bb57-b44ff37a1338'
        width='100%'
        height='480px'
        style='min-width: 640px; min-height: 480px; background-color: #f4f4f4; border: 1px solid #efefef'
        sandbox='allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox'>
</iframe>

### And some big resources on data management more generally and neighbouring areas:

[Open Science Training Handbook](https://open-science-training-handbook.gitbook.io/book/)
{: .more-link .more-link--webpages}
[A Guide to Sharing the Data and Benefits of Public Health Surveillance](https://www.chathamhouse.org/sites/default/files/publications/research/2017-05-25-data-sharing-guide.pdf)
{: .more-link .more-link--webpages}
<!---
[Chatham House Resource](https://datasharing.chathamhouse.org/resources/)
{: .more-link .more-link--webpages}
--->

### Additionally, the Demonstration Cases highlight specific aspects like study design and SOPs and implementation:

{% for parent_page in site.pages %}
{% if parent_page.title == "Demonstration cases" %}
{% include childrenTOC.html page=parent_page pages=site.pages %}
{% endif %}
{% endfor %}

References
{: .references-header }
- Papadiamantis et al., 2020: Papadiamantis, A. G.; Klaessig, F. C.; Exner, T. E.; Hofer, S.; Hofstaetter, N.; Himly, M.; Williams, M. A.; Doganis, P.; Hoover, M. D.; Afantitis, A.; Melagraki, G.; Nolan, T. S.; Rumble, J.; Maier, D.; Lynch, I. Metadata Stewardship in Nanosafety Research: Community-Driven Organisation of Metadata Schemas to Support FAIR Nanoscience Data. <i>Nanomaterials</i> <b>2020</b>, <i>10</i> (10), 2033. <a href="https://doi.org/10.3390/nano10102033">https://doi.org/10.3390/nano10102033</a>.
{: .references }
