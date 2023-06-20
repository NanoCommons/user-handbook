---
layout: page
title: Data for lifecycle stages

description: Instance maps linked to lifecycle stage data
permalink: /data-management/nanosafety-data-concepts/data-for-lifecycle-stages/
parent: "(Meta)data concepts from the many years of nanosafety research"
grand_parent: Data/knowledge management
nav_order: 234
has_references: true
nav_exclude: false
---

#  Nanomaterial characterisation at every lifecycle stage
Even if the NIKC/NanoFASE templates and the instance concept were used to collect all data produced in the NanoFASE project, only very few instance maps were actually ever created and uptake of the concept was very limited. This is unfortunate as these maps are a very helpful tool to present the design and execution of a study as demonstrated in Martinez et al., 2020 but also understandable since designing them is a very time-consuming task. Therefore, the development of a tool specialized in creating these maps was started and a [first prototype]({{ site.baseurl }}/data-management/instance-maps/) is available. 

During the discussions on what functionality this tool should offer, it became clear that instance maps could be applied also to other areas than mesocosm experiments if the strict rules, what defines a transformation from one instance to the next, and the focus on only the nanomaterial are dropped. We will demonstrate this with one example here. Figure 1 shows rules as available from the NanoFASE Data Curation Manual trying to stay as close as possible to the original NIKC specification of an instance. This results in instance maps showing mainly what happened to the nanomaterial (see examples above and as well as the instance map in Martinez et al., 2020) but the description of the environment is only possible in the medium nodes of an instance (see Figure 1 in the [Nanomaterial fate section]({{ site.baseurl }}/data-management/nanosafety-data-concepts/nanomaterial-fate/)), clearly limiting the possibility to characterise biological systems before exposure and especially at different points of their development stage. 

<img src="{{ site.baseurl }}/images/data-management/metadata-concepts/NanoFASE2.png"/>
**Figure 1**. Definition of instances according to the [NanoFASE Data Curation Manual]({{site.baseurl}}/presentations/data-management/Knowledge%20Base_NanoFASE%20EU-NIKC%20Graphic%20Manual_20190814.pdf)
{: .caption }

Since the NanoFASE project was establishing methods to characterize the materials in complex media, the data collection using these methods but also, e.g., using complex in vitro systems for human hazard evaluation could profit from instances and sub-branches in the map, which are describing only the environment at different life/preparation stages and how this would lead to the final environment, which is then exposed to the nanomaterial. For an experiment investigating the concentrations of Ag nanoparticles in soil and winter wheat, this could look like as presented in Figure 2. The figure was generated with the instance map tool prototype allowing also the integration of protocol nodes to better characterize the transformations from one instance to the next, which can then be linked to the protocol sections in the data template.   

<img src="{{ site.baseurl }}/images/data-management/metadata-concepts/NanoFASE3.png"/>
**Figure 2**. Instance map showing the workflow measuring the concentrations of Ag nanoparticles in soil and winter wheat
{: .caption }


References
{: .references-header }
- Martinez et al., 2020: Martinez, D. S. T.; Da Silva, G. H.; de Medeiros, A. M. Z.; Khan, L. U.; Papadiamantis, A. G.; Lynch, I. Effect of the Albumin Corona on the Toxicity of Combined Graphene Oxide and Cadmium to Daphnia Magna and Integration of the Datasets into the NanoCommons Knowledge Base. <i>Nanomaterials</i> <b>2020</b>, <i>10</i> (10), 1936. <a href="https://doi.org/10.3390/nano10101936">https://doi.org/10.3390/nano10101936</a>.
{: .references }

## Keep on reading about (meta)data concepts
{% for sitepage in site.pages %}
    {% if sitepage.title == page.parent %}
        {% include childrenTOC.html page=sitepage pages=site.pages %}
    {% endif %}
{% endfor %}
