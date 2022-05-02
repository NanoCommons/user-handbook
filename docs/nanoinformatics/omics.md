---
layout: page
title: Omics tools

description: Omics analysis and mining tools
permalink: /nanoinformatics/omics/
parent: Nanoinformatics
has_children: false
has_references: true
nav_order: 430
---

# Big data ('omics) analysis and mining tools
Omics data analysis, or Systems Biology, has recently emerged as a powerful tool for understanding biological mechanisms at the molecular level and using such information to generate predictive and mechanistic approaches to toxicity. 
{: .lead }

Standard workflows for integrated Systems Biology analysis,
including genomic, transcriptomic and metabolomic data, have been developed (Ghosh et al., 2011)(Brown et al., 2011). These use both static analysis (biostatistics) and dynamic computational modelling to identify subsets of the multi-dimensional, information rich, ‘omics datasets that represent adverse outcome pathways (AOPs), i.e. mechanistically based molecular biomarker signatures that can be implemented into diagnostic screening assays to identify and characterise the impacts of chemicals and engineered nanomaterials (Tollefsen et al., 2014)(Walser, Studer, 2015). Static methods such as differential expression analysis, functional enrichment analysis and Network Reverse Engineering approaches reconstruct the underlying structure of biological pathways from observational ‘omics data. The dynamical models (from ordinary differential equations to
probabilistic or Bayesian models) enable in silico simulations of the toxicity responses to nanomaterials, which can be tested experimentally.

## Big data in the NanoCommons Knowledge Base (KB)
The integration of tools for 'omics analysis and mining into the [NanoCommons Knowledge Base]({{ site.baseurl }}/data-management/data-resources/NanoCommons-KB/) serves two purposes. Firstly, to enable the identification of biological mechanisms and pathways associated with toxicity / adverse effects arising from exposure to nanomaterials, and to produce aggregated biologically enriched descriptors. Secondly, many laboratories currently process and analyse their data in a badly protocolled and irreproducible way. Standardising this processing, by providing integrated analysis tools with full capturing of metadata such as tool version, parameter settings, data version used etc. greatly improves reproducibility of analysis and thus generate trust in the results. Coupled with best-practice procedures and workflows realised by the integrated tools this will help to generate results that can be reused, validated and integrated into regulatory procedures, which is a key objective of NanoCommons.

The tools for omics analysis integrated directly into the user interface of the NanoCommons Knowledge Base target non-expert users who will rely on pre-defined analysis methods and parameters without in-depth knowledge of data analysis approaches. The analyses are based on the integration of R-tools1 which have established themselves as the standard for the corresponding analysis approach in the omics data mining expert community. The definition of workflows and default parameters are based on published standards and dedicated research projects.
The basic workflow enables users to:

1. Select experimental data (transcription, protein, metabolome) in the portal;
2. Submit the selected data into a selected analysis tool such as "differential expression". Only analysis methods suitable to the data type and dataset size are available for selection by users;
3. Run the analysis in background;
4. Access the results and store them locally and/or in the NanoCommons KB;
5. Visualise them in a graph;
6. Re-use the results in further analysis, queries and overviews;
7. Make the results available to other users.

The following methods are currently available and are described below in detail:
1. Evaluation of data quality;
2. Normalisation;
3. Differential Expression Analysis;
4. Functional Enrichment Analysis;
5. Network reconstruction.

 For each section additional details are available in NanoCommons Deliverable Report D5.2:

[First big data (omics) analysis and mining tools integrated into KnowledgeBase](https://zenodo.org/record/3601649#.YY50q2DMKUl)
Initial set of tools directed towards analysis of “omics” datasets, including transcriptomics (analysis of changes in gene expression), proteomics (analysis of changes in protein expression), metabolomics and lipidomics (changes in expression of small molecules and lipids, respectively). 
{: .more-link .more-link--text }

eferences
{: .references-header }
- Brown et al., 2011: Brown, M.; Wedge, D.C.; Goodacre, R.; Kell, D.B.; Baker, P.N.; Kenny, L.C.; Mamas, M.A.; Neyses, L.; Dunn, W.B. Automated workflows for accurate mass-based putative metabolite identification in LC/MS-derived metabolomic datasets. <i>Bioinformatics</i> <b>2011</b>, <i>27(8)</i>, 1108-1112. <a href="https://doi.org/10.1093/bioinformatics/btr079">https://doi.org/10.1093/bioinformatics/btr079</a>.
- Ghosh et al., 2011: Ghosh, S.; Matsuoka, Y.; Asai, Y.; Hsin, K.Y.; Kitano, H. Software for systems biology: from tools to integrated platforms. <i>Nature Reviews Genetics</i> <b>2011</b>, <i>12</i>, 821. <a href="https://www.nature.com/articles/nrg3096">https://www.nature.com/articles/nrg3096</a>.
- Tollefsen et al., 2014: Tollefsen, K.E.; Scholz, S.; Cronin, M.T.; Edwards, S.W.; de Knecht, J.; Crofton, K.; Garcia-Reyero, N.; Hartung, T.; Worth, A.; Patlewicz, G. Applying Adverse Outcome Pathways (AOPs) to support Integrated Approaches to Testing and Assessment (IATA). <i>Regulatory Toxicology and Pharmacology</i> <b>2014</b>, <i>70(3)</i>, 629-640. <a href="https://doi.org/10.1016/j.yrtph.2014.09.009">https://doi.org/10.1016/j.yrtph.2014.09.009</a>.
- Walser, Studer, 2015: Walser, T.; Studer, C. Sameness: The regulatory crux with nanomaterial identity and grouping schemes for hazard assessment. <i>Regulatory Toxicology and Pharmacology</i> <b>2015</b>, <i>72(3)</i>, 569-571. <a href="https://doi.org/10.1016/j.yrtph.2015.05.031">https://doi.org/10.1016/j.yrtph.2015.05.031</a>.
{: .references }
