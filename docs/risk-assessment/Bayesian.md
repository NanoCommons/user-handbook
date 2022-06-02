---
layout: page
title: Bayesian networks

description: Risk estimation using Bayesian networks
permalink: /risk-assessment/Bayesian/
parent: Risk assessment
has_children: false
nav_exclude: false
has_references: true
nav_order: 452
---

# Risk estimation using Bayesian networks
 Bayesian networks constitute a robust tool for investigating causal relationships between variables and for making predictions. One of their key features is the ability to integrate into the model different data sources and, if data are scarce, the model parameters can be updated when more data becomes available. In addition, they offer probabilistic inference given some evidence, which works in a dual direction: given evidence of an effect, inference can be conducted regarding the cause (“bottom-up” approach), and given evidence of a cause, we can infer the effect (“top-down” approach). For example, given evidence that a patient presents a series of symptoms, using a Bayesian network trained on symptom-disease data and following the “top-down” reasoning, we can estimate the probability that the patient suffers from a specific disease. These characteristics make Bayesian networks a powerful tool for RA, e.g. (Beaudequin et al., 2015; Carriger et al., 2016).

Wiesner and Bottero, 2011 and Marvin et al., 2017 were among the first to recognise the suitability of Bayesian networks in risk forecasting of NMs, highlighting their advantages. An early application of Bayesian networks was that of Money et al., 2012, who developed a Bayesian network for modelling the risk of silver NMs exposure in aquatic environments. In a later publication they updated the initial model, which was then validated and used for sensitivity analysis (Money et al., 2014). Marvin et al., 2017 developed a Bayesian network for hazard ranking of metal NMls (specifically they used data for TiO2, SiO2, Ag, CeO2, ZnO), using as nodes the physicochemical characteristics of a NM, the biological effects and exposure routes. On a similar wavelength, Murphy et al., 2016 deployed a Bayesian network using Ag, TiO2 and CNTs data and combined physicochemical properties and exposure potential to conclude on a RAt via a hazard node.


## Bayesian Network Jaqpot web service for predicting nanomaterial hazard
A bayesian network was built using the dataset and network structure presented in Marvin et al., 2017. The network was exposed as a ready-to-use web service through the Jaqpot Cloud Platform and can be accessed through: [https://app.jaqpot.org/model/Lfz3aBdh4LlJIJxAvNqV](https://app.jaqpot.org/model/Lfz3aBdh4LlJIJxAvNqV) 

References
{: .references-header }
- Beaudequin et al., 2015: Beaudequin, D.; Harden, F.; Roiko, A.; Stratton, H.; Lemckert, C.; Mengersen, K. Beyond QMRA: modelling microbial health risk as a complex system using Bayesian networks. <i>Environ Int</i> <b>2015</b>, <i>80</i>, 8-18.<a href="https://doi.org/10.1016/j.envint.2015.03.013">https://doi.org/10.1016/j.envint.2015.03.013)</a>
- Carriger et al., 2016: Carriger, J.F.; Martin, T.M.; Barron, M.G. A Bayesian network model for predicting aquatic toxicity mode of action using two dimensional theoretical molecular descriptors. <i>Aquat Toxicol</i> <b>2016</b>, <i>180</i>, 11–24. <a href="https://doi.org/10.1016/j.aquatox.2016.09.006">https://doi.org/10.1016/j.aquatox.2016.09.006</a>
- Marvin et al., 2017: Marvin, H.J.P.; Bouzembrak, Y.; Janssen, E.M.; van der Zande, M.; Murphy, F.; Sheehan, B.; Mullins, M.; Bouwmeester, H. Application of Bayesian networks for hazard ranking of nanomaterials to support human health risk assessment. <i>Nanotoxicology</i> <b>2017</b>, <i>11(1)</i>, 123-133. <a href="https://doi.org/10.1080/17435390.2016.1278481">https://doi.org/10.1080/17435390.2016.1278481</a>  
- Money et al., 2012: Money, E.S.; Reckhow, K.H.; Wiesner, M.R. The Use of Bayesian Networks for Nanoparticle Risk Forecasting: Model Formulation and Baseline Evaluation. <i>Sci Total Environ</i> <b>2012</b>, <i>426</i>, 436–445. <a href="https://doi.org/10.1016/j.scitotenv.2012.03.064">https://doi.org/10.1016/j.scitotenv.2012.03.064</a>  
- Money et al., 2014: Money, E.S.; Barton, L.E.; Dawson, J.; Reckhow, K.H.; Wiesner, M.R. Validation and sensitivity of the FINE Bayesian network for forecasting aquatic exposure to nano-silver. <i>Sci Total Environ</i> <b>2014</b>, <i>473–474>/i, 685–691. <a href="https://doi.org/10.1016/j.scitotenv.2013.12.100">https://doi.org/10.1016/j.scitotenv.2013.12.100</a>  
- Murphy et al., 2016: Murphy, F.; Sheehan, B.; Mullins, M.; Bouwmeester, H.; Marvin, H.J.P.; Bouzembrak, Y.; Costa, A.L.; Das, R.; Stone, V.; Tofail, S.A.M. A tractable method for measuring nanomaterial risk using Bayesian networks. <i>Nanoscale Res Lett</i> <b>2016</b>, <i>11(1)</i>, 503. <a href="https://doi.org/10.1186/s11671-016-1724-y">https://doi.org/10.1186/s11671-016-1724-y</a>   
- Wiesner and Bottero, 2011: Wiesner, M.R.; Bottero, J‐Y. A risk forecasting process for nanostructured materials, and nanomanufacturing. <i>Comptes Rendus Physique</i> <b>2011</b>, <i>12(7)</i>, 659-668. doi: <a href="https://doi.org/10.1016/j.crhy.2011.06.008">https://doi.org/10.1016/j.crhy.2011.06.008</a> 
{: .references }
