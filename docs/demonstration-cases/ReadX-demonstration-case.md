---
layout: page
title: Grouping and read-across

description: "NanoCommons Demonstration Case - Grouping and read-across landscape integration"
description_long: Grouping/read-across approaches constitute one key component of the complete risk assessment framework. This case is mapping the existing approaches and tools and designs roads towards integrated workflows. <b>(ongoing)</b>
permalink: /demonstration-cases/ReadX-demonstration-case/
parent: Demonstration cases
nav_order: 1007
has_references: true
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


References
{: .references-header }
- Cronin et al., 2019: Cronin, M. T. D.; Enoch, S. J.; Madden, J. C.; Richarz, A.-N. Read-Across to Fill Toxicological Data Gaps: Good Practice to Ensure Success with Nanoparticles. In <i>Computational Nanotoxicology</i>; Jenny Stanford Publishing, 2019. <a href="https://www.taylorfrancis.com/chapters/edit/10.1201/9780429341373-8/read-across-fill-toxicological-data-gaps-good-practice-ensure-success-nanoparticles-mark-cronin-steven-enoch-judith-madden-andrea-nicole-richarz?context=ubx&amp;refId=83eca5f4-e8e6-4707-ad07-2d8b2b860fe8">https://www.taylorfrancis.com/chapters/edit/10.1201/9780429341373-8/read-across-fill-toxicological-data-gaps-good-practice-ensure-success-nanoparticles-mark-cronin-steven-enoch-judith-madden-andrea-nicole-richarz?context=ubx&amp;refId=83eca5f4-e8e6-4707-ad07-2d8b2b860fe8</a>.
- Gajewicz et al., 2017: Gajewicz, A.; Jagiello, K.; Cronin, M. T. D.; Leszczynski, J.; Puzyn, T. Addressing a Bottle Neck for Regulation of Nanomaterials: Quantitative Read-across (Nano-QRA) Algorithm for Cases When Only Limited Data Is Available. <i>Environ. Sci.: Nano</i> <b>2017</b>, <i>4</i> (2), 346–358. <a href="https://doi.org/10.1039/C6EN00399K">https://doi.org/10.1039/C6EN00399K</a>.
- Kuempel et al., 2012: Kuempel, E. D.; Castranova, V.; Geraci, C. L.; Schulte, P. A. Development of Risk-Based Nanomaterial Groups for Occupational Exposure Control. <i>J Nanopart Res</i> <b>2012</b>, <i>14</i> (9), 1029. <a href="https://doi.org/10.1007/s11051-012-1029-8">https://doi.org/10.1007/s11051-012-1029-8</a>.
- Lamon et al., 2018: Lamon, L.; Asturiol, D.; Richarz, A.; Joossens, E.; Graepel, R.; Aschberger, K.; Worth, A. Grouping of Nanomaterials to Read-across Hazard Endpoints: From Data Collection to Assessment of the Grouping Hypothesis by Application of Chemoinformatic Techniques. <i>Particle and Fibre Toxicology</i> <b>2018</b>, <i>15</i> (1), 37. <a href="https://doi.org/10.1186/s12989-018-0273-1">https://doi.org/10.1186/s12989-018-0273-1</a>.
- Landvik et al., 2018: Landvik, N. E.; Skaug, V.; Mohr, B.; Verbeek, J.; Zienolddiny, S. Criteria for Grouping of Manufactured Nanomaterials to Facilitate Hazard and Risk Assessment, a Systematic Review of Expert Opinions. <i>Regulatory Toxicology and Pharmacology</i> <b>2018</b>, <i>95</i>, 270–279. <a href="https://doi.org/10.1016/j.yrtph.2018.03.027">https://doi.org/10.1016/j.yrtph.2018.03.027</a>.
- Oomen et al., 2015: Oomen, A. G.; Bleeker, E. A. J.; Bos, P. M. J.; Van Broekhuizen, F.; Gottardo, S.; Groenewold, M.; Hristozov, D.; Hund-Rinke, K.; Irfan, M.-A.; Marcomini, A.; Peijnenburg, W. J. G. M.; Rasmussen, K.; Jiménez, A. S.; Scott-Fordsmand, J. J.; Van Tongeren, M.; Wiench, K.; Wohlleben, W.; Landsiedel, R. Grouping and Read-Across Approaches for Risk Assessment of Nanomaterials. <i>International Journal of Environmental Research and Public Health</i> <b>2015</b>, <i>12</i> (10), 13415–13434. <a href="https://doi.org/10.3390/ijerph121013415">https://doi.org/10.3390/ijerph121013415</a>.
- R.6-1, 2019: European Chemicals Agency. <i>Appendix for Nanoforms Applicable to the Guidance on QSARs and Grouping of Chemicals: Guidance on Information Requirements and Chemical Safety Assessment.</i>; Publications Office: LU, 2019. <a href="https://data.europa.eu/doi/10.2823/273911">https://data.europa.eu/doi/10.2823/273911</a>.
- RAAF, 2017: European Chemicals Agency. <i>Read-Across Assessment Framework (RAAF).</i>; Publications Office: LU, 2017. <a href="https://data.europa.eu/doi/10.2823/619212">https://data.europa.eu/doi/10.2823/619212</a>.
- Schultz et al., 2015: Schultz, T. W.; Amcoff, P.; Berggren, E.; Gautier, F.; Klaric, M.; Knight, D. J.; Mahony, C.; Schwarz, M.; White, A.; Cronin, M. T. D. A Strategy for Structuring and Reporting a Read-across Prediction of Toxicity. <i>Regulatory Toxicology and Pharmacology</i> <b>2015</b>, <i>72</i> (3), 586–601. <a href="https://doi.org/10.1016/j.yrtph.2015.05.016">https://doi.org/10.1016/j.yrtph.2015.05.016</a>.
{: .references }
