---
layout: page
title: See what's new
nav_order: 2
description: Data and nanoinformatics shepherds’ user guidance handbook
permalink: /changelog/
changes:
  - url: training-courses/PARC/
    description: PARC FAIR Data and Tools webinar series
    date: 2023-01-26
  - url: NanoGovernance/
    description: Multiple links to the Nano-Risk Governance Portal
    date: 2023-01-24
  - url: training-courses/PEROSH-nano-training/
    description: PEROSH nanomaterial training
    date: 2023-01-04
  - url: training-courses/SUSNANOFAB-training/
    description: SUSNANOFAB training
    date: 2023-01-04
  - url: /
    description: EU US Roadmap Nanoinformatics 2030
    date: 2022-12-14
  - url: about-and-partner-projects/
    description: Functionality to add comments added
    date: 2022-11-26
  - url: about-and-partner-projects/
    description: Privacy policy added
    date: 2022-11-26
  - url: SSbD/regulatory-guidance/
    description: OECD webinar - Safer & Sustainable Innovation Approach for More Sustainable Nanomaterials & Nano-enabled
    date: 2022-11-21
  - url: SSbD/regulatory-guidance/
    description: European Commission recommendation and infographic on SSbD
    date: 2022-12-10
  - url: data-management/roles/
  - url: training-courses/SABYDOMA-training/
    description: SABYDOMA webinars
    date: 2022-12-05
  - url: FAIRification/FAIRnessScores/
    description: FAIR maturity indicators in the life science
    date: 2022-12-06
  - url: data-management/roles/
    description: Roles according to ELIXIR RDMkit added with link to role specific training resources.
    date: 2022-12-04
  - url: FAIRification/
    description: Link to ELIXIR RDMkit pages with training resources on the data life cycle, roles and FAIRification tools added.
    date: 2022-12-04
  - url: /FAIRification/FAIRnessScores/
    description: Description of NanoSolveIT / NanoCommons completeness score
    date: 2022-12-03
  - url: nanoinformatics/corona-modelling/
    description: Details to Corona modelling tools
    date: 2022-12-03
  - url: nanoinformatics/adverse-outcome-pathways/
    description: Tools for querying AOP-related data added
    date: 2022-12-03
  - url: data-management/data-resources/NanoCommons-KB-manual/
    description: Short NanoCommons KB manual
    date: 2022-12-03
  - url: data-management/data-resources/NanoPharos/
    description: NanoPharos added
    date: 2022-12-03
  - url: FAIRification/
    description: WorldFAIR deliverable on FAIR Implementation Profiles and FAIR Connect (platform providing information on FAIR Supporting Resources) added.
    date: 2022-12-02
  - url: SSbD/regulatory-guidance/
    description: OECD webinar - Safer & Sustainable Innovation Approach for More Sustainable Nanomaterials & Nano-enabled
    date: 2022-11-21
  - url: changelog
    description: Changelog started
    date: 2022-11-21
  - url: FAIRification/FAIRidentifiers/
    description: NInChI updates from working group meeting
    date: 2022-11-16
  - url: training-courses/NanoHarmony-webinars/
    description: New partner project NanoHarmony
    date: 2022-09-05
  - url: NanoFab/
    description: New nanofabrication area
    date: 2022-04-12
  - url: FAIRification/FAIRidentifiers/
    description: FAIRidentifiers for materials - NInChI and ERM
    date: 2022-10-05
  - url: NanoGovernance/
    description: New nanorisk governance area
    date: 2022-07-14
  - url: nanoinformatics/
    description: New risk assessment area
    date: 2022-06-02
  - url: data-management/instance-maps/
    description: Description of the instance maps concept and tool
    date: 2022-04-15
  - url: SSbD/
    description: New SSbD area
    date: 2022-04-06
  - url: FAIRification/
    description: Reorganisation of FAIR section
    date: 2022-03-30
  - url: training-courses/
    description: NanoCommons and ACEnano training videos
    date: 2021-12-05
  - url: training-courses/2021-SbD-integration-workshop/
    description: NanoCommons SbD workshop
    date: 2021-12-02
  - url: nanoinformatics/
    description: Update of nanoinformatics area
    date: 2021-11-15
  - url: about-and-partner-projects
    description: Update of partner descriptions
    date: 2021-11-05
  - url: data-management/
    description: Update of data management area
    date: 2021-10-25
  - url: demonstration-cases/
    description: Demonstration cases
    date: 2021-09-28
  - url: /
    description: Start for Handbook project
    date: 2021-07-04

---
# Log of changes made to the Handbook 
<table  id="table-changelog">
{% assign changes = page.changes | sort:"date" | reverse %} 
  <tr>
    <th>Date <button onclick="sortTable(0)">&#11015;</button></th>
    <th width="70%">Description</th>
    <th>Area <button onclick="sortTable(2)">&#11015;</button></th>
  </tr>
{% for change in changes %}
    <tr>
      <td>{{ change.date  | date: "%d %b %Y" }}</td>
      <td width="70%">{{ change.description }}</td>
      <td><a href="{{ site.baseurl }}/{{ change.url }}">{{ change.url }}</a></td>
    </tr>
{% endfor %}
</table>

<script>
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table-changelog");
  switching = true;

  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      
      xdate = Date.parse(x.innerHTML);
      ydate = Date.parse(y.innerHTML);
      
      if (dir == "asc") {
        if (isNaN(xdate) || isNaN(xdate)) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (xdate > ydate) {
            shouldSwitch = true;
            break;
          }
        }
      } else if (dir == "desc") {
        if (isNaN(xdate) || isNaN(xdate)) {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (xdate < ydate) {
              shouldSwitch = true;
              break;
          }
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
</script>
