---
layout: page
title: Ten simple actions for NSC Research Output
permalink: /FAIRification/ten-simple-actions/
parent: FAIRification
has_children: false
nav_order: 302
has_references: true
---

# Ten simple actions to make NSC Research Output more Findable
{: .no_toc}
A lot has been written about the FAIR principles for making data findable, accessible, interoperable, and reusable (just search for FAIR “NanoSafety Cluster” in Google Scholar). But now we must continue to put these things into practice.
{: .lead}

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

This document is an adoption of an earlier published contribution to the 2024 NSC Update #01, see [https://zenodo.org/records/10533126](https://zenodo.org/records/10533126).
It describes a few solutions adopted by the NSC that can be used
by any NSC project partner. Here, we widen the focus from data to research output, as proposed by Houweling and Willighagen (Houweling and Willighagen, 2023).
We can even push this all the way to make NSC projects themselves more FAIR, as described in this newsletter
in 2018 (Willighagen et al., 2018). To me, this is important, as a lot of nanosafety knowledge is not easily captured in raw numbers.
The integration of data sources to support nanosafety research was identified by several initiatives (Karcher et al., 2017).

## Findable in Zenodo

To get a globally unique identifier for research output can easily be done with the
digital object identifier (DOI). DOIs are routine minted by NSC projects using
<a href="https://figshare.com/search?q=nanosafety">Figshare</a> and
<a href="https://zenodo.org/search?q=nanosafety">Zenodo</a>, not just for data,
but also the NSC Newsletter and project deliverables. Zenodo is of particular interest 
here because of the integration with the EU CORDIS database and the
<a href="https://zenodo.org/communities/nsc">Zenodo NSC Community</a>.
The link with the CORDIS database links the research output to the EU grant, 
while the second makes it easier to find output from other NSC projects.

<b>Action 1</b>
Get a DOI for your research output; it is by far the easiest way to make your work more FAIR.

<b>Action 2</b>
If your NSC project does not have a Zenodo Community, encourage your project coordinator to create one. Example communities exist for the three
<a href="https://zenodo.org/communities/nanoriskgovernance">Nano Risk Governance</a> 
projects, <a href="https://zenodo.org/communities/nanosolveit">NanoSolveIT</a>, 
<a href="https://zenodo.org/communities/nanocommons">NanoCommons</a>,
and <a href="https://zenodo.org/communities/sbd4nano">SbD4Nano</a>.

<b>Action 3</b>
Link your research output on Zenodo to at least the
<a href="https://zenodo.org/communities/nsc">NSC Community</a>.

## Findable in Zenodo

The DOI makes it possible for other efforts to propagate the metadata of the research
output. For example, <a href="https://datacite.org/">DataCite</a> indexes output in
Figshare and Zenodo4. The NanoSafety Cluster also keeps track of research output on 
their website (see the above screenshot). For this, it keeps
<a href="https://www.zotero.org/groups/2248011/eu_nsc_deliverables_and_publications/library">a Zotero group</a> of data, 
journal articles, and project deliverables, assuming they have DOIs. The content of this 
library is embedded as a publication list on the NSC website. The NSC collected more 
than 500 journal articles (the oldest from 2010), 55 datasets, and 37 project 
deliverables, knowing this is just a subset of the full output of the cluster.

<b>Action 4</b>
Therefore, we welcome submission of more DOIs. Instructions on how to send DOIs for 
data, articles, deliverables, etc, to the NSC cluster can be found at
<a href="https://www.nanosafetycluster.eu/outputs/public-deliverables-publications/">nanosafetycluster.eu/outputs/public-deliverables-publications/</a>. 

## Findable based on JRC and ERM identifiers

But if we can go beyond sharing the main metadata of the output (title, authors, venue,
 publication date), then we realize that this is just the start: we want to find 
 research output about a particular (type of) nanomaterial. This is more interesting for 
 risk assessment than finding all articles by some researcher, which undoubtedly misses 
 much relevant literature. That is, we are just starting to realize how we want to find 
 research output.

Therefore, when you get a DOI for research output, use nanomaterial identifiers clearly
 in the research output or even as keywords. The latter was recently done by a 
 NanoSolveIT partner6. Identifiers that can be used include the identifiers for the JRC 
 representative industrial nanomaterials7 and the European Registry of Materials 
 identifier8. The InChI for nanomaterials (NInChI) is still under development and may 
 not yet be persistent9.

