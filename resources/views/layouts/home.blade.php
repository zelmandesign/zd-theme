<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php body_class() @endphp data-barba="wrapper">
    @php do_action('get_header') @endphp
    @include('partials.header')
    <div class="wrap" role="document" data-barba="container" data-barba-namespace="{{$post->post_name}}">
      <div id="body-classes"  @php body_class() @endphp>
        <div class="content">
          <main class="main">
            @yield('content')
          </main>
        </div>
      </div>
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </body>
</html>
