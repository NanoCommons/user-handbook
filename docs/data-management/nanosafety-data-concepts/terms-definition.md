---
layout: page
title: Some starting remarks

description: "Term definitions"
permalink: /data-management/nanosafety-data-concepts/term-definitions/
parent: "(Meta)data concepts from the many years of nanosafety research"
grand_parent: Data/knowledge management
nav_order: 231
has_references: false
nav_exclude: false
---

#  Some starting remarks
A way to classify data approaches is by judging if they focus on individual data points or on datasets. Even if this might seem to be a strange classification at first, since datasets are constructed out of data points, it will be used here to show that different applications and stakeholder groups require different representations of the data. 

- As a primary dataset, we define here a set of (meta)data points, which are collected and stored together as part of an experiment or study. Many data curation templates described below are following this concept since they were designed to support experimentalists working on a study to prepare the data for upload to a database including all relevant (meta)data for this study. 
- Other datasets, i.e. secondary datasets, can be created from existing data e.g. to be used as input for nanoinformatics approaches and to train _in silico_ models. These can be stored to document the model development and, thus, are associated with a very specific purpose. However, such datasets generated for data reuse have already some links to the data point focused viewpoint. The data points building the dataset have to be collected from potentially different sources. These might be the primary literature or databases. 
- Before such a secondary dataset is produced, the data points can be seen as independent since they can be combined in many different ways to many different datasets. Such a separation of the data from their production, i.e. from the primary dataset describing the full study, is also often realised in relational databases, which collect information using a data model created to support specific search functionality. For example, data can be organised to provide all available information for a (nano)material, cell system, assay or any other object of interest. It is clear that each data point has to be supported by (meta)data at least on where it comes from and how it was created/curated (provenance metadata). Thus, there has to be a dataset describing the original study associated with it. However, this additional information is, unfortunately, often only seen as of secondary interest to the (re-)user and might even have been lost during the processing of the data. 

Roughly speaking, we could say that the dataset focus is better suited to address the data generator needs while the data point focus is allowing a multitude of data-reuse cases. However, both need high quality standards with respect to the metadata and especially provenance metadata provided.

