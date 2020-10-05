$('.menu__burger').click(function (event) {
   $(this).toggleClass("burger__active");
   $(".menu__nav").toggleClass("menu__nav-active");
   $(".body").toggleClass("body-767");
   $(".logo-width-1024-block").toggleClass("logo-width-1024-block-hide");
   $(".menu__logo").toggleClass("menu__logo-active");
   $(".body").toggleClass("body-active");
});