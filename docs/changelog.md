---
layout: page
title: News
nav_order: 1
description: Data and nanoinformatics shepherds’ user guidance handbook
permalink: /changelog/
changes:
  - url: SSbD/regulatory-guidance/
    description: OECD webinar - Safer & Sustainable Innovation Approach for More Sustainable Nanomaterials & Nano-enabled
    date: 2022-11-21
  - url: changelog
    description: Changelog started
    date: 2022-11-21

---
# Log of changes made to the Handbook 

<table>
{% assign changes = page.changes | sort:"date" | reverse %} 
{% for change in changes %}
    <tr>
      <td>{{ change.date  | date: "%d %b %Y" }}</td>
      <td width="70%">{{ change.description }}</td>
      <td><a href="{{ site.baseurl }}/{{ changes.url }}">{{ change.url }}</a></td>
    </tr>
{% endfor %}
</table>
