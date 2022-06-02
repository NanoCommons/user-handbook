---
layout: page
title: GUIDEnano

description: GUIDEnano risk assessment tool
permalink: /risk-assessment/GUIDEnano/
parent: Risk assessment
has_children: false
nav_exclude: false
nav_order: 451
---

# GUIDEnano risk assessment tool
The GUIDEnano tool is an extensive risk assessment tool, first developed during the EU FP7 project GUIDEnano. 
{: .lead }

<iframe width="420" height="315" src="https://www.youtube.com/embed/HJACrBOaQNs" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>
{: .more-link .more-link--video }

Since then, the GUIDEnano tool is continuously being extended and improved, through participation in various EU-funded projects. In addition, NanoCommons partners have extended and integrated several other modelling components that can be used either alone or in combination, to construct the proposed risk assessment pipeline.

<img src="{{ site.baseurl }}/images/risk-assessment/GUIDEnano1.png" />

[GUIDEnano tool: first insight of the tool](https://www.youtube.com/watch?v=pZQUVDlFEqQ)
{: .more-link .more-link--video }

GUIDEnano is an interactive web-based tool that guides users in a process designed for nanomaterial risk screening, risk assessment, and nano-based risk mitigation measures. The GUIDEnano tool was developed during the GUIDEnano project funded under the EU Seventh Framework programme (2013 – 2017) and currently further refined under the framework of other ongoing EU funded projects. Overall, the GUIDEnano tool combines a range of predictive models, multi-level decision trees, and databases to derive critical information related to risk assessment and risk mitigation processes for nanomaterials and nano-enabled products. The user has significant flexibility to define the scope of the assessment, ranging from a single activity to a collection of connected activities across the life-cycle of a nano-enabled product (i.e., from production to waste management). 

[GUIDEnano Tool Tutorial](https://www.youtube.com/watch?v=sKMkr0-p3l0)
{: .more-link .more-link--video }
[Get access to the GUIDEnano Tool](https://tool.guidenano.eu/)
{: .more-link .more-link--app }

To use GUIDEnano, a user is directed towards a series of interconnected modules that are used to describe the case study: activities, (nano)materials, compartments/fate, exposure and hazard assessment, and risk assessment. Within the (nano)materials module, the user introduces information on the identity and properties of the nanomaterial and other substances included in the nano-enabled product under assessment. This module includes information on the materials’ properties, such as impurities, size distribution, shape, and/or coatings, that can be entered to characterize a given (nano)material. Within the activity module, the user selects an activity from a list that includes > 200 processes involved along the nanomaterial’s life cycle such as e.g., pouring, product manufacturing, product abrasion. Currently, decision trees to derive release estimates for each of these activities are being incorporated into the tool. The release values, either estimated by the user or derived by the tool, are then connected to direct human exposure routes (e.g., dermal, inhalation, ingestion) or environmental compartments (e.g., indoor air, sewage, soil, etc.). A collection of state-of-the-art fate models are used to simulate a nanomaterial’s fate (i.e., transport, transformations) in different environments as well as derive exposure estimates in the target environmental compartments or by different routes of human exposure. The introduction of exposure estimates derived from real measurements or from external software programs are also possible. In addition, a link to an exposure-scenario is offered as an alternative to derive occupational exposure estimates (http://guidenano.iom-world.co.uk/search.aspx).   

The hazard assessment module relies on a tiered approach that guides a user towards the derivation of a safety limit value. In Step 1, the user is asked if a hazard threshold value (i.e., Derived No-Effect Level (DNEL), Occupational Exposure Limits (OEL)) for the relevant material currently exists. If not, Step 2 is triggered in which the user is asked to introduce existing relevant toxicity studies for the nanomaterial to which exposure is predicted to occur, or for a similar, proxy material. Depending on the hazard endpoint of interest, the user is offered a list of relevant toxicity study templates to choose from and additional questions are triggered to collect study design information and results. Relevance, quality, and similarity scores are derived from these data and used to conclude on the acceptability of a toxicological study for a given hazard endpoint. Only acceptable, high-quality studies can be used to derive the final safety limit value. By similarity, the tool refers to the similarity of the exposure relevant material versus the material used in the toxicology studies. If none of the available studies are acceptable, Step 3 is activated which is based on worst-case default hazard thresholds for more generic groups of nanomaterials based on morphology, solubility and reactivity.

The risk assessment module presents an overall matrix of all assessed hazard endpoints for all different exposed populations in the life cycle stage considered. For each endpoint used in each exposed compartment, GUIDEnano combines the exposure and hazard data to obtain a risk assessment result. A red indicator signifies that the risk for adverse health effects is considered “high,” an orange signifies “medium”, a green signifies “low,” and black indicates “not determined yet.” The user can also use the GUIDEnano tool to simulate how risk predictions may change by introducing different types of risk mitigation measures, such as e.g., release-mitigating measures or use of personal protective equipment. 


