---
layout: page
title: News
nav_order: 2
description: Data and nanoinformatics shepherds’ user guidance handbook
permalink: /changelog/
changes:
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
<table  id="changelog">
{% assign changes = page.changes | sort:"date" | reverse %} 
  <tr>
    <th>Date <button onclick="sortTable(1)">&#11015;</button></th>
    <th width="70%">Description</th>
    <th>Area <button onclick="sortTable(3)">&#11015;</button></th>
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
  table = document.getElementById("changelog");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
</script>
