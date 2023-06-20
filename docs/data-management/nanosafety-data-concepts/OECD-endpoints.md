---
layout: page
title: NANoREG templates covering OECD endpoints

description: "NANoREG template"
permalink: /data-management/nanosafety-data-concepts/OECD-endpoints/
parent: "(Meta)data concepts from the many years of nanosafety research"
grand_parent: Data/knowledge management
nav_order: 232
has_references: true
nav_exclude: false
---

#  NANoREG templates covering OECD endpoints
The complex nature and the unique properties of nanomaterials requires a thorough characterization of the material going into the experiment investigating their safeness to be able to clearly identify it and the state it is in, and separate it from other similar materials, which still might show very different properties and behaviors. Examples of such complexity have been given in Papadiamantis et al., 2020, and when presenting the first version of a line notation as a unique identifier for a specific material or material group, called the NInChI (Lynch et al., 2020). These needs led to the development of [specific data reporting templates and minimal reporting standards]({{ site.baseurl }}/data-management/data-completeness-quality/) as well as nano-specific modification of legislation and regulatory reporting requirements. One example of the latter is the revision of REACH technical annexes ([Commission Regulation (EU) 2018/1881](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2018.308.01.0001.01.ENG)) introducing nanoforms to separate groups of nanomaterials of the same chemical core constitution but different properties. 

