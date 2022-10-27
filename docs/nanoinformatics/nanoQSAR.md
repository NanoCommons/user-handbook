---
layout: page
title: Nano-QSAR

description: Nano-QSAR development and models
permalink: /nanoinformatics/nanoQSAR/
parent: Nanoinformatics
has_children: false
nav_exclude: false
has_references: true
---

# Nano-QSAR developement and models
Computational models that predict adverse biological effects of engineered NMs (ENMs) are becoming increasingly important to support risk assessment. 
{: .lead}

This is primarily due to the cost-saving and reduction of attrition rates they help achieve, since market candidates under development can be assessed for toxicity early-on in the process. Therefore, candidates predicted to be toxic can be discarded before a significant amount of time and effort has been invested, and most significantly, before expensive experimental tests need to be carried out. Quantitative Structure-Activity Relationship (QSAR) models are mathematical models derived from the algorithmic analysis of available experimental activity training data, which are able to predict the unknown activities of other compounds, directly from structural characteristics (called “descriptors”). In the nano-domain it is common to refer to QSARs that are applied to NMs as nano-QSARs. 

Overall, nano-QSARs can be grouped into regression and classification models. Statistical and machine learning modelling techniques, such as multiple linear regression (MLR) (Gajewicz et al., 2015, Puzyn et al., 2011, Pan et al., 2016), logistic regression (Pandharipande et al., 2009), Naïve Bayes (Liu et al., 2013) , decision tree analysis (Hansen et al., 2013), random forest (Oh et al., 2016), k-nearest neighbour (Cassotti et al., 2014 and Fourches et al., 2010), partial least square regression (Walkey et al., 2014, Brandmaier et al., 2012 and Wold et al., 2004), Neural Networks (Zarei et al., 2010), support vector machines (Fourches et al., 2010 and Liu et al., 2013), ensemble learning (Sellers et al., 2015 and Singh and Gupta, 2014) and genetic algorithms (Gajewicz et al., 2015) have been found useful for the establishment of the relationships between the molecular structures and biological activities of ENMs.

Computational models are evaluated based on their predictive accuracy (i.e. R2 for regression models and balanced class accuracy for classification models) derived from several common validation methods. For the development and the validation of QSAR models the scientific community has adopted the “OECD Principles for the Validation, for Regulatory Purposes, of (Q)SAR Models” (OECD, 2007). There are five principles that need to be taken into account: 

1. Defined endpoint, 
2. An unambiguous algorithm
3. A defined domain of applicability, 
4. Appropriate measures of goodness-of-fit, robustness and predictivity for NM models, and 
5. Mechanistic interpretation, if possible. 

In a recent publication (Puzyn et al., 2018), written by scientists involved in five recently completed European nanosafety modelling research projects, the application of the OECD validation principles in nano-QSAR modelling was critically reviewed. A main conclusion was that the OECD principles create an appropriate framework for validating nano-QSAR models, but there are issues that need particular attention. Among them, particular attention is drawn to the need for transparency and reproducibility of nano-QSAR models, documentation through the standard QMRF (QSAR Model Reporting Format) format and model representations using the Predictive Model Markup Language (PMML). 

