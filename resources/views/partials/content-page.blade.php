<div class="transition-container">
  <div class="curtain-enter">
    <div class="loader-inner pacman"></div>
  </div>
  <div class="curtain-leave">
    <div class="loader-inner pacman"></div>
  </div>
</div>

@php the_content() @endphp
{!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
