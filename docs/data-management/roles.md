---
layout: page
title: Roles and responsibilities

description: Roles and responsibilities in the data life cycle
permalink: /data-management/roles/
parent: Data/knowledge management
nav_order: 210
has_references: true
---
#  Roles and responsibilities in the data life cycle

Based on: Papadiamantis et al., 2020<br>
© 2020 by the authors. Licensee MDPI
{: .source }

<table class="table--sm">
<thead>
<tr>
<th class="vertical-table-header">Roles</th>
<th class="vertical-table-header" style="background-color:#cfe2f3"><div>Set objectives</div></th>
<th class="vertical-table-header" style="background-color:#cfe2f3; border-left-color: white"><div>Design Approach</div></th>
<th class="vertical-table-header" style="background-color:#9fc5e8"><div>Collect</div></th>
<th class="vertical-table-header" style="background-color:#6fa8dc"><div>Processing</div></th>
<th class="vertical-table-header" style="background-color:#6fa8dc"><div>Modelling / Analysis</div></th>
<th class="vertical-table-header" style="background-color:#6fa8dc"><div>Validate</div></th>
<th class="vertical-table-header" style="background-color:#3d85c6; color:white"><div>Store</div></th>
<th class="vertical-table-header" style="background-color:#3d85c6; color:white"><div>Share</div></th>
<th class="vertical-table-header" style="background-color:#3d85c6; color:white"><div>Quality Control</div></th>
<th class="vertical-table-header" style="background-color:#3d85c6; color:white"><div>Annotation</div></th>
<th class="vertical-table-header" style="background-color:#cfe2f3"><div>Determine Relevance</div></th>
<th class="vertical-table-header" style="background-color:#cfe2f3; border-left-color: white"><div>Apply</div></th>
<th class="vertical-table-header" style="background-color:#cfe2f3; border-left-color: white"><div>Confirm Effectiveness</div></th>
<th class="vertical-table-header"><div>Generalise</div></th>
<th class="vertical-table-header"><div>Communication / Education</div></th>
</tr>
</thead>
<tbody>
<tr align="center"><td align="left">Creators</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td> </td> <td>X</td> <td> </td> <td> </td> <td>X</td> <td>X</td> <td>X</td> <td> </td> <td>X</td> <td> </td> <td>X</td></tr>
<tr align="center"><td align="left">Analysts</td> <td> </td> <td>X</td> <td> </td> <td>X</td> <td>X</td> <td>X</td> <td> </td> <td> </td> <td>X</td> <td>X</td> <td>X</td> <td> </td> <td>X</td> <td>X</td> <td>X</td></tr>
<tr align="center"><td align="left">Curators</td> <td> </td> <td> </td> <td> </td> <td>X</td> <td> </td> <td>X</td> <td> </td> <td> </td> <td>X</td> <td>X</td> <td>X</td> <td> </td> <td>X</td> <td> </td> <td>X</td></tr>
<tr align="center"><td align="left">Managers</td> <td> </td> <td> </td> <td> </td> <td> </td> <td> </td> <td> </td> <td>X</td> <td>X</td> <td>X</td> <td> </td> <td> </td> <td> </td> <td>X</td> <td> </td> <td>X</td></tr>
<tr align="center"><td align="left">Customers</td> <td>X</td> <td> </td> <td> </td> <td> </td> <td> </td> <td> </td> <td> </td> <td> </td> <td>X</td> <td> </td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td></tr>
<tr align="center"><td align="left">Shepherds</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td> <td>X</td></tr>
</tbody>
</table>
Colour coding is according to the stages in the [data management life cycle]({{ site.baseurl }}/data-management/).

### Data customers:
Requestors, accessors, users, and re-users of the needed or produced data (evaluation of the scientific and technical FAIRification step by testing for the final goal of usability and reusability in real applications)

### Data creator:
The experimentalists (wet lab and in silico) planning and generating the data (planning, acquisition, and manipulation in the data lifecycle, scientific FAIRification steps)

[LEITAT lab tour](https://toursvirtuales360.es/toursvirtuales/leitat/vtour/index.htm)
<a href="https://toursvirtuales360.es/toursvirtuales/leitat/vtour/index.htm"><img src="{{ site.baseurl }}/images/training/LabTour.png" class="image--right"></a>
Have a look at one place where data is produced.
<br clear="right">
{: .more-link .more-link--app }


### Data analyst:
Data handling, manipulation, analysis including modelling (processing and analysis, scientific FAIRification steps)

### Data curator:
Data and metadata capturing and quality and completeness control (data manipulation and storage)

### Data manager:
Data digitisation in a structured and harmonised format. Metadata implementation and link to data (storage and technical FAIRification steps)

### Data steward:
Oversight or data governance role within an organization or project, and is responsible for ensuring the quality and fitness for purpose of the data assets, including the metadata for those data assets (adapted from Wikipedia).

### Data shepherd:
A new role strongly encouraged here, who operates throughout the data lifecycle.For the data lifecycle ecosystem to be functional and successful, a moderation between its different parts is needed. In this way, it will be possible to “translate” and communicate between the different parties and guarantee the smooth transfer of data from one role to the other. Furthermore, and potentially most importantly, it will be possible to organise feedback loops to pass evaluations of the usefulness and completeness of the (meta)data coverage and to report issues and errors against the normal data flow to upstream roles for their immediate consideration and fixing and, in more severe cases, rethinking of the metadata concept. This mediation should be done by a trained data shepherd combining knowledge and insights on all other roles and requirements. The data shepherd can be described as an enhanced version of a data steward, who not only oversees the data management, handling and quality control processes, but can communicate in a clear and simple language with all parties and resolve any misunderstandings. Data shepherds need to combine experimental, computational and technical background and/or experience and be proficient enough to understand the context in which the different parties express themselves. They will need to lead the data quality control and FAIRness evaluation as well as the continuous optimisation of data workflows, including technical developments to facilitate data curation, annotation, and cleansing.

References
{: .references-header }
- Papadiamantis et al., 2020: Papadiamantis, A. G.; Klaessig, F. C.; Exner, T. E.; Hofer, S.; Hofstaetter, N.; Himly, M.; Williams, M. A.; Doganis, P.; Hoover, M. D.; Afantitis, A.; Melagraki, G.; Nolan, T. S.; Rumble, J.; Maier, D.; Lynch, I. Metadata Stewardship in Nanosafety Research: Community-Driven Organisation of Metadata Schemas to Support FAIR Nanoscience Data. <i>Nanomaterials</i> <b>2020</b>, <i>10</i> (10), 2033. <a href="https://doi.org/10.3390/nano10102033">https://doi.org/10.3390/nano10102033</a>.
{: .references }
