<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body data-barba="wrapper">
    @php do_action('get_header') @endphp
    @include('partials.header')
    <div class="wrap container" role="document" data-barba="container" data-barba-namespace="{{$post->post_name}}">
      <div id="body-classes" @php body_class() @endphp>
        <div class="content">
          <main class="main">
            @yield('content')
          </main>
          @if (App\display_sidebar())
            <aside class="sidebar">
              @include('partials.sidebar')
            </aside>
          @endif
        </div>
      </div>
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </body>
</html>
