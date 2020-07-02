<header class="banner fixed-top">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a>

    <button class="hamburger hamburger--collapse navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu($primarymenu) !!}
      @endif
    </div>
  </nav>
</header>
