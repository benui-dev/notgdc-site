<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">

{% include seo.html %}

<link href="{% if site.atom_feed.path %}{{ site.atom_feed.path }}{% else %}{{ '/feed.xml' | relative_url }}{% endif %}" type="application/atom+xml" rel="alternate" title="{{ site.title }} Feed">

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script defer data-domain="notgdc.io" src="https://plausible.io/js/script.js"></script>

<style>
  .btn-special{
    background-color:#f9b641!important;
  }
  .btn-special:hover{
    background-color:#ffd34e!important;
  }

  </style>

<script defer src="{%- include minified_path.html file='/assets/js/countdown' ext='js' -%}"></script>

<!-- Bootstrap Core CSS -->
<link href="{{ '/assets/vendor/bootstrap/css/bootstrap.min.css' | relative_url }}" rel="stylesheet">

<!-- Custom CSS -->
<link href="{%- include minified_path.html file='/assets/css/main' ext='css' -%}" rel="stylesheet">
</head>

<body id="page-top">

{{ content }}

<!--      Navigation
    <a class="menu-toggle rounded" href="#">
      <i class="far fa-bars"></i>
    </a>
    <nav id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand">
          <a class="js-scroll-trigger" href="#page-top">#notGDC</a>
        </li>
        <li class="sidebar-nav-item">
          <a class="js-scroll-trigger" href="#page-top">Coming Soon</a>
        </li>
      </ul>
    </nav> -->

<section class="content-section bg-light" id="footer"><!--style="background-color:#3f527c"-->
<div class="container">
<div class="content-section-heading text-center">
{% if site.footer.links %}
<div class="row">
<div class="col">
{% for link in site.footer.links %}
{% if link.label and link.url %}
<a href="{{ link.url }}" rel="nofollow noopener noreferrer me">{%- include icon.html icon=link.icon -%}{{ link.label }}</a>
{% endif %}
{% endfor %}
</div>
</div>
{% endif %}
<p class="text-center text-muted small mb-0">
#notGDC 2023 is hosted by <a href="https://benui.ca/">ben&#x1F331;ui</a>, with huge help from <a href="https://github.com/benui-dev/notgdc-site/graphs/contributors">contributors</a>
<br>
#notGDC 2020 was hosted by <a href="https://twitter.com/lucyamorris">Lucy</a> and <a href="https://twitter.com/mtrc">Mike</a>.
<br>
The 2020 jam was organised by <a href="https://twitter.com/DesignByCloud">Design By Cloud</a> and the Discord was maintained by <a href="https://twitter.com/lucyamorris">Lucy</a>, <a href="https://twitter.com/itscurlyx">Jacob</a>, <a href="https://twitter.com/vitekim">Mike</a> and <a href="https://twitter.com/DesignByCloud">Michael</a>.
<br>
#notGDC is based on ideas from lots of people, including <a href="https://twitter.com/squidinabox/status/176983168027598848">Squid In A Box</a> and <a href="https://eigenbom.github.io/notgdc2017/">Ben Porter</a>.</p>

Powered by Jekyll. Hosted on <a href="https://github.com/benui-dev/notgdc-site">GitHub</a>. Analytics by <a href="https://plausible.io/notgdc.io">Plausible.io</a>.

{% comment %}
<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded js-scroll-trigger" href="#page-top" aria-label="Scroll to top">
  {%- include icon.html icon="angles-up" -%}
</a>

<!-- Bootstrap core JavaScript -->
<script src="{{ '/assets/vendor/jquery/jquery.min.js' | relative_url }}"></script>
<script src="{{ '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js' | relative_url }}"></script>

<!-- Plugin JavaScript -->
<!-- Removing this to try just using CSS -->
<script src="{{ '/assets/vendor/jquery-easing/jquery.easing.min.js' | relative_url }}"></script>

<!-- Custom scripts for this template -->
<script src="{%- include minified_path.html file='/assets/js/stylish-portfolio' ext='js' -%}"></script>
{% endcomment %}

</body>
</html>
