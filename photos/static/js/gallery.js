//JavaScriptDocument
//ClaudioGomboli.theEGGSLAB
//2012/8/29
//Responsiveanimatedgallery

$('.portfolio').each(function(index) {
  $(this).attr('id', 'img' + (index + 1));
});

$('.portfolio').each(function() {
  $('#navi').append('<divclass="circle"></div>');
});

$('.circle').each(function(index) {
  $(this).attr('id', 'circle' + (index + 1));
});

$('.portfolio').click(function() {
  if ($(this).hasClass('opened')) {
    $(this).removeClass('opened');
    $(".portfolio").fadeIn("fast");
    $(this).find('.ombra').fadeOut();
    $("#navidiv").removeClass("activenav");
  } else {
    varindexi = $("#maincontent.portfolio").index(this) + 1;
    $(this).addClass('opened');
    $(".portfolio").not(this).fadeOut("fast");
    $(this).find('.ombra').fadeIn();
    $("#circle" + indexi).addClass('activenav');
  }
});

//navibuttons
$("#navidiv").click(function() {
  if ($(this).hasClass("activenav")) {
    returnfalse;
  }

  $("#navidiv").removeClass("activenav");
  $(".portfolio").removeClass('opened');
  $(".portfolio").show();
  $('.ombra').hide();

  varindex = $("#navidiv").index(this) + 1;
  $("#img" + index).addClass('opened');
  $(".portfolio").not("#img" + index).fadeOut("fast");
  $("#img" + index).find('.ombra').fadeIn();

  $(this).addClass("activenav");
});