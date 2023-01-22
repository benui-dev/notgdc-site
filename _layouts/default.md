<!DOCTYPE html>
<html lang="en">
<head>
{% include head.html %}


  </head>

  <body id="page-top">
<!--      Navigation
    <a class="menu-toggle rounded" href="#">
      <i class="fa fa-bars"></i>
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

    <!-- Header -->
    <header class="masthead d-flex">
      <div class="container text-center my-auto">

        <div style="position:relative">
          <img class="img-fluid" style="position:absolute; left:10%; top:50%; transform: translate(-50%, -40%)" src="{{ '/assets/img/tablet.png' | relative_url }}"/>
          <img class="img-fluid" style="position:absolute; left:90%; top:50%; transform: translate(-50%, -40%)" src="{{ '/assets/img/console.png' | relative_url }}"/>
          <img class="img-fluid" style="position:absolute; left:50%; top:50%; transform: translate(-50%, -40%)" src="{{ '/assets/img/bannertext.png' | relative_url }}"/>
          <img class="img-fluid" style="height:60px" src="{{ '/assets/img/roundedbanner.png' | relative_url }}"/>
      </div>
        <br><br>
        <img class="img-fluid" src="{{ '/assets/img/notgdcheadersubtitle.png' | relative_url }}"/><br><br><br>
       <!--  <hr style="">
        <!-- <h1 class="mb-1">#notGDC</h1> -->
        <!-- <h3 class="mb-5"> -->
        <!-- <p class="text-light" style="font-size:25px">march 16th - 22nd 2020</p> -->
          <!-- <p style="color: #ffffff; font-size:25px">a game development non-conference, for everyone.</p> -->
        </h3>
        <br>
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-3">
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Submit Something</a>
      </div>

            <div class="col-lg-3">
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#submissions">Read Submissions</a>
      </div>



        </div>
<br>
<div class="row">
    <div class="col-lg-2"></div>
<div class="col-lg-2">
<a class="btn btn-primary js-scroll-trigger btn-block" href="/2020/index.html">#notGDC 2020</a>
</div>
<div class="col-lg-2">
<a class="btn btn-primary js-scroll-trigger btn-block" href="/2019/index.html">#notGDC 2019</a>
</div>
<div class="col-lg-2">
<a class="btn btn-primary js-scroll-trigger btn-block" href="/2018/index.html">#notGDC 2018</a>
</div>
<div class="col-lg-2">
<a class="btn btn-primary js-scroll-trigger" href="https://eigenbom.github.io/notgdc2017/">#notGDC 2017</a>
</div>

</div>
<br>

<div class="row">
    <div class="col-lg-4"></div>


<div class="col-lg-2">
<a class="btn btn-primary js-scroll-trigger" href="https://discord.notgdc.io/">Join Our Discord</a>
</div>

<div class="col-lg-2">
<a class="btn btn-primary js-scroll-trigger" href="https://wingsfund.me/gdcrelief">GDC Relief Fund</a>
</div>


</div>
<br><br>
        <!-- <a class="btn btn-primary btn-xl js-scroll-trigger" href="#jam">Join The Jam</a> --><br><br>
<!--
        <div class="row">
          <div class="col-lg-3 mx-auto"></div>
            <div class="col-lg-3 mx-auto">

        <a class="btn btn-primary btn-xl js-scroll-trigger btn-block" href="https://eigenbom.github.io/notgdc2017/">#notGDC 2017</a>
        </div>

            <div class="col-lg-3 mx-auto">
        <a class="btn btn-primary btn-xl js-scroll-trigger btn-block" href="../2018">#notGDC 2018</a>
        </div>
        <div class="col-lg-3 mx-auto"></div>
