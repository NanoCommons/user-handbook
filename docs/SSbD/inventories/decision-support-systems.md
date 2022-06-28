---
layout: page
title: Decision support systems
permalink: /SSbD/inventories/dss/
parent: SSbD inventories and tools
grand_parent: Safe-and-Sustainable-by-Design
description_long: Decision support systems currently developed in different SbD projects (Harmless)

has_children: false
nav_exclude: false
has_references: true
nav_order: 513
---

# Decision support systems
DSS are currently under development in the different EU projects funded under the NMB-P15 and NMBP-16 calls. Information on these will be collected here to highlight synergetic effects. 
{: .lead }

## HARMLESS
HARMLESS develops a novel, multifaceted Safe Innovation Approach (SIA) to Multi-Component, NanoMaterials (MCNM) and High Aspect Ratio Nanoparticles (HARNs) by integrating New Approach Methodologies (NAMs).

To ensure that industries, including SMEs, pick up the new approach, a user-friendly Decision Support System (DSS) was developed and validated iteratively at scale in different case studies. The HARMLESS DSS provides Safe and Sustainable by Design (SSbD) decision support to the users based on a well-established concept of Risk-Informed Decision Making and a Bayesian data and model integration approach.

The IT-architecture of the HARMLESS DSS is based on a FAIR (Findable, Accessible, Interoperable and Reusable) and modular approach in which all HARMLESS data, knowledge and models are captured in the following stand-alone, but highly interconnected components:

1. eNanoMapper as a database to store all nanomaterial & experimental data
2. the HARMLESS FAIR Data Point to capture all knowledge and decision rules in triples (RDF)
3. the HARMLESS Model FAIR-point that describes all models/algorithms and make them runnable internally as well as accessible via API
4. a smart HARMLESS DSS interface.

Being modular, the DSS interface connects to the HARMLESS components, but can also connect to external components (e.g., NanoCommons Data Warehouse, Jaqpot, etc.). Likewise, other components (from other projects) can connect to each of the individual HARMLESS stand-alone components as well.
