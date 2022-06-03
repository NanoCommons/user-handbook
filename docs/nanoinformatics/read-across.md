---
layout: page
title: Read across

description: Read-across methodologies
permalink: /nanoinformatics/read-across/
parent: Nanoinformatics
has_children: false
nav_exclude: false
has_references: true
---

# Read-across methodologies
Read-across non-testing strategies are employed for the prediction of NM toxicity, in cases where sufficiently large datasets are not available for the development of reliable nanoQSAR models. This approach is grounded on the empirical knowledge that similar materials may exhibit comparable properties and thus, the estimation of the hazardous effects of non-tested NMs can be achieved using data within a group of comparable NMs.
{: .lead}

The European Chemicals Agency (ECHA) through the Read-Across Assessment Framework (RAAF) has introduced a read-across strategy that consists of seven well defined steps (ECHA, 2017), as follows:

1. Determination of the structural characteristics of NMs (composition, including surface chemistry and any impurities, size, shape etc.).
2. Development of an initial grouping hypothesis that correlates an endpoint (e.g. a toxicity index), to different behavior and reactivity properties, including solubility, zeta potential, dispersibility, hydrophobicity, dustiness, biological activity (redox formation, gene expression etc.), photoreactivity etc. Assignment of the samples to groups.
3. Gathering of the above properties (depending on the grouping hypothesis) for each NM.
4. Construction of a data matrix including properties and endpoints.
5. Assessment of the applicability of the approach using computational techniques (e.g. Principal Components Analysis (PCA), hierarchical clustering, random forests, linear discriminant analysis (LDA) etc.), and data gaps filling. If no regular pattern emerges, an alternative grouping hypothesis must be proposed (step 2).
6. In case that the grouping hypothesis is robust, but adequate data are not available, additional testing should be considered to complete the datasets.
7. Justification of the method.

A more detailed presentation of RAAF is provided in Figure 1.

<img src="{{ site.baseurl }}/images/nanoinformatics/Read-across.png" />

**Figure 1**. Step-wise grouping/read-across approach proposed by ECHA in Appendix R.6-1 for nanoforms, from the Guidance on QSARs and Grouping of Chemicals (ECHA, 2017)
{: .caption }

## Grouping/read-across services
### NTUA's toxFlow and Apellis tools
NTUA has designed novel grouping/read-across approaches which automate and optimise the Read-across scheme that has been proposed by ECHA. These approaches have been implemented in the form of web services that have been  integrated into the NanoCommons infrastructure:

The <span style="text-decoration:underline;">toxFlow tool</span> ([https://toxflow.jaqpot.org/](https://toxflow.jaqpot.org/)) is a web based R-Shiny implementation of the abovementioned grouping/read-across approach, where the user can manually select most of the parameters involved in the construction of the read-across problem. More specifically, the toxicity endpoint prediction of the target ENM can be performed using the weighted average of the corresponding values of the neighbor ENMs, i.e. neighboring substances of every target ENM are selected by calculating pairwise similarity measures with all available ENMs and by excluding those ENMs for which the similarity measure does not fulfill a predefined threshold. The proposed workflow assumes that a complete training data set is available, i.e., a set of ENMs for which the toxicity endpoint values are known, as described in Varsou et al., 2017. 

The <span style="text-decoration:underline;">Apellis tool</span> ([https://apellis.jaqpot.org/](https://apellis.jaqpot.org/)) automates the process of searching over the solution space in order to find the read-across hypothesis that produces the best possible results in terms of prediction accuracy and number of ENMs for which predictions are obtained (Varsou et al., 2019). Thus, it overcomes a main drawback of existing approaches, which are based on manually trying different read-across hypotheses in an iterative, inefficient and time-consuming trial and error fashion. The main outcomes of the method are a reduced set of significant descriptors and a single or multiple threshold value(s) which rigorously define the boundaries around a query ENM, where neighboring ENMs are located. These two different goals are achieved simultaneously through the development of a Mixed Integer NonLinear Programming (MINLP) problem, where the objective is to minimize the Mean Squared Error (MSE) between the experimental values and the produced predictions with respect to selecting the most informative descriptors and defining the neighbor boundaries.

References
{: .references-header }
- ECHA, 2017: ECHA, Read Across Assessment Framework, Appendix R.6-1for nanomaterials applicable to the Guidance on QSARs and Groupingof Chemicals. Guidance on information requirements and chemical safety assessment, <b>2017</b>. <a href="https://echa.europa.eu/documents/10162/23036412/appendix_r6_nanomaterials_en.pdf">https://echa.europa.eu/documents/10162/23036412/appendix_r6_nanomaterials_en.pdf</a>
- Varsou et al., 2017: Varsou, D.D.; Tsiliki, G.; Nymark, P.; Kohonen, P.; Grafström, R.; Sarimveis, H. toxFlow: a web-based application for read-across toxicity prediction using omics and physicochemical data. <i>Journal of chemical information and modeling</i> <b>2017</b>, <i>58(3)</i>, 543-549. <a href="https://doi.org/10.1021/acs.jcim.7b00160">https://doi.org/10.1021/acs.jcim.7b00160</a>
- Varsou et al., 2019: Varsou, D.D.; Afantitis, A.; Melagraki, G.; & Sarimveis, H. Read-across predictions of nanoparticle hazard endpoints: a mathematical optimization approach. <i>Nanoscale Advances</i> <b>2019</b>, <i>1(9)</i>, 3485-3498. <a href="https://pubs.rsc.org/en/content/articlehtml/2019/na/c9na00242a">https://pubs.rsc.org/en/content/articlehtml/2019/na/c9na00242a</a>
{: .references }

