---
layout: page
title: Building regulatory acceptance

description: NanoCommons Demonstration Case - Building regulatory acceptance of nanoinformatics workflows
description_long: In this case, selected nanoinformatics approaches will be prepared and submitted to regulatory evaluation. <b>(ongoing)</b>
permalink: /demonstration-cases/Acceptance-demonstration-case/
parent: Demonstration cases
nav_order: 1009
has_references: true
---

#  NanoCommons Demonstration Case - Building regulatory acceptance of nanoinformatics workflows
{: .no_toc}
Regulatory agencies encourage the usage of alternatives to animal testing and also specifically the use of _in silico_ methods. In this case, selected nanoinformatics approaches will be prepared and submitted to regulatory evaluation. This case is **ongoing**.
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
In general, there are four pillars contained within the NanoCommons Infrastructure which can be useful for the risk assessment of nano and advanced materials in the regulatory domain:
1. Data and databases, and their availability to the risk assessment teams who make decisions on their regulatory acceptance, especially with regards to submissions from various national regulators when providing detailed evaluations to ECHA,
2. the knowledge (making SOPs and tools available to bridge the gap from research to application, especially with regards to risk assessment, and how to make these available to the wider community for application in dossier preparation,
3. _in silico_ models (e.g., (Q)SAR, PBPK, grouping and read-across methods), in order to further evaluate and explore relationships across similar nanoforms, and
4. the development and use of new approaches which can aid the process of risk assessment and dossier preparation, such as the development of clear and complete Adverse Outcome Pathways AOPs, with particular attention being paid to determining molecular initiating events MIEs.

ECHA has released multiple guidelines on how to use these methods in dossiers including the “Practical guide: How to use and report (Q)SARs” and the already mentioned “Read-Across Assessment Framework (RAAF)”. In accordance with these guidelines, NanoCommons partners have developed and integrated various nanoQSAR models, read-across and PBPK tools and models that have been presented in details in Deliverable 5.4 and in Deliverables 6.1-6.3. and are accessible through Graphical User Interfaces (GUI). Many other tools have been developed in other projects of the NSC. However, even with the push towards _in silico_ in general and nanoinformatics more specifically, there are only very few such methods that are  accepted / endorsed by regulatory agencies, and none are for NMs - no nanoinformatics workflows have been accepted for use in regulatory assessment as yet. However, a great deal of work is currently ongoing to evaluate tools, models, and workflows with a view towards aiding producers of nanomaterials in preparing their dossiers for submission to ECHA for regulatory approval, and national and European-level assessment agencies for further evaluation of materials of regulatory concern. One of the most promising of these computational workflows and models is dedicated to the grouping and read-across of nano and advanced materials based upon similarities to NMs that have already gained regulatory acceptance. At present, grouping and read-across methods are not mathematical models that can be used directly in risk assessment, although this remains a long-term objective (see also [Demonstration Case Grouping and read-across landscape integration](../ReadX-demonstration-case/)). Regulatory acceptance of these methods will depend upon a series of steps whereby, after being fully-tested, these methods and models could then be evaluated and validated through the European Union Reference Laboratory for alternatives to animal testing - EURL ECVAM.

ECVAM have a detailed and complex process for validation of alternative test methods, as shown in the steps in blue in Figure 22 below.  The focus to date has been on validation of experimental models, although computational models are also evaluated via this process.  For the evaluation of a test method to enter the EURL ECVAM (pre)validation process, a new test method needs to be submitted to EURL ECVAM in the correct way.  The first step is to compile the electronic version of the test pre-submission form.  The completed test presubmission form (with all completed sections) allows ECVAM to perform a preliminary assessment of the status of the development, optimisation and/or validation of the test method and its potential relevance with regard to the Three Rs (replacement, reduction, refinement of animal testing). If the model is considered to be suitably advanced, ECVAM will invite the submitter to proceed to step two, which is a complete submission.  ECVAM provides guidance to the submitter on preparation of a detailed test submission template (TST), in which the submitted gives a comprehensive evaluation of the method being submitted.  Once ECVAM have evaluated it, they provide a final decision, which depends on whether the submitted test method qualifies for entering the (pre-)validation process and also a decision on what stage it will enter the EURL ECVAM validation process.  A list of the methods that have been submitted to ECVAM is available via the Tracking System for Alternative methods towards Regulatory acceptance ([TASR](https://tsar.jrc.ec.europa.eu/)). Of the 137 test methods that have been submitted, only a couple are for computational (data-driven) models, with one such example that has successfully passed through all stages of the validation process, i.e., Submission, Validation, Peer-review, Recommendation and Regulatory Acceptance / Standards, being the ToxCast Estrogen Receptor Agonist Pathway Model, as shown in Figure 1.

<img src="{{ site.baseurl }}/images/demonstration-cases/Acceptance-ECVAM.png"/>
**Figure 1**. Schematic overview of the EURL ECVAM validation process for alternative test methods (which includes _in silico_ methods) shown in blue, and the key documents associated with each step.  ECVAM coordinates with a wide spectrum of stakeholders in this process as shown.
{: .caption }

<img src="{{ site.baseurl }}/images/demonstration-cases/Acceptance-Validation.png"/>
**Figure 2**. Illustration of the steps in the validation processes for alternative test methods through which the ToxCast computational model has successfully passed and reached regulatory acceptance (in this case supported by the US EPA).
{: .caption }

To support researchers in building regulatory acceptance for models and tools, a short- and long-term roadmap will be developed in intensive collaboration with the [NanoSolveIT project](https://nanosolveit.eu/), considering how to best practically support users in generating dossiers e.g., with tools and services for presenting the underlying hypothesis of the model / read-across, describing the study design, preparing and documenting the data used for model training and validation according to regulatory standards and including the needed metadata for quality control, document the models in the form of QMRF, or MODA templates and transfer the results into regulatory templates and attachments to these. The current status of selected NanoCommons tools and services will be validated against the requirements for regulatory acceptance to showcase their strengths but also identify gaps and actions for improvement (for example further experimental validation, additional documentation, more informative GUIs, etc.).

## Aims
Establish the process(es) for gaining regulatory acceptance of nanoinformatics models (both data-driven such as QSAR, PBPK, etc.) and physical based (e.g., materials models, binding affinities and corona formation), by working through the various processes such as submitting models to ECVAM (established for QSAR models and some initial ECVAM activity around PBPK models) and submitting selected models to the OECD Approaches to Testing and Assessment (IATA) case study project (in collaboration with NanoSolveIT) or establishing a CEN Workshop Agreement, and the decision processes as to which is the most appropriate for which type of model / tool.  Feedback from working our way through these processes, for example NanoCommons models, will feed into the workflow and into the tools and templates (such as MODA and QMRF). We will start with relatively easier models (QSAR) and then proceed to work through PBPK (based on the new guidance) and then a physics-based model (alone or linked to a QSAR).

## Tasks
Perform a mapping of the MODA and QMRF for similarities / differences - we note that the NanoInformaTIX project has been working on a MODA for QSARs so will be useful to see if we can access that also, or discuss with the teams involved.
Consideration of approaches for documentation of PBPK models - we had originally agreed to undertake an analysis of MODA/QMRF formats and see how these might be applied to describe and document PBPK models. However, very recently, a new guidance document and PBPK model checklist from the OECD (see Figures 3 and 4) have emerged, and thus inclusion of this into our planned work is essential and will support the process of submitting a PBPK model to ECVAM for validation.

The OECD guidance document (OECD, 2021) on the characterisation, validation and reporting of PBPK models for regulatory purposes, based on a six-step modelling workflow (Figure 3) with emphasis on tools/methods available to parameterise PBK models in the absence of sufficient in vivo data for calibrating the model or assessing its predictive capacity. The workflow also allows refining the model based on amendments from new information (new _in vitro_ data, new biological knowledge, etc).

<img src="{{ site.baseurl }}/images/demonstration-cases/Acceptance-OECD.png"/>
**Figure 3**. The steps in the OECD guidance document for validation of PBPK models for regulatory purposes.
{: .caption }

<img src="{{ site.baseurl }}/images/demonstration-cases/Acceptance-PBPK1.png"/>
<img src="{{ site.baseurl }}/images/demonstration-cases/Acceptance-PBPK2.png"/>
<img src="{{ site.baseurl }}/images/demonstration-cases/Acceptance-PBPK3.png"/>
**Figure 4**. PBPK model evaluation checklist - we will map this to the various model reporting templates and extend, if needed, for use with nano-PBPK models.
{: .caption }

The OECD model-reporting template delineates the nature of appropriate description of PBPK models to support a broad range of regulatory applications and use contexts, including situations where in vivo kinetic data for comparison to assess model performance are limited or unavailable. While drawing upon and consistent with previous international guidance (WHO, 2010)(EMA, 2019)(US FDA, 2018)(Tan et al., 2020), the template includes additional considerations to address the expanding range and applicability of PBPK models. The template provides a guide for model developers concerning aspects that should be reported to enable assessment based on the checklist shown in the snapshots below (Figure 4).

The guidance also includes consideration of how to increase the acceptance and use of “Next Generation PBPK models”, there is a need to demonstrate their validity. However, this is challenging in the case of data-poor chemicals that are lacking in kinetic data and for which predictive capacity cannot, therefore, be assessed (Paini et al., 2021).

Make a short list of our existing QSAR models to start preparing for the ECVAM submission. A quick review of the existing models on the [JRC Models database](http://cidportal.jrc.ec.europa.eu/ftp/jrc-opendata/EURL-ECVAM/datasets/QSARDB/LATEST/qsardb.html) (which is the historical record of the models that have been submitted to ECVAM for validation) shows that there are 154 models currently listed, none of which are for nanomaterials (or are identified by use of the term nano (nanoparticle / nanomaterial) in the search query.  The models include neural networks (12 models) and artificial intelligence (5 models) all using the standard QMRF report form, such as for example [Q13-34-0063 - QMRF Title: Nonlinear QSAR: artificial neural network for the Daphnia magna reproduction test](http://cidportal.jrc.ec.europa.eu/ftp/jrc-opendata/EURL-ECVAM/datasets/QSARDB/LATEST/PDF/_qmrf_protocol_Q13-34-0063_document.pdf), which was added on Dec 11, 2019.  Thus, we will utilise the standard QMRF report form for some of our existing QSAR models and for nanomaterials cytotoxicity prediction and Risk Assessment and put them through the ECVAM process as a learning processes, to understand the process, what additional information might be requested, which models are considered suitable by ECVAM to take forward for validation and why / why not, and document all the steps and refinements needed.

This will then be translated into a step-by-step guidance document on the process of nanoinformatics model validation and acceptance for regulatory purposes by ECVAM or OECD (via the IATA Case study work being undertaken in parallel in NanoSolveIT, which we will also leverage for this case study), with guidance for both data-driven and physics-based models that is consistent as far as possible.  The workflow will be integrated with  additional templates for supporting data and code (such as links to training data, PMML model representations) and the complete model documentation will be provided through existing tools that are integrated into the NanoCommons infrastructure, such as the Jaqpot computational platform.  The resulting white paper and tools, as well as a library of fully developed  NanoCommons / NanoSolveIT models and documentation reports (QMRF, MODA, PBPK, etc.)   will support guidance for nanoinformatics model developers.

## Expected Outcomes
-  white paper summarising the various approaches and key steps in gaining regulatory and industry acceptance of various nanoinformatics modelling tools, based on the different model types - QSARs, PBPK models, AOP-type models, physics-based models, and Integrated Approaches to Testing and Assessment (IATA).
- Complete documentation and reflections from the experience of working-through the process of submitting a model to ECVAM for validation, using  exemplar QSAR and PBPK models developed in NanoCommons, and in collaboration with NanoSolveIT a set of complete documentation for presenting an IATA to the OECD IATA Case studies project.  Depending on how quickly feedback is obtained, this can also feed into the white paper or had to be continued in the NanoSolveIT project.
- A library of our reference QMRFs or MODAs for different model-types and the underpinning tools to support  report development and documentation.


References
{: .references-header }
- OECD, 2021: Guidance document on the characterisation, validation and reporting of Physiologically Based Kinetic (PBK) models for regulatory purposes. http://www.oecd.org/chemicalsafety/risk-assessment/guidance-document-on-the-characterisation-validation-and-reporting-of-physiologically-based-kinetic-models-for-regulatory-purposes.pdf.
- WHO, 2010: WHO, Characterization and application of physiologically based pharmacokinetic models in risk assessment. International Programme on Chemical Safety. Harmonization Project Document No. 9, 2010. http://www.inchem.org/documents/harmproj/harmproj/harmproj9.pdf
- EMA, 2019: EMA, Guideline on the reporting of physiologically based pharmacokinetic (PBPK) modelling and simulation. EMA/CHMP/458101/2016, 2019. https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-reporting-physiologically-based-pharmacokinetic-pbpk-modelling-simulation_en.pdf
- US EPA, 2018: US FDA, Physiologically based pharmacokinetic analyses — format and content guidance for industry. Food and drug administration center for drug evaluation and research (CDER), clinical pharmacology, 2018. https://www.fda.gov/media/101469/download
- Tan et al., 2020: Tan YM, Chan M, Chukwudebe A, Domoradzki J, Fisher J, Hack CE, Hinderliter P, Hirasawa K, Leonard J, Lumen A, Paini A, Qian H, Ruiz P, Wambaugh J, Zhang F, Embry M, PBPK model reporting template for chemical risk assessment applications. Regul. Toxicol. Pharmacol. 2020, 115:104691.
- Paini et al., 2021: Paini A, Worth A, Kulkarni S, Ebbrell D, Madden J. Assessment of the predictive capacity of a physiologically based kinetic model using a read-across approach. Comput Toxicol. 2021 May;18:100159.
{: .references }