The Research Output management, FAIRness & sharing working group (formerly, WGF and WG4) 
has activities to propagate metadata of research output about nanomaterials. 
Particularly, these two projects started under the
<a href="https://www.nanocommons.eu/">NanoCommons</a> project: one project 
tracks journal articles about the JRC materials; the second tracks citable datasets with 
open licenses:

* <a href="https://nanocommons.github.io/specifications/2024/WD-jrc-20240115/">Ontology IRIs for the JRC representative industrial nanomaterials</a> (see Action 6)
* <a href="https://nanocommons.github.io/datasets/">Overview of open datasets released by NanoSafety Cluster projects</a> (see Action 7)

Both websites make use of <a href="https://bioschemas.org/developer/liveDeploys">Bioschemas</a>
standards which are supported by major search engines like Google Search. For example, 
by listing datasets in the overview, they automatically become visible in the
<a href="https://datasetsearch.research.google.com/">Google Dataset Search</a>.

<b>Action 5</b>
Use nanomaterial identifiers clearly in research output and ideally as keywords.

<b>Action 6</b>
If you find your research article about JRC materials missing in the JRC representative industrial nanomaterials page, register the DOI with the NSC website (see Action 4).

<b>Action 7</b>
If you find your open-licensed dataset missing in the Overview of open datasets, email me the DOI.

## Findable via ELIXIR

Elsewhere in this NSC Updates10 you will find an article on the ELIXIR Toxicology Community, described in more detail in a recent whitepaper11. The next three actions are simple solutions to make other types of research (project) output more findable: training material, computational services, standards. You do not have to be a member of the Toxicology Community to take these actions.

<b>Action 8</b>
Training material can be registered in the
<a href="https://tess.elixir-europe.org/">ELIXIR TeSS platform</a>, like
<a href="https://tess.elixir-europe.org/content_providers/nanocommons">NanoCommons did too</a>.
You can log in via the LS Identifier using your ORCID.

<b>Action 9</b>
Computational services can be registered with the
<a href="https://bio.tools/">ELIXIR bio.tools platform</a>, and link 
your services to <a href="https://toxicology.bio.tools/">the toxicology domain</a>.

<b>Action 10</b>
Read the recipes in the ELIXIR-hosted <a href="https://faircookbook.elixir-europe.org/">FAIR CookBook</a>
which gives many more ideas on how to make your output more FAIR.

## Conclusion

This article gives ten simple actions to make EU NanoSafety Cluster research output more findable using solutions adopted by the NSC (projects). Findable is a minimal step for making output more reusable (more FAIR) and at the very least supports our dissemination activities and exchange of knowledge about nanomaterial safety. For experimental nanosafety data, the sharing via community templates is coming along nicely13,14. But I wish for a future where all NSC research output is made findable, whether open-licensed or not. The EU NanoSafety Cluster helps with this, beyond just data, but needs your input, as described by the ten actions.


References
{: .references-header }
- Houweling and Willighagen, 2023: Houweling, J.; Willighagen, E. Research Output Management. <i>Qeios</i> <b>2023</b>. <a href="https://doi.org/10.32388/ZNWI7T">https://doi.org/10.32388/ZNWI7T</a>.'
- Willighagen et al., 2018: Willighagen, E.; Najko Jahn; Nielsen, F. Å. The EU NanoSafety Cluster as Linked Data Visualized with Scholia. <i>NSC Newsl.</i> <b>2018</b>. <a href="https://doi.org/10.6084/M9.FIGSHARE.6727931">https://doi.org/10.6084/M9.FIGSHARE.6727931</a>.
- Karcher et al., 2017: Karcher, S.; Willighagen, E. L.; Rumble, J.; Ehrhart, F.; Evelo, C. T.; Fritts, M.; Gaheen, S.; Harper, S. L.; Hoover, M. D.; Jeliazkova, N.; Lewinski, N.; Marchese Robinson, R. L.; Mills, K. C.; Mustad, A. P.; Thomas, D. G.; Tsiliki, G.; Hendren, C. O. Integration among Databases and Data Sets to Support Productive Nanotechnology: Challenges and Recommendations. <i>NanoImpact</i> <b>2017</b>, 9, 85–101. <a href="https://doi.org/10.1016/j.impact.2017.11.002">https://doi.org/10.1016/j.impact.2017.11.002</a>.
{: .references }
