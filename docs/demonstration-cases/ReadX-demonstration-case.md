---
layout: page
title: Grouping and read-across

description: "NanoCommons Demonstration Case - Grouping and read-across landscape integration"
description_long: Grouping/read-across approaches constitute one key component of the complete risk assessment framework. This case is mapping the existing approaches and tools and designs roads towards integrated workflows. <b>(ongoing)</b>
permalink: /demonstration-cases/ReadX-demonstration-case/
parent: Demonstration cases
nav_order: 1007
---

#  NanoCommons Demonstration Case - Grouping and read-across landscape integration
{: .no_toc}
The demonstration case aims at surveying and documenting the status quo of the landscape of grouping/read-across software and tools by inviting the providers of such tools data, software, workflows and results in harmonised and interoperable formats. This case is **ongoing**.
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
Grouping/read-across approaches constitute one key component of the complete risk assessment framework. The tools integrated currently in the NanoCommons Infrastructure are listed in the [service catalogue](https://infrastructure.nanocommons.eu/services/). However, many other tools have been developed in other projects of the NSC and in order to be able to prioritise further integration of these existing tools and focus the development of new tools, this case study will evaluate and document the current status of the integrated tools to showcase their strengths but also identify gaps, where additional tools are needed. Besides defining a development/integration roadmap, this could also produce material on the current NanoCommons portfolio, which can be used to guide new TA projects in this area and training across the tools integrated in the workflows.

Grouping/read-across is based on the empirical knowledge that similar materials may exhibit comparable properties. It has been applied to chemicals during the last 20 years, but recently this type of approach is showing inevitable growth in filling toxicological gaps for ENMs (Cronin et al., 2019). The benefit of using grouping and read across methods on ENMs is that the estimation of the hazardous effects of non-tested ENMs can be achieved using data within a group of comparable ENMs for which data presently exists (Gajewicz et al., 2017)(Oomen et al., 2015)(Lamon et al., 2018). ECHA has developed the Read-Across Assessment Framework (RAAF) for chemicals, which presents a detailed workflow for performing grouping/read-across (see Figure 1). This workflow has been adapted to the special needs and requirements arising from the more complex and multi-perspective characterisation of ENMs compared to chemicals (RAAF, 2017)(Schultz et al., 2015)(Landvik et al., 2018)(Kuempel et al., 2012) and has already successfully been used in specific case studies in the nanotoxicity area.

<img src="{{ site.baseurl }}/images/demonstration-cases/ReadX-Workflow.png"/>
**Figure 1**. Step-wise grouping/read-across approach proposed by ECHA in Appendix R.6-1 for nanoforms, from the Guidance on QSARs and Grouping of Chemicals (R.6-1, 2019).
{: .caption }

## Aims
The demonstration case aims at surveying and documenting the status quo of the landscape of grouping/read-across software and tools by inviting the providers of such tools from within the NanoCommons consortium but especially also third parties from the other related projects to provide data, software, workflows and results for specific examples of nanomaterial classes like TiO2 and Ag nanomaterials and carbon nanotubes.   

The objects are twofold:
1. Classifying the existing services based on the workflow proposed by ECHA with respect to which of the 6 well defined steps the service supports:
    1. Determination of the structural characteristics of ENMs (composition, including surface chemistry and any impurities, size, shape etc.).
    2. Development of an initial grouping hypothesis that correlates an endpoint (e.g. a toxicity index) to different behaviour and reactivity properties. Assignment of the samples into groups.
    3. Gathering of the above properties (depending on the grouping hypothesis) for each ENM.
    4. Construction of a data matrix including properties and endpoints.
    5. Assessment of the applicability of the approach using computational techniques and data gap filling. If no regular pattern emerges, an alternative grouping hypothesis must be proposed (step 2).
    6. Where the grouping hypothesis is robust, but adequate data are not available, additional testing should be considered to complete the datasets.
    7. If applicable, it will also be documented how the service is transforming the basic concept of the ECHA methodology into a modelling problem that can be described in mathematical terms and can be solved using advanced computational techniques, such as artificial intelligence algorithms and mathematical programming methods.
2. Based on the classification, build workflows as complete as possible by optimising the interplay between the tools. In contrast to case studies ran in the individual projects mainly testing their own tools, this demonstration case is targeting the interoperability across the projects and how tools from the different platforms can be combined to 
    1. exchange a tool in the standard / project-provided workflows to adapt to a specific type of nanomaterials, which is not covered in the applicability domain of the original tool and
    2. build consensus models but using multiple tools based on different mathematical representations of the hypophysis validation.

## Tasks
The tasks can be grouped into work needed for individual services / tools and work for combining them into workflows for their optimal usage.

The first group includes:
1. Classification according to ECHA workflow and description of the underlying model.
2. Specify input and output and see if harmonisation is required to make it interoperable to other tools / platforms
3. Evaluate the steps needed for onboarding of the tools / platforms into the NanoCommons Knowledge Infrastructure.

Tasks for building the workflows are:
1. Defining access routes and document or collect existing specification
2. Implement additional access routes if this improves the usability in workflows and combination / exchange of tools
3. Investigate if helper applications are needed to transfer / transform data going from one tool to the next
4. Define metadata and reporting standards to be able to document the complete workflow e.g. as collection of documents in QMRF and MODA format.

## Expected outcomes
- Joint paper on the grouping/read-across landscape in terms of tools available and under development, their application domain with respect to the steps of the ECHA workflow as well as the types of nanomaterials and their interoperability with other tools all demonstrated on a number of nanomaterial classes.
- Additionally, the workflows and the needed steps to develop custom workflows from scratch or by replacing specific parts of the workflow with alternative tools will be provided as part of the NanoCommons infrastructure.

<script src="/user-handbook/assets/js/annotater.js"></script>
{% include site-annotater.html %}
{% include page-annotater.html %}

References
{: .references-header }
Cronin et al., 2019: Cronin M, Enoch S, Madden J, Richarz AN, . Read-Across to Fill Toxicological Data Gaps: Good Practice to Ensure Success with Nanoparticles.2019. 10.1201/9780429341373-8. 
{: .references }
Gajewicz et al., 2017: Gajewicz A, Jagiello K, Cronin MTD, Leszczynski J, Puzyn T. Addressing a bottle neck for regulation of nanomaterials: quantitative read-across (Nano-QRA) algorithm for cases when only limited data is available. Environ Sci: Nano. 2017;4(2):346–58.
{: .references }
Oomen et al., 2015:	Oomen AG, Bleeker EAJ, Bos PMJ, van Broekhuizen F, Gottardo S, Groenewold M, et al. Grouping and Read-Across Approaches for Risk Assessment of Nanomaterials. Int J Environ Res Public Health. 2015 Oct 26;12(10):13415–34.
{: .references }
Lamon et al., 2018: Lamon L, Asturiol D, Richarz A, Joossens E, Graepel R, Aschberger K, et al. Grouping of nanomaterials to read-across hazard endpoints: from data collection to assessment of the grouping hypothesis by application of chemoinformatic techniques. Part Fibre Toxicol. 2018 Sep 24;15(1):37.
{: .references }
RAAF, 2017: Read-Across Assessment Framework (RAAF). hhttps://echa.europa.eu/documents/10162/13628/raaf_en.pdf/614e5d61-891d-4154-8a47-87efebd1851a.
{: .references }
Schultz et al., 2015: Schultz TW, Amcoff P, Berggren E, Gautier F, Klaric M, Knight DJ, et al. A strategy for structuring and reporting a read-across prediction of toxicity. Regul Toxicol Pharmacol. 2015 Aug;72(3):586–601.
{: .references }
Landvik et al., 2018: Landvik NE, Skaug V, Mohr B, Verbeek J, Zienolddiny S. Criteria for grouping of manufactured nanomaterials to facilitate hazard and risk assessment, a systematic review of expert opinions. Regul Toxicol Pharmacol. 2018 Jun;95:270–9.
{: .references }
Kuempel et al., 2012: Kuempel ED, Castranova V, Geraci CL, Schulte PA. Development of risk-based nanomaterial groups for occupational exposure control. J Nanopart Res. 2012 Sep;14:1029.
{: .references }
R.6-1, 2019: Guidance on information requirements and chemical safety assessment - Appendix R.6-1 for nanoforms applicable to the Guidance on QSARs and Grouping of Chemicals. hhttps://echa.europa.eu/documents/10162/23036412/appendix_r6_nanomaterials_en.pdf/71ad76f0-ab4c-fb04-acba-074cf045eaaa.
{: .references }
