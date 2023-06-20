---
layout: page
title: Nanomaterial fate

description: Instance maps to document nanomaterial fate and more
permalink: /data-management/nanosafety-data-concepts/nanomaterial-fate/
parent: "(Meta)data concepts from the many years of nanosafety research"
grand_parent: Data/knowledge management
nav_order: 233
has_references: true
nav_exclude: false
---

#  Instance maps to document nanomaterial fate and more
The NANoREG templates assume, besides a well-defined SOP for the endpoint resulting from the thorough validation during the production of the OECD test guidelines, that the test object can be defined by some basic information like the nanomaterial ID code e.g. from the [EU JRC Nanomaterials Repository](https://joint-research-centre.ec.europa.eu/scientific-tools-and-databases/jrc-nanomaterials-repository_en), the CAS number and the core chemistry. However, the [CODATA-VAMAS Uniform Description System](https://codata.org/uniform-description-system-version-2-0-now-available/), for example, clearly shows that even for pristine materials, such limited information is not sufficient to distinguish between or compare nanomaterials. It is also well known and demonstrated in the first metadata stewardship paper (Papadiamantis et al., 2020) that the nanomaterial and its properties are dependent on the current environment and the different life-cycle stages the particles already went through. Therefore, additional information preferably in the form of metadata has to be provided and the data management has to be flexible enough to offer the ability to map complex experiments e.g. from nanomaterial environmental exposure and fate experiments. To encode this inseparability of the nanomaterial from its history and current environment, the [NanoInformatics Knowledge Commons (NIKC)](https://ceint.duke.edu/research/nikc) data template, often just called “the NIKC”, was developed at the Center for the [Environmental Implications of Nanomaterials (CEINT)](https://ceint.duke.edu/), Duke University, USA, to be used to guide curators extracting data from the scientific literature. The NIKC is an Excel-based complex template, which allows the simultaneous logging and reporting of both the experimental data and metadata (e.g. methods, instruments, images) information. It treats the experimental protocols and instruments both as data and metadata and links them automatically to the experimental data. Overall, it consists of 9 tabs to cover all the necessary bibliographic and experimental metadata, the raw/processed data and the data annotation process. Most important for this paper and a major difference to other templates, this NIKC introduces the concept of experimental instances, which translates to significant time points of the experiment, which might even cover the complete nanomaterial’s life cycle. The temporal progression can then be visualised in instance maps (Figure 1) showing the transformation from one to the next instances and important information on the material at that stage and the medium / environment. 

<img src="{{ site.baseurl }}/images/data-management/metadata-concepts/NanoFASE1.png"/>
**Figure 1**. Instance maps are dynamic and versatile visualisation that allows experimental deviation, while maintaining the underlying relationships and linking back to the original nanomaterial(s)
{: .caption }

This possibility to describe the fate of a nanomaterial in full detail and to present it in a relatively easy way as instance maps proved beneficial for primary data collection especially for mesocosms experiments looking at nanomaterial exposure to the environment and distribution in water, soil, animals and plants at the primary and secondary exposure sites. The increasing complexity and size of such experiments profit from the dynamic and versatile templates that are able to accommodate different types and deviations of the original experiment or link back to a common starting point (e.g. nanomaterials characterisation). The NIKC offers that functionality with a tree-like structure, the trunk of which corresponds to the initial nanomaterial(s) physicochemical characterisation (see Figure 1). Several branches then translate into various experimental variations like different exposure routes and hold the data and metadata of the various experimental instances. All these benefits led to the adoption and extension of the concepts and tooling around it by the NanoFASE and the NanoCommons projects. The resulting EU modified version makes input of data at the stage of data creation easier, gives more guidance on what metadata should be covered (in the NIKC case, this was determined by which metadata was available in the publications) and allows the automatic semantic annotation when inserted into the [NanoCommons Knowledge Base]({{ site.baseurl }}/data-management/data-resources/NanoCommons-KB/).

References
{: .references-header }
- Papadiamantis et al., 2020: Papadiamantis, A. G.; Klaessig, F. C.; Exner, T. E.; Hofer, S.; Hofstaetter, N.; Himly, M.; Williams, M. A.; Doganis, P.; Hoover, M. D.; Afantitis, A.; Melagraki, G.; Nolan, T. S.; Rumble, J.; Maier, D.; Lynch, I. Metadata Stewardship in Nanosafety Research: Community-Driven Organisation of Metadata Schemas to Support FAIR Nanoscience Data. <i>Nanomaterials</i> <b>2020</b>, <i>10</i> (10), 2033. <a href="https://doi.org/10.3390/nano10102033">https://doi.org/10.3390/nano10102033</a>.
{: .references }

## Keep on reading about (meta)data concepts
{% for sitepage in site.pages %}
    {% if sitepage.title == page.parent %}
        {% include childrenTOC.html page=sitepage pages=site.pages %}
    {% endif %}
{% endfor %}