To address the needs for clear rules on how to provide experimental evidence and the supporting data in regulatory setting, [NANoREG](https://cordis.europa.eu/project/id/310584) started to establish minimal reporting standards based on rich metadata in the form of [reporting templates](https://www.rivm.nl/en/about-rivm/mission-and-strategy/international-affairs/international-projects/nanoreg/nanoreg-results-repository-sub-page-isa-tab-nano-templates). They are based on the list of endpoints published by the [OECD in 2010 for phase one of the sponsorship programme for the testing of manufactured nanomaterials](https://one.oecd.org/document/env/jm/mono(2010)46/en/pdf) and other regulatory relevant endpoints. Technically, they are based on the ISA-TAB-Nano format (Thomas et al., 2013) (more information is available in Papadiamantis et al., 2020), are free to use and cover experimental procedures in the three areas of 
1. physicochemical characterisation, 
2. mammalian toxicology – in vivo and 
3. mammalian toxicology – in vitro. 

The data resulting from the project as well as the follow-up project [Nanoreg2](https://cordis.europa.eu/project/id/646221) are stored in the [eNanoMapper data warehouse system](https://search.data.enanomapper.net/) following a more dataset focused approach as described above as already implied by the choice of the data file format ISA-TAB, with ISA standing for Investigation, Study and Assay representing the main structure of the format. Using the linked sources approach described below, the metadata is now also integrated in the NanoCommons Knowledge Base in a restructured way to fit the nanomaterial-focused and data-point-focused view implemented in this database. 

According to the creators, NANoREG templates can be modified to fit diverse experimental needs. Different templates in Excel format exist for specific endpoints, although different experimental methods measuring a single endpoint (e.g. nanomaterial size) are reported through a single template and, thus, cannot fully cover the specifics of the method.  The NANoREG templates follow the OECD nomenclature where possible. Each template also includes the minimum set of metadata needed, according to the NANoREG project, to satisfy OECD reporting standards for the described method/protocol.

The NANoREG template structure (Figure 1) is divided into 4 parts. The first part, called the modules, defines the field of study (physicochemical characterisation, in vivo and/or in vitro assays) for which the template will be used. The second defines the specific Excel workbooks as per the OECD list of endpoints and includes separate sheets according to the techniques/assays used. If a user needs to add a new technique/assay they will need to add a new workbook sheet. Finally, each technique/assay is defined by the necessary experimental parameters (data and metadata). For the biological endpoints a section for the physicochemical characterisation of the material(s) used is also included.

<img src="https://joint-research-centre.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2017-05/2_att18815.jpg?itok=C8VFq3q0"/>
<a href="https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/harmonising-experimental-data-recording-environmental-health-and-safety-nanomaterials-2017-05-08_en">**Figure 1**. The structure of the NANoREG templates for nanosafety data logging</a>
{: .caption }

Due to the well-defined and standardized experimental procedures including characterisation of the starting material, study design, experimental setup and processing of the resulting data, most information can directly be extracted from the corresponding OECD test guidelines, guidance documents and corresponding standard operating procedures (SOP).  reducing the need for details about the experiment to be provided as metadata. For example, the general genotoxicity endpoint is described by just:
- 10 metadata fields with sample information (replicate number, NM ID code, NM chemistry (core), CAS number, vial number, NM supplier, material state,  use of dispersant, dispersant reference and sample name)
- 7 fields with general information on the experiment (reporting organisation, operator, date of preparation, date of analysis, module (e.g. phys-chem, in vitro tox, in vivo tox, eco tox, …), endpoint and assay name)
- 8 fields to characterise the size distribution (dispersion protocol, size distribution (e.g. monomodal, bimodal or multimodal), size distribution analysis method, dispersion medium, mass concentration, diameter, in weight (w) or number (n) and PDI)
- 11 experimental parameters (animal model, gender, exposure route, exposure method, exposure time, dose, animals/group, cell tissue, specific effect, method and experimental groups)
- and the reference to the SOP. 

As another example, the layout of the template for the size endpoint is shown in Figure 2.

<img src="{{ site.baseurl }}/images/data-management/metadata-concepts/NANoREG-size-TEM.png"/>
**Figure 2**. Sections of the NANoREG template to document size measurement by TEM.
{: .caption }

References
{: .references-header }
- Lynch et al., 2020: 'Lynch, I.; Afantitis, A.; Exner, T.; Himly, M.; Lobaskin, V.; Doganis, P.; Maier, D.; Sanabria, N.; Papadiamantis, A. G.; Rybinska-Fryca, A.; Gromelski, M.; Puzyn, T.; Willighagen, E.; Johnston, B. D.; Gulumian, M.; Matzke, M.; Green Etxabe, A.; Bossa, N.; Serra, A.; Liampa, I.; Harper, S.; Tämm, K.; Jensen, A. C.; Kohonen, P.; Slater, L.; Tsoumanis, A.; Greco, D.; Winkler, D. A.; Sarimveis, H.; Melagraki, G. Can an InChI for Nano Address the Need for a Simplified Representation of Complex Nanomaterials across Experimental and Nanoinformatics Studies? <i>Nanomaterials</i> <b>2020</b>, <i>10</i> (12), 2493. <a href="https://doi.org/10.3390/nano10122493">https://doi.org/10.3390/nano10122493</a>.'
- Papadiamantis et al., 2020: Papadiamantis, A. G.; Klaessig, F. C.; Exner, T. E.; Hofer, S.; Hofstaetter, N.; Himly, M.; Williams, M. A.; Doganis, P.; Hoover, M. D.; Afantitis, A.; Melagraki, G.; Nolan, T. S.; Rumble, J.; Maier, D.; Lynch, I. Metadata Stewardship in Nanosafety Research: Community-Driven Organisation of Metadata Schemas to Support FAIR Nanoscience Data. <i>Nanomaterials</i> <b>2020</b>, <i>10</i> (10), 2033. <a href="https://doi.org/10.3390/nano10102033">https://doi.org/10.3390/nano10102033</a>.
- Thomas et al., 2013: Thomas, D. G.; Gaheen, S.; Harper, S. L.; Fritts, M.; Klaessig, F.; Hahn-Dantona, E.; Paik, D.; Pan, S.; Stafford, G. A.; Freund, E. T.; Klemm, J. D.; Baker, N. A. ISA-TAB-Nano: A Specification for Sharing Nanomaterial Research Data in Spreadsheet-based Format <i>BMC Biotechnology</i> <b>2013</b>, <i>13</i>, 2. <a href="https://doi.org/10.1186/1472-6750-13-2">https://doi.org/10.1186/1472-6750-13-2</a>.
{: .references }

## Keep on reading about (meta)data concepts
{% for sitepage in site.pages %}
    {% if sitepage.title == page.parent %}
        {% include childrenTOC.html page=sitepage pages=site.pages %}
    {% endif %}
{% endfor %}
