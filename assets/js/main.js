$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".social-media-right").length) {
    let clicked = true;
    $(".social-media-right .arrow-click").on("click", function () {
      if (!clicked) {
        $(this).parent().find("ul").animate({ left: "-100%" }, 20);
        clicked = true;
      } else {
        $(this).parent().find("ul").animate({ left: "0%" }, 20);
        clicked = false;
      }
    });
  }


  if ($(".company-slider").length) {
    $(".company-slider").slick({
      slidesToShow: 8,
      rtl: currentDir == "rtl" ? true : false,
      arrows: false,
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }

  if ($(".latest-projects-slider").length) {
    $(".latest-projects-slider").slick({
      slidesToShow: 4,
      rtl: currentDir == "rtl" ? true : false,
      arrows: true,
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }


  if ($(".watch_video_scrollable".length)) {
    $(".watch_video_scrollable").mCustomScrollbar({
      theme: "dark",
      alwaysShowScrollbar: 1,
      scrollEasing: "easeOut",
      mouseWheel: { preventDefault: true },
    });
  }


  $(".custom-navbar #nav-icon1").click(function () {
    $(".side-nav").addClass("side-nav-open");
    $("html").addClass("side-active");
  });

  if ($(".side-nav").length) {
    $(".side-nav .close-nav").click(function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".bg-side-open").length) {
    $(".bg-side-open").on("click", function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
      $(".profile-sidebar").removeClass("profile-sidebar-active");
    });
  }


  if ($(".animate__animated").length) {
    new WOW().init();
  }

  $("html").addClass("splash-active");

  if ($(".custom-navbar").length) {
    $(".custom-navbar .submenuparent .submenu li a").on('mouseover', function () {
      var datamenu = $(this).attr('data-menu');
      $(`#${datamenu}`).addClass('activebigmenu')
    })
    $(".custom-navbar .submenuparent .submenu li a").on('mouseleave', function () {
      var datamenu = $(this).attr('data-menu');
      $(`#${datamenu}`).removeClass('activebigmenu')
    })

    $(".top-submenu").on('mouseover', function () {
      $(this).addClass('activebigmenu')
    })
    $(".top-submenu").on('mouseleave', function () {
      $(this).removeClass('activebigmenu')
    })
  }



  if ($(".teste_cards-slider").length) {
    $(".teste_cards-slider").slick({
      slidesToShow: 4,
      rtl: currentDir == "rtl" ? true : false,
      arrows: false,
      dots: false,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }


  AOS.init();


  if($(".web-section-slider").length){
    $(".web-section-slider").slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }
  
  if($(".testemonial").length){
    var open = false;
    $(".testemonial .test-card-body a").on("click", function(e){
      e.preventDefault();
      if(!open){
        $(this).parent().addClass("active_test-card-body");
        $(this).text("قراءه اقل");
        open = true;
      }else{
        $(this).parent().removeClass("active_test-card-body");
        $(this).text("قراءه المزيد");
        open=false;
      }

    })
  }

});



var inputs = document.querySelectorAll(".file-input");

for (var i = 0, len = inputs.length; i < len; i++) {
  customInput(inputs[i]);
}

function customInput(el) {
  const fileInput = el.querySelector('[type="file"]');
  const label = el.querySelector("[data-js-label]");

  fileInput.onchange = fileInput.onmouseout = function () {
    if (!fileInput.value) return;

    var value = fileInput.value.replace(/^.*[\\\/]/, "");
    el.className += " -chosen";
    label.innerText = value;
  };
}


$(window).on("load", function () {
  $("html").removeClass("splash-active");
  $(".splashscreen").addClass("splashscreen_none");
});


