---
layout: page
title: PARC Data and FAIR Training
permalink: /training-courses/PARC-training/
description_long: The schedule for the PARC FAIR Data and Tools webinar series also providing the recordings as we go.
parent: Training courses
has_children: false
has_toc: false
nav_order: 977 # use 1000-year for sorting / 1000 for all trainings offered by a project

webinars:
  - title: FAIR Awareness
    speaker: Erik Schultes, GO FAIR Foundation
    date: 2023-01-26
    slidesURL: https://osf.io/8gjek
  - title: Experience as a data shepherd in NanoCommons – bridging the knowledge gap and changing cultures around data management
    speaker: Anastasios Papadiamantis, University of Birmingham
    date: 2023-02-09
  - title: FAIR Implementation Profiles – Introduction & their use in PARC
    speaker: Barbara Magagna, GO FAIR Foundation
    date: 2023-02-23
  - title: Visualisation of complex experimental workflows
    speaker: Thomas Exner, SevenPastNine
    date: 2023-03-09
  - title: Making (nano)toxicity data FAIR – experiences from Gov4Nano & Data Re-use examples
    speaker: Penny Nymark, Karolinska University
    date: 2023-03-23
  - title: Analysis of FAIRness of Online DMP Tools
    speaker: Iseult Lynch, University of Birmingham
    date: 2023-04-06
  - title: "Example FIPs – WorldFAIR project: Chemistry & Nanomaterials"
    speaker: Leah McEwan, Cornell University / Thomas Exner, SevenPastNine
    date: 2023-04-20
---

<img src="{{ site.baseurl }}/images/logos/parc.png" width="150" class="image--right"/>

# PARC FAIR Data and Tools webinar series
The European Partnership for the Assessment of Risks from Chemicals (PARC) is an EU-wide research and innovation partnership programme 
{: .lead }

It support EU and national chemical risk assessment and risk management bodies with new data, knowledge, methods, networks and skills to address current, emerging and novel chemical safety challenges.

As part of its openness and FAIRness mission, a series of webinars is organised open to all with an interest in FAIR data and FAIR tools / models / software. Within the scope of PARC. it is pulling in speakers from across the spectrum including from INQUIRE, WorldFAIR, MACRAME, NanoSolveIT and more.

Webinars are held every other Thursday 4-5 CET - around 45 minutes presentation + 15 minutes discussion.

[Zoom link](https://bham-ac-uk.zoom.us/j/82030106755?pwd=QjdMOFczbzg1Z0p2SDdDT1NmdWIrZz09)   
Meeting ID: 820 3010 6755   
Passcode:438719

## Confirmed presentations (many more to come)
<table  id="table-parc">
{% assign webinars = page.webinars | sort:"date" %} 
  <tr>
    <th>Date</th>
    <th width="70%">Title</th>
    <th>Speaker</th>
    <th>Slides / Recording</th>
  </tr>
{% for webinar in webinars %}
    <tr>
      <td>{{ webinar.date  | date: "%d %b %Y" }}</td>
      <td width="60%">{{ webinar.title }}</td>
      <td>{{ webinar.speaker }}</td>
      <td>
        {% if webinar.slidesURL %}<a href="{{ webinar.slidesURL }}"><span class="material-symbols-outlined">slide_library</span></a>{% else %}<span class="material-symbols-outlined">slide_library</span>{% endif %}
        /
        {% if webinar.recURL %}<a href="{{ webinar.recURL }}"><span class="material-symbols-outlined"><span class="material-symbols-outlined">headset_mic</span></a>{% else %}<span class="material-symbols-outlined">headset_mic</span>{% endif %}</td>
    </tr>
{% endfor %}
</table>
