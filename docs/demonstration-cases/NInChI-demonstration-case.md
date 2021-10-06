---
layout: page
title: Development of NInChI

description: NanoCommons Demonstration Case - Development of an InChI for nano (NInChI)
description_long: This demonstration case is will develop a new nanomaterial identifier based on the InChI concepts, the InChI for nano or NInChI. <b>(ongoing)</b>
permalink: /demonstration-cases/NInChI-demonstration-case/
parent: Demonstration cases
nav_order: 1010
---

#  NanoCommons Demonstration Case - Development of an InChI for nano (NInChI)
{: .no_toc}
The demonstration case aims to further develop the NInChI to cover the important properties to characterise a material and differentiate nanoforms. It will also establish the NInChI as a standard identifier to be used in research, risk assessment and regulation. This case is **ongoing**.
{: .lead }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Background
An international group of partners has recently presented the need for and a first implementation of a line notation to describe a nanomaterial and able to e.g. separate different [nanoforms](https://echa.europa.eu/documents/10162/13655/how_to_register_nano_en.pdf/f8c046ec-f60b-4349-492b-e915fd9e3ca0) (1). This InChI for nano or short NInChI encodes the multi-component structures of nanomaterials (NMs) in a machine-readable format, to easily find data in and enrich data from the nanosafety resources, to allow grouping of NMs by similarity, to facilitate the discrimination of one nanoform (defined in REACH regulation as NMs of the same composition but of different size, shape, morphology, surface) from another or to generate input for nanoinformatics applications. The goal is to now establish the NInChI as a generally accepted and used identifier and structural representation of material across the nanosafety but also material producing and material modelling communities by making it part of the InChI standard. To reach this goal, this demonstration case is designed to coordinate all the different activities needed. This includes interactions with the InChI Trust as the authority for the InChI standard and leading the working group to align the proposed NInChI with the other ongoing developments around InChI and specify and implement the needed modifications to of the current specification to be able to include the NInChI in the standard. Additionally, the software and tools need to be further developed to allow users to generate NInChIs in a simple way by just providing the needed information and then use these in the different applications like documentation of their experiments, database searches, grouping and input generation. Such software is a central part of the InChI standards since this guarantees a single canonical representation of the nanomaterial without the dependency on specific implementations seen e.g. in other representations of small molecules like SMILES. Last but not least, the demonstration case will also help organising, together with WP2, and document all activities to disseminate the benefits of the NInChI within the nanosafety community and especially the NSC as well as to neighbouring communities e.g., represented by the strategic collaborators EMMC, EPPN, EUON and GO FAIR and get their feedback into the standard definition and software development process to have the NInChI as a general, universal identifier used across all the nanomaterials communities.

<img src="{{ site.baseurl }}/images/demonstration-cases/NInChI-Universe.png" width="400"/>
**Figure 1**. The InChI universe, showing the core InChI identifier, and the various extensions under development, including the NanoInChI (in light green in the  4th ring out from the centre).  Close interactions with the Reaction InChI (RInChI), Mixtures InChI (RInChI) and inorganics working groups is foreseen to ensure alignment and cross-fertilisation of ideas and approaches.
{: .caption }

## Aims
The demonstration case aims to establish the NInChI as a standard identifier and representation but getting support of, on the one hand, the InChI community and, on the other hand, the nano communities and further develop the existing NInChI concept and software to comply with the InChI standard and finally become part of it.

## Tasks
The prototype described in the paper (1) was meant to raise awareness of the need for a line notation to describe nanomaterials with their basic properties. Therefore, the developments were performed entirely by the nanosafety community taking published development of the core InChI and relevant extensions like the InChI for mixtures (MInChI) and reactions (RInChI) into account but without the direct support by  the InChI community or the InChI Trust. This goal was completely achieved by the NInChI being officially accepted into the InChI universe (see Figure 26) and by the creation by the NanoInChI working group as part of the InChI Trust’s activities. Building on this, the tasks of the demonstration case will be:
1. Establish regular exchange via the newly established NanoInChI working group between the nano and the InChI communities and especially the subgroups working on MInChIs and RInChIs as well as InChIs for organometallics and big molecules. This should lead to an agreement on the scope of the NInChI, what it should contain and how to implement it. It is also important to harmonise with and to take over concepts of the subgroups whenever possible to keep consistency and interoperability throughout the InChI universe and make it possible to use MInChIs or even RInChIs part of the NInChI or the other way round. First, discussions already showed that some initial ideas are incompatible e.g. with the MInChI and so some alignment is needed.
2. Continue to build the examples and the software to support generation of NInChIs. This will also help to flag up limitations in the approach and conceptualisation.
3. Implement NInChI into the NanoCommons Knowledge Base and downstream analysis, modelling and reporting to demonstrate its utility for integrating disparate data and to distinguish distinct nanoforms as per ECHA / REACH definition of these.

## Expected outcomes
- Endorsement of NInChI by the IUPAC InChI Trust and the nano communities as an extension to the InChI standard for nanomaterials.
- Integration of NInChI into the NanoCommons KnowledgeBase and first showcases for its usage in data search, specification of materials in report and input generation for modelling. 


References
{: .references-header }
1. Lynch I, Afantitis A, Exner T, Himly M, Lobaskin V, Doganis P, et al. Can an InChI for Nano Address the Need for a Simplified Representation of Complex Nanomaterials across Experimental and Nanoinformatics Studies? Nanomaterials (Basel). 2020 Dec 11;10(12).
{: .references }
