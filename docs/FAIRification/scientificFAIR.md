---
layout: page
title: Scientific FAIR principles
permalink: /FAIRification/scientificFAIR/
parent: FAIRification
has_children: false
nav_order: 320
---

# Scientific FAIR principles
Based on: Papadiamantis, A.G.; Klaessig, F.C.; Exner, T.E.; Hofer, S.; Hofstaetter, N.; Himly, M.; Williams, M.A.; Doganis, P.; Hoover, M.D.; Afantitis, A.; Melagraki, G.; Nolan, T.S.; Rumble, J.; Maier, D.; Lynch, I. Metadata Stewardship in Nanosafety Research: Community-Driven Organisation of Metadata Schemas to Support FAIR Nanoscience Data. Nanomaterials 2020, 10, 2033. [https://doi.org/10.3390/nano10102033](https://doi.org/10.3390/nano10102033)
{: .source }

Data sharing and the commitment for doing so got an extreme push by funding agencies introducing more and more open data as a funding requirement and then especially by the release of the [FAIR principles](https://www.force11.org/group/fairgroup/fairprinciples). The authors were very successful in raising concerns about the amount and variability of shared data. As a result, FAIRness, FAIRification (the process of making data FAIR), and FAIR maturity indicators have been introduced as a specific area of data management, as part of the quality control of databases and individual datasets and are an essential part of data management plans. These topics are covered in more detail in the [FAIR section of this user guidance handbook](../). 

However, the original principles are mainly focussed on how data should be shared, and not on what needs to be reported to make the data reusable with high confidence. Even if the need for rich (meta)data is stressed in almost all principles, how this metadata needs to look like is left to the scientific communities to define. This led to some confusion and uncertainty about what everyone has to do. The highly technical focus could even be used as an argument to push the responsibility to achieve data FAIRness to data curators and database managers, which have to develop the access protocols and search engines, and may be seen to absolve data producers of responsibility. Thus, a gap still exists when it comes to the scientific FAIR principles needed to ensure that high-quality data generation and collection, and metadata processing have sufficient “completeness” to facilitate the FAIRification process. Completeness here means the relevant scientific information to ensure that the data are findable in a relevant query and can be understood without needing to ask the scientist involved in its generation for information about the purpose it was generated for, or how it was generated. 

To help scientists to get involved and better understand their roles in the FAIRification processes, the FAIR principles were augmented with **"scientific" FAIR principles** (to be extended) following the same structure enabling a combined list of principles for both technical and scientific FAIRness if desired.

## To be findable in a scientific context:
- SF1: Use standard, unambiguous identifiers for characterising your samples, test systems and experimental details, presenting as much information as possible. As per the proposals of the [GO FAIR Chemistry Implementation Network](https://www.go-fair.org/implementation-networks/overview/chemistryin/), coordination and some formalisation is needed to promote interoperability between different types. For example, chemistry-aware identifiers like IUPAC names, PubChem compound identifiers, InChIs and the recently proposed NInChIs (nano-InChIs, see Lynch et al. in this special issue) provide orthogonal information to compound/substance names and CAS RN, and the use of both is preferred.

## To be accessible:
- SA1: Annotate metadata and data and especially metadata/data schemas with standardised ontologies to make them computer accessible. It would be desirable to create a “dictionary” of terms regularly used and thus to use persistent ontological IDs for the metadata and data produced.
- SA2: Make sure that the metadata can be accessed from the same resource as the data. If the data warehouse is not flexible enough to provide the scientific metadata through its metadata access functionalities, provide it in a standardised way (either standard file formats like ISA or supplemented by a clear access protocol—see recommendations for further details).
- SA3: Provide your protocols in FAIR resources, in addition to the materials and methods section of the corresponding paper. Remember that your data might be used in another context and exact descriptions are needed. Linking protocols to data via electronic laboratory notebooks is one approach to achieve this.
- SA4: Document small deviations from the original/standardised protocol with your metadata/data. For example, if different samples are using different DMSO concentrations for controlling the production and properties of nanomaterials, this should be reported per sample in contrast to the protocol where only the DMSO range will be given.

## To be interoperable:
- SI1 links to descriptions of the test methods, protocols and quality control measures: Provide direct res to give the user the chance to evaluate data interoperability. In this way, additional information, which cannot all be covered by the metadata can be easily accessed.
- SI2: Report protocol metadata in a structured and annotated way to allow harmonisation and interlinking of data. Even if duplication of information in the protocol and the metadata is sometimes needed or even preferred, guarantee consistency between both.

## To be reusable:
- SR1: Do not limit the reported metadata to fulfil only the requirements of the study for which the data was produced. Sections 6 and 7 provide examples on the usage of data in a different computational context than the experimental initially intended.
- SR2: Establish a feedback loop between data creators, analysts and customers to continuously improve the metadata completeness and quality. Keep in mind that scientific progress can lead to new use cases and go beyond “standards” defined at a specific point of time.

