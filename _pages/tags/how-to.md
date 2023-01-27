---
title: "How To"
permalink: /tags/how-to/
tag: how-to
---


{% for submission in site.data.submissions.submissions %}
{%- for searchtag in submission.tags -%}
{% if searchtag == page.tag %}
{% include submission.html submission=submission %}
{% break %}
{% endif %}
{% endfor %}
{% endfor %}