</div> -->
      </div>
      <div class="overlay"></div>
    </header>

    <!-- About -->
        <section class="content-section bg-dark text-light" style="background-color:#45b38d!important" id="about">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-10 mx-auto">
          <!--<h2 class="mb-5" style="font-family:Lilita One">Twitch Stream</h2> -->
            <h1 style="font-family:Lilita One">How to take part</h1>
            <p class="lead mb-5">#notGDC is a way for people who make games to share ideas, skills and things they love with the international games community.</p>

            <div class="row">
                <div class="col-lg-3 mx-auto">
                <i class="fa fa-4x fa-pencil"></i><br><br>
                <b>Write Something</b><br><hr style="border-top:1px solid rgb(255, 255, 255)">
                Pen us a blog, an essay, a love letter, a research paper, or mix up a great thread on Twitter.
                </div>
                <div class="col-lg-3 mx-auto">
                <i class="fa fa-4x fa-microphone"></i><br><br>
                <b>Record Something</b><br><hr style="border-top:1px solid rgb(255, 255, 255)">
                Record a podcast with friends, a quick YouTube video, or do a Twitch stream.
                </div>
                <div class="col-lg-3 mx-auto">
                <i class="fa fa-4x fa-retweet"></i><br><br>
                <b>Share Something</b><br><hr style="border-top:1px solid rgb(255, 255, 255)">
                Open source some helpful code, release a tutorial project, or teach us a weird trick.
                </div>
                <div class="col-lg-3 mx-auto">
                <i class="fa fa-4x fa-question"></i><br><br>
                <b>Or Something Else</b><br><hr style="border-top:1px solid rgb(255, 255, 255)">
                Got a different idea? If you've got something to share, we want to help you share it.
                </div>
            </div>
            <br><br>
            <!--  Write a blog post, make a video, or upload a demo and let us know on Twitter so we can add it to the list!</p> -->
            <a class="btn btn-light btn-xl js-scroll-trigger btn-special" href="https://form.notgdc.io/">Click Here To Submit!</a>

            <a class="btn-special btn btn-light btn-xl js-scroll-trigger" href="http://www.twitter.com/notgdc">Ask Us Something</a>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section bg-dark text-light" style="background-color:#45b38d!important" id="twitch">
        <div class="content-section-heading text-center">
          <h2 class="mb-5" style="font-family:Lilita One">Twitch Stream</h2>
<iframe
    src="https://player.twitch.tv/?channel=notgdc&parent=notgdc.io&muted=true&autoplay=false"
    height="450"
    width="800"
    allowfullscreen>
</iframe>
	</div>
    </section>

    <section class="content-section bg-light" id="submissions"><!--style="background-color:#3f527c"-->
<div class="container">
        <div class="content-section-heading text-center">
          <h2 class="mb-5" style="font-family:Lilita One">2023 #notGDC Submissions!</h2>
        </div>
        <!--
        <div class="row">
        <div class="col-lg-2">
        <span class="badge badge-success" style="font-size:12px">Motivation</span>
        </div>
        <div class="col-lg-10">
        <a class="portfolio-item" href="link">
        <h1 style="font-size:1.5rem">title</h1></a>
        <p> by author</p>
        </div>
        </div>
        <br>
        -->


		{% for submission in site.data.submissions.submissions %}
        <div class="row">
        <div class="col-lg-2">
		{%- for tag in submission.tags -%}
<a href="/tags/{{ tag }}"><span class="badge" style="background-color:{{ site.data.tags[tag].background-color }}; color:#ffffff; font-size:12px">{{ site.data.tags[tag].title }}</span></a>
		{%- endfor -%}
        </div>
        <div class="col-lg-10">
        <a class="portfolio-item" href="{{ submission.link }}">
        <h1 style="font-size:1.5rem">{{ submission.title }}</h1></a>
        <p> by <a href="{{ submission.author_link }}">{{ submission.author }}</a></p>
        </div>
        </div>
		{% endfor %}
      </div>
    </section>

	{% include footer.html %}
    <section class="content-section bg-light" id="footer"><!--style="background-color:#3f527c"-->
	  <div class="container">
        <div class="content-section-heading text-center">
<p class="text-center text-muted small mb-0">
#notGDC 2023 is hosted by <a href="https://benui.ca/">ben&#x1F331;ui</a> - you can contact them with problems or questions
<br>
#notGDC 2020 was hosted by <a href="https://twitter.com/lucyamorris">Lucy</a> and <a href="https://twitter.com/mtrc">Mike</a>.
<br>
The 2020 jam was organised by <a href="https://twitter.com/DesignByCloud">Design By Cloud</a> and the Discord is maintained by <a href="https://twitter.com/lucyamorris">Lucy</a>, <a href="https://twitter.com/itscurlyx">Jacob</a>, <a href="https://twitter.com/vitekim">Mike</a> and <a href="https://twitter.com/DesignByCloud">Michael</a>.
<br>
#notGDC is based on ideas from lots of people, including <a href="https://twitter.com/squidinabox/status/176983168027598848">Squid In A Box</a> and <a href="https://eigenbom.github.io/notgdc2017/">Ben Porter</a>.</p>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>

    <!-- Bootstrap core JavaScript -->
    <script src="/assets/vendor/jquery/jquery.min.js"></script>
    <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
	<!-- Removing this to try just using CSS -->
    <script src="/assets/vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for this template -->
    <script src="/assets/js/stylish-portfolio.min.js"></script>
  </body>
</html>
