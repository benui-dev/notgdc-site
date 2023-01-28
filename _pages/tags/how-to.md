---
title: "How To"
permalink: /tags/how-to/
tag: how-to
year: 2023
---


{% for submission in site.data.submissions.submissions %}
  {% if submission.year == page.year %}
    {%- for searchtag in submission.tags -%}
      {% if searchtag == page.tag %}
        {% include submission.html submission=submission %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}