## Integrating nano-QSAR models into the nanoinformatics infrastructure
[First predictive nano-QSAR models integrated into NanoCommons KnowledgeBase](https://zenodo.org/record/3603066)
Services that have been developed and are available through the NanoCommons infrastructure for generating and validating nano-specific quantitative Structure-Activity Relationships (nano-QSAR) models and applying the models for predicting nanomaterial (NM) end-points for new materials that have not been tested experimentally. 
{: .more-link .more-link--text }

[First raw data processing and knowledge extraction tools integrated into KB and first theoretical descriptor calculation services available](https://zenodo.org/record/3603051)
{: .more-link .more-link--text }

## Development of nano-QSAR model through the Jaqpot modelling platform
Jaqpot is a computational platform for in-silico modelling of chemical compounds, which has been developed by NTUA and is continuously being extended, so that it is updated with new developments and advances. 

<img src="{{ site.baseurl }}/images/nanoinformatics/Jaqpot.png" />

**Figure 1**. Schematic overview of JQ architecture (extracted from “Jaqpot Quattro: A Novel Computational Web Platform for Modeling and Analysis in Nanoinformatics, [https://doi.org/10.1021/acs.jcim.7b00223](https://doi.org/10.1021/acs.jcim.7b00223))
{: .caption }

Jaqpot follows the microservice architecture where individual services are interconnected and linked together and with external services through REST API calls. The Jaqpot API constitute a means to develop user-friendly applications such as Graphical User Interfaces (GUIs), and Jupyter notebooks that consume Jaqpot services over the API, without the user having to deal with the technical burden of this implementation. The platform can be used to easily integrate QSAR  and other types of models developed by any nanosafety community member into a single integrated platform, thus allowing users to select the optimal model for their needs, and facilitating benchmarking of models and integration of different approaches. A series of tutorials and instructional videos can guide potential users through the various functionalities of the Jaqpot platform, like developing, documenting, validating and sharing QSAR models:

[Jaqpot Suite by Philip Doganis, NTUA (part of Jaqpot Hackathon)](https://www.youtube.com/watch?v=Lc9WIEHnH-M)
{: .more-link .more-link--video }

[Read-across predictions of nanoparticle hazard endpoints: a mathematical optimization approach](https://pubs.rsc.org/en/content/articlehtml/2019/na/c9na00242a)
{: .more-link .more-link--text }

[Jaqpot 5 Tutorial : How to access and use an existing predictive model](https://zenodo.org/record/3610173)
{: .more-link .more-link--text }

[Jaqpot 5 Tutorial : User accounts](https://zenodo.org/record/3610071)
{: .more-link .more-link--text }

[Jaqpot 5 Tutorial: How to manage and use organisations](https://zenodo.org/record/3610093)
{: .more-link .more-link--text }

[Jaqpot 5 Tutorial: How to deploy a predictive model using the jaqpotpy library](https://zenodo.org/record/3610171)
{: .more-link .more-link--text }

## Enalos cloud platform
[Enalos Cloud Platform Transnational Access Services Through NanoCommons H2020 Infrastructure Project](https://zenodo.org/record/3695647)
{: .more-link .more-link--text }

[Enalos Nanoinformatics Cloud Platform: A Safe-by-Design Tool for Functionalized Nanomaterials](https://www.youtube.com/watch?v=HtUg1EXLr28)
[Tutorial](http://enaloscloud.novamechanics.com/EnalosWebApps/QNAR_IronOxide_Toxicity/instructions.zul)
{: .more-link .more-link--video }

[Nanoinformatics Model for Zeta Potential Prediction Powered by Enalos Cloud Platform](https://www.youtube.com/watch?v=swPtFTmI1AI)
[Tutorial](http://enaloscloud.novamechanics.com/EnalosWebApps/ZetaPotential/instructions.zul)
{: .more-link .more-link--video }

References
{: .references-header }
- Brandmaier et al., 2012: Brandmaier, S.; Sahlin, U.; Tetko, I.V.; Öberg, T. PLS-optimal: a stepwise D-optimal design based on latent variables. <i>Journal of Chemical Information and Modeling</i> <b>2012</b>, <i>52(4)</i>, 975–983. <a href="https://doi.org/10.1021/ci3000198">https://doi.org/10.1021/ci3000198</a>  
- Cassotti et al., 2014: Cassotti, M.; Ballabio, D.; Consonni, V.; Mauri, A.; Tetko, I. V.; Todeschini, R. Prediction of acute aquatic toxicity toward Daphnia magna by using the GA-kNN method. <i>Alternatives to Laboratory Animals: ATLA</i> <b>2014</b>, <i>42(1)</i>, 31–41. <a href="https://doi.org/10.1177/026119291404200106">https://doi.org/10.1177/026119291404200106</a>
- Fourches et al., 2010: Fourches, D.; Pu, D.; Tassa, C.; Weissleder, R.; Shaw, S.Y.; Mumper, R.J.; Tropsha, A. Quantitative nanostructure-activity relationship modeling. <i>ACS Nano</i> <b>2010</b>, <i>4(10)</i>, 5703–5712. <a href="https://doi.org/10.1021/nn1013484">https://doi.org/10.1021/nn1013484</a>
- Gajewicz et al., 2015: Gajewicz, A.; Schaeublin, N.; Rasulev, B.; Hussain, S.; Leszczynska, D.; Puzyn, T.; Leszczynski, J. Towards understanding mechanisms governing cytotoxicity of metal oxides nanoparticles: Hints from nano-QSAR studies. <i>Nanotoxicology</i> <b>2015</b>, <i>9(3)</i>, 313–325. <a href="https://doi.org/10.3109/17435390.2014.930195">https://doi.org/10.3109/17435390.2014.930195</a>
- Hansen et al., 2013: Hansen, S.F.; Jensen, K.A.;  Baun, A. NanoRiskCat: a conceptual tool for categorization and communication of exposure potentials and hazards of nanomaterials in consumer products. <i>Journal of Nanoparticle Research</i> <b>2013</b>, <i>16(1)</i>, 2195. <a href="https://doi.org/10.1007/s11051-013-2195-z">https://doi.org/10.1007/s11051-013-2195-z</a>
- Liu et al., 2013: Liu, R.; Rallo, R.; Weissleder, R.; Tassa, C.; Shaw, S.; Cohen, Y. Nano-SAR development for bioactivity of nanoparticles with considerations of decision boundaries. <i>Small (Weinheim an Der Bergstrasse, Germany)</i> <b>2013</b>, <i>9(9–10)</i>, 1842–1852. <a href="https://doi.org/10.1002/smll.201201903">https://doi.org/10.1002/smll.201201903</a>
- OECD, 2007: OECD Guidance Document on the Validation of (Quantitative) Structure-Activity Relationship ((Q)SAR) Models. Retrieved from <a href="http://www.oecd.org/env/guidance-documenton-the-validation-of-quantitative-structure-activity-relationship-q-sar-models-9789264085442-en.htm">http://www.oecd.org/env/guidance-documenton-the-validation-of-quantitative-structure-activity-relationship-q-sar-models-9789264085442-en.htm</a>  (Accessed: 31/05/19)
- Oh et al., 2016: Oh, E.; Liu, R.; Nel, A.; Gemill, K.B.; Bilal, M.; Cohen, Y.; Medintz, I. L. Meta-analysis of cellular toxicity for cadmium-containing quantum dots. <i>Nature Nanotechnology</i> <b>2016</b>, <i>11(5)</i>, 479–486. <a href="https://doi.org/10.1038/nnano.2015.338">https://doi.org/10.1038/nnano.2015.338</a>    
- Pan et al., 2016: Pan, Y.; Li, T.; Cheng, J.; Telesca, D.; Zink, J.I.; Jiang, J. Nano-QSAR modeling for predicting the cytotoxicity of metal oxide nanoparticles using novel descriptors. <i>RSC Advances</i> <b>2016</b>, <i>6(31)</i>, 25766– 25775. <a href="https://doi.org/10.1039/C6RA01298A">https://doi.org/10.1039/C6RA01298A</a>  
- Pandharipande et al., 2009: Pandharipande, P. V.; Mora, J.T.; Uppot, R.N.; Goehler, A.; Braschi, M.; Halpern, E.F.; … Harisinghani, M. G. Lymphotropic nanoparticle-enhanced MRI for independent prediction of lymph node malignancy: a logistic regression model. <i>American Journal of Roentgenology</i> <b>2009</b>, <i>193(3)</i>, W230-237. <a href="https://doi.org/10.2214/AJR.08.2175">https://doi.org/10.2214/AJR.08.2175</a>
- Puzyn, et al., 2011: Puzyn, T.; Rasulev, B.; Gajewicz, A.; Hu, X.; Dasari, T. P.; Michalkova, A.; … Leszczynski, J. Using nano-QSAR to predict the cytotoxicity of metal oxide nanoparticles. <i>Nature Nanotechnology</i> <b>2011</b>, <i>6(3)</i>, 175–178. <a href="https://doi.org/10.1038/nnano.2011.10">(https://doi.org/10.1038/nnano.2011.10</a>
- Puzyn et al., 2018: Puzyn, T.; Jeliazkova, N.; Sarimveis, H.; Robinson, R.L.M.; Lobaskin, V.; Rallo, R.; ... Cronin, M.T. Perspectives from the NanoSafety Modelling Cluster on the validation criteria for (Q) SAR models used in nanotechnology. <i>Food and Chemical Toxicology</i> <b>2018</b>, <i>112</i>, 478-494. <a href="https://doi.org/10.1016/j.fct.2017.09.037">https://doi.org/10.1016/j.fct.2017.09.037</a>  
- Sellers et al., 2015: Sellers, K.; Deleebeeck, N.; Messiaen, M.; Jackson, M.; Bleeker, E.A.J.; Sijm, D., van Broekhuizen, F.A. Grouping Nanomaterials - A strategy towards grouping and read-across. <a href="https://www.rivm.nl/bibliotheek/rapporten/2015-0061.html">https://www.rivm.nl/bibliotheek/rapporten/2015-0061.html</a>
- Singh and Gupta, 2014: Singh, K.P.; Gupta, S. Nano-QSAR modeling for predicting biological activity of diverse nanomaterials. <i>RSC Advances</i> <b>2014</b>, <i>4(26)</i>, 13215–13230. <a href="https://doi.org/10.1039/C4RA01274G">https://doi.org/10.1039/C4RA01274G</a>
- Walkey et al., 2014: Walkey, C.D.; Olsen, J.B.; Song, F.; Liu, R.; Guo, H.; Olsen, D.W.H.; … Chan, W.C.W. Protein Corona Fingerprinting Predicts the Cellular Interaction of Gold and Silver Nanoparticles. <i>ACS Nano</i> <b>2014</b>, <i>8(3)</i>, 2439–2455. <a href="https://doi.org/10.1021/nn406018q">https://doi.org/10.1021/nn406018q</a>
- Wold et al., 2004: Wold, S.; Josefson, M.; Gottfries, J.; Linusson, A. The utility of multivariate design in PLS modeling. <i>Journal of Chemometrics</i> <b>2004</b>, <i>18(3–4)</i>, 156–165. <a href="https://doi.org/10.1002/cem.861">https://doi.org/10.1002/cem.861</a>
- Zarei et al., 2010: Zarei, M.; Khataee, A.R.; Ordikhani-Seyedlar, R.; Fathinia, M. Photoelectro-Fenton combined with photocatalytic process for degradation of an azo dye using supported TiO2 nanoparticles and carbon nanotube cathode: Neural network modeling. <i>Electrochimica Acta</i> <b>2010</b>, <i>55(24)</i>, 7259–7265. <a href="https://doi.org/10.1016/j.electacta.2010.07.050">https://doi.org/10.1016/j.electacta.2010.07.050</a> 
{: .references }

