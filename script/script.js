$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  
    Infinity: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    fade: true,
  });

  $(document).ready(function(){
    $(".newswpr .btnwpr").click(function(){
      $(".newswpr").addClass("isopen");
    })
    $(".newswpr .overlay").click(function(){
      $(".newswpr").removeClass("isopen");
    })
    $(".newswpr .closebtnwpr").click(function(){
      $(".newswpr").removeClass("isopen");
    })
  })