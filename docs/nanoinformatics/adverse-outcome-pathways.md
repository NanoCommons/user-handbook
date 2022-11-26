---
layout: page
title: Adverse outcome pathways

description: Modelling approaches and tools for AOPs
permalink: /nanoinformatics/adverse-outcome-pathways/
parent: Nanoinformatics
has_children: false
---

# Data and modelling approaches and tools for Adverse Outcome Pathways (AOPs)
_Adverse Outcome Pathways (AOPs) are a conceptual framework for organizing, synthesizing, and presenting specialized scientific knowledge regarding the linkage between perturbation of a specific biological target, pathway or process by a stressor (e.g., a chemical, radiation, a virus), and a consequent adverse outcome(s) considered relevant to risk assessment, regulatory decision-making, and/or environmental management_ (from [https://aopwiki.org/](https://aopwiki.org/info_pages/2/info_linked_pages/9))

[AOP-Wiki: Central resource of AOPs and training material on the concepts](https://aopwiki.org/)
{: .more-link .more-link--webpages }

## Search the AOP-WIKI with SPARQL

## AOP database (AOP-DB)

## NanoCommons MIE gene set database (NanoCommons GS-MIE DB)
Toxicity testing and regulation of advanced materials at the nanoscale i.e., nanosafety, is challenged by the growing number of NMs. The Adverse Outcome Pathway (AOP)-based approaches provide pragmatic insights to promote the development of alternative testing strategies. A molecular initiating event (MIE) is the first step in an AOP and can be considered as a chemical interaction between a chemical toxicant and a biological molecule. To facilitate reconstruction of initial events in a sequential chain of Key Events in a particular AOP, the NanoCommons MIE gene set database (NanoCommons GS-MIE DB) was developed. The database captures gene signatures of MIEs by integrating knowledge from public gene databases including KEGG, REACTOME, GO and WikiPathways and custom gene sets from published data. To date, 132 gene sets representing three different types of MIE actions have been manually collected:

### MIE1. Disruption of lung surfactant functionality (3 gene sets)
The alveolar lining fluid and the thin layer of lung surfactant are the first protection barrier against inhaled NMs. Lung surfactant is a surface-active lipoprotein complex in the alveolar space and its main function is reducing the surface tension at the air/liquid interface in the lung. Also, this complex regulates inflammatory responses. The disruption of the lung surfactant may lead to negative health outcomes, such as lung fibrosis, chronic obstructive pulmonary disease, pneumonia, asthma, acute respiratory distress syndrome or acute lung injury. This MIE is the initial event of [AOP 302:  Lung surfactant function disruption leading to acute inhalation toxicity](https://aopwiki.org/aops/302).

### MIE2. Lysosomal destabilisation (54 gene sets)
The next level of bionano interactions is NM bio-adhesion to and uptake into cells. After endocytosis of NM by different types of cells (macrophages, epithelial, etc.) and following different exposure routes (inhalation, ingestion, intravenous, dermal), eventually NMs are retained inside lysosomes. This cell compartment consists of a variety of hydrolytic enzymes (phosphatases, proteases, nucleases, etc) and a highly acidic environment providing degradation of foreign substances. Biopersistent NMs can cause lysosomal dysfunction, for instance, lysosomal membrane permeability that can induce leakage of the protease cathepsins and other associated lysosomal hydrolases into the cytoplasm. It can trigger a variety of toxicological consequences including oxidative stress, cytosolic acidification and induce cell death pathways including necrosis, apoptosis and autophagy. This MIE is the initial event of [AOP 257: Receptor mediated endocytosis and lysosomal overload leading to kidney toxicity](https://aopwiki.org/aops/257) and [AOP 144: Endocytic lysosomal uptake leading to liver fibrosis](https://aopwiki.org/aops/144).

### MIE3. Oxidation of cell membrane (75 gene sets)
NMs can induce oxidative damage of cell membranes through lipid peroxidation, in which free radicals steal electrons from the lipid components of the cell membranes. This effect might be induced by metal oxide NMs. This MIE is the initial event of [AOP 260: CYP2E1 activation and formation of protein adducts leading to neurodegeneration](https://aopwiki.org/aops/260).


### MIE prediction
The database was used as a basis for developing a tool for MIE prediction. The tool includes the NanoCommons GS-MIE DB, a web interface and R/Python scripts to perform statistical analysis. 

[Query gene sets](https://armadillo.shinyapps.io/mies/)
{: .more-link .more-link--app }

This software implementation enables the nanotoxicology community to easily access the results using a developed web interface or integration of the MIE prediction tool into various automated pipelines, including the Jaqpot computational platform and the NanoCommons KB. As an input, the tool uses a list of differentially expressed genes/proteins from high-throughput studies (microarrays, RNA-seq, total proteomics) and calculates a prioritised list of MIEs with identified biological processes. 

 [Further details in Deliverable Report D5.7](https://doi.org/10.5281/zenodo.7079231)
 First tools for MIE prediction  integrated into NanoCommons Knowledge Infrastructure through use of APIs and NanoCommons KNIME nodes.
 {: .more-link .more-link--pdf }

[GS-MIE DB training](https://www.youtube.com/watch?v=gkHy-H7jggg)
{: .more-link .more-link--video }
