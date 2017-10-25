$(document).ready(function() {
  //Adding underline to active page in header and also removing its hover animation
  $(function() {
    switch (window.location.pathname) {
      case '/':
        $('li#nav-home').addClass('nav-active');
        $('li#nav-home a').removeClass('a-nav-hover');
        break;
      case '/addrecords':
        $('li#nav-a-records').addClass('nav-active');
        $('li#nav-a-records a').removeClass('a-nav-hover');
        break;
      case '/viewrecords':
        $('li#nav-v-records').addClass('nav-active');
        $('li#nav-v-records a').removeClass('a-nav-hover');
        break;
      case '/calculator':
        $('li#nav-calc').addClass('nav-active');
        $('li#nav-calc a').removeClass('a-nav-hover');
        break;
      case '/results':
        $('li#nav-results').addClass('nav-active');
        $('li#nav-results a').removeClass('a-nav-hover');
        break;
    }
  });
})
