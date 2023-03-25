<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">

{% include seo.html %}

<link href="{% if site.atom_feed.path %}{{ site.atom_feed.path }}{% else %}{{ '/feed.xml' | relative_url }}{% endif %}" type="application/atom+xml" rel="alternate" title="{{ site.title }} Feed">

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">

<script defer data-domain="notgdc.io" src="https://plausible.io/js/script.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>

<!-- Custom CSS -->
<link href="{%- include minified_path.html file='/assets/css/main' ext='css' -%}" rel="stylesheet">

<meta content="#ff517b" data-react-helmet="true" name="theme-color" />
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

<section class="content-section bg-light" id="footer">
<div class="ngdc-container">
<div class="content-section-heading">
{% if site.footer.links %}
<div class="ngdc-row">
<div class="ngdc-col">
{% for link in site.footer.links %}
{% if link.label and link.url %}
<a href="{{ link.url }}" class="wrap-full" rel="nofollow noopener noreferrer me">{%- include icon.html icon=link.icon -%}{{ link.label }}</a>
{% endif %}
{% endfor %}
</div>
</div>
{% endif %}
<p class="text-center text-muted small no-margin-bottom">#notGDC is an informal event run entirely by volunteers. Huge thanks to everyone
who has given their time to help bring it to life. <a href="{% link _pages/about.md %}">Full history of #notGDC</a>.</p>
<p class="text-center text-muted small no-margin-bottom">Powered by Jekyll. Hosted on <a href="https://github.com/benui-dev/notgdc-site">GitHub</a>. Analytics by <a href="https://plausible.io/notgdc.io">Plausible.io</a>.</p>

{% comment %}
<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded " href="#page-top" aria-label="Scroll to top">
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
<script src="{%- include minified_path.html file='/assets/js/tags' ext='js' -%}"></script>

</body>
</html>
