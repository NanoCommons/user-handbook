---
layout: page
title: Protocol reporting questionnaires

description: "ACEnano Protocol reporting questionnaires: Structured input interfaces to guide users"
permalink: /data-management/nanosafety-data-concepts/questionnaires/
parent: "(Meta)data concepts from the many years of nanosafety research"
grand_parent: Data/knowledge management
nav_order: 235
has_references: true
nav_exclude: false
---

#  Protocol reporting questionnaires: Structured input interfaces to guide users
The correct interpretation of a measurement requires much more than the value itself. It is widely known that many of the physicochemical characterisation techniques for NMs impose artefacts that depend on the sample preparation steps, on the instrumental settings chosen and even on the technique chosen for measuring a specific endpoint. Techniques, e.g., for NM size, reach from very accurate but also very expensive methods to fast, cheap but less accurate methods. Therefore, traditional analytical qualities such as precision, accuracy, resolution all affect correct interpretation of an NM endpoint. Many NM characterisation techniques are also oblique towards certain NM properties. Generation of the knowledge on the expectable quality and about these influences and limitations for new, innovative methods has to be based on data reported in high detail to be able to analyse all parameters influencing the results.

The [ACEnano project](https://cordis.europa.eu/project/id/720952) was developing and improving methods of very different technical readiness levels, reaching from more experimental technology to methods ready for inter-laboratory comparison testing and regulatory acceptance. Thus, being able to report all these methods and their details in an appropriate way was seen as the highest priority of the [knowledge infrastructure](https://acenano.douglasconnect.com/). This was achieved by adopting a data reporting concept in the form of questionnaires for reporting of nanomaterial physicochemical characterisation data implemented as a web interface for the guided uploading of protocols and data. High-level standardisation was achieved by differentiating between sample preparation, measurement and data treatment protocols as the highest level and then subsections like nanomaterial information, sample description, experimental equipment and predefined sample preparation steps as the next lower level. The user is then guided through workflows to provide required fields for defining the material, the endpoint and measurement technique including the preparation steps but has then the flexibility to add method specific parameters like specific parameters of the instrument used, quality control measures and other lab-specific setting in a structured and partly semantically annotated manner. In this way, all these parameters and their optimisation throughout the development process and adaptation needed for specific materials can be analysed leading to a corpus of data for guiding future experiments regarding parameters to be chosen and finally as the basis for starting the pre-validation and validation efforts. Summing up the above, the goal of the ACEnano approach was to construct a system ensuring:

1. Flexibility of the system so that new measurement insights or new techniques can be added easily;
2. Collection of enough data and metadata to ensure current and future interpretation of NM characterisation data without the burden of collecting and storing superfluous information;
3. Creation of a database of protocols;
4. Coupling of obtained data and protocols via ontologies;
5. Reuse of metadata and data specifications of previously uploaded protocols and data to collect the community expertise on good metadata coverage practice, to encourage uptake of these practices and continuously improve them.

To address these requirements, the chosen design to implement the questionnaires was a deeply interlinked system between the protocols and the data warehouse. The questionnaires are not literally a list of questions but a number of structured and hierarchical web forms, through which the data provider is guided for filling in the metadata describing the nanomaterial, the individual experimental steps and structure of the data as well as the biographical metadata. The starting point of data upload is the specification of the protocols, both as structured metadata and also as human-readable experimental procedure with details on the individual steps. These are divided into three types: sample preparation, measurement and data treatment protocols. These protocols are stored as individual entities, which can be searched, browsed and reused in the existing or modified form. The second step is then to upload the data for a specific experiment by choosing and combining the relevant predefined protocols and supplement them with general information on the experiment and then metadata describing the nanomaterial, the specific sample and finally the data files with metadata on its format. This procedure is called data workflow in the following. Due to the variety of physicochemical characterisation methods covered by ACEnano and the existence of standard file formats for many data types, the ACEnano data warehouse stores the data just in the form provided by the user. Therefore, the solution is more a metadata than a data management system. The relationship between the protocols and data metadata is visualised in Figure 1. More information on the workflows to collect the protocol metadata and data is available [here]({{ site.baseurl }}/data-management/data-resources/ACEnano-warehouse/).

<img src="{{ site.baseurl }}/images/data-management/metadata-concepts/ACEnano1.png"/>
**Figure 1**. The interdependencies between the two main sections of the KI (Protocols and Data)
{: .caption }


## Keep on reading about (meta)data concepts
{% for sitepage in site.pages %}
    {% if sitepage.title == page.parent %}
        {% include childrenTOC.html page=sitepage pages=site.pages %}
    {% endif %}
{% endfor %}
