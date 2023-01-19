function progress() {

    var windowScrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;
    var $bgColor = progress > 99 ? '#4db792' : '#EF4E31';
    var $textColor = progress > 99 ? '#fff' : '#333';
  
    $('.progress .bar').width(progress + '%').css({ backgroundColor: $bgColor });
    $('h1').text(Math.round(progress) + '%').css({ color: $textColor });
    $('.fill').height(progress + '%').css({ backgroundColor: $bgColor });
  }
  
  progress();
  
  $(document).on('scroll', progress);