/*
1. preloader
2. elements.Timeout
3. fullscreen
4. page transitions
5. menu active state
6. intense IMG
7. owlCarousel HOME slider
8. owlCarousel HERO slider SLIDE
9. owlCarousel HERO slider ZOOM
10. owlCarousel HERO slider SPLIT
11. owlCarousel ABOUT slider, owlCarousel SERVICES slider
12. owlCarousel WORKS slider
13. countdown setup
14. contact form
15. newsletter form
16. menu desktop 2, menu desktop 3, menu desktop 4, menu mobile
17. menu desktop 3
18. menu desktop 4
19. YTPlayer
20. snow
21. styleswitch [for demonstration purposes only]
22. morphext
23. slabtext
*/


$(function() {
    "use strict";


    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(1200);
        $(".preloader-bg").delay(200).fadeOut(2200);

        // 2. elements.Timeout
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 300);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 300);
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 300);
        setTimeout(function() {
            $(".border-bottom").removeClass("bottom-position");
        }, 300);
        setTimeout(function() {
            $(".fade-position").delay(1000).css({
                display: "none"
            }).fadeIn(2200);
        }, 0);
        setTimeout(function() {
            $(".fade-position-2").delay(1200).css({
                display: "none"
            }).fadeIn(2200);
        }, 0);
        setTimeout(slabTextHeadlines, 2);
    });

    // 3. fullscreen
    $("#fullscreen").on("click", function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $(".fullscreen").toggleClass("icon-resize-enlarge icon-resize-shrink");
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            $(".fullscreen").toggleClass("icon-resize-shrink  icon-resize-enlarge");
        }
        return false;
    });

    // 4. page transitions
    $("#fire-home, #fire-home-mobile").on("click", function(e) {
        e.preventDefault();
        $(".current").removeClass("current").fadeOut(1000, function() {
            $("#home").fadeIn(1000).addClass("current");
        });
    });
    $("#fire-about, #fire-about-mobile").on("click", function(e) {
        e.preventDefault();
        $(".current").removeClass("current").fadeOut(1000, function() {
            $("#about").fadeIn(1000).addClass("current");
        });
    });
    $("#fire-services, #fire-services-mobile").on("click", function(e) {
        e.preventDefault();
        $(".current").removeClass("current").fadeOut(1000, function() {
            $("#services").fadeIn(1000).addClass("current");
        });
    });
    $("#fire-works, #fire-works-mobile").on("click", function(e) {
        e.preventDefault();
        $(".current").removeClass("current").fadeOut(1000, function() {
            $("#works").fadeIn(1000).addClass("current");
        });
    });
    $("#fire-contact, #fire-contact-mobile").on("click", function(e) {
        e.preventDefault();
        $(".current").removeClass("current").fadeOut(1000, function() {
            $("#contact").fadeIn(1000).addClass("current");
        });
    });
    $(".fire-closer").on("click", function(e) {
        e.preventDefault();
        $(".current").removeClass("current").fadeOut(1000, function() {
            $(".upper-page").fadeIn(1000).addClass("current");
        });
    });

    // 5. menu active state
    $("a.menu-state").on("click", function() {
        $("a.menu-state").removeClass("active");
        $(this).addClass("active");
    });

    // 6. intense IMG
    var elements = document.querySelectorAll(".template-image");
    Intense(elements);

    // 7. owlCarousel HOME slider
    $(".home-owl").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fade", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: true,
        autoPlay: 5400,
        stopOnHover: false
    });

    // 8. owlCarousel HERO slider SLIDE
    $(".hero-slider-slide").owlCarousel({
        autoPlay: true,
        navigation: true,
        pagination: false,
        transitionStyle: false,
        singleItem: true,
        items: 1,
        autoHeight: true,
        autoPlay: 5000,
        stopOnHover: false
    });

    // 9. owlCarousel HERO slider ZOOM
    $(".hero-slider-zoom").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: true,
        autoPlay: 5000,
        stopOnHover: false
    });

    // 10. owlCarousel HERO slider SPLIT
    $(".hero-slider-split").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: false,
        singleItem: false,
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        // itemsTablet: [600,2],
        itemsMobile: [680, 2],
        autoHeight: true,
        autoPlay: 5000,
        stopOnHover: false
    });

    // 11. owlCarousel ABOUT slider, owlCarousel SERVICES slider
    $(".about-owl, .services-owl").owlCarousel({
        autoPlay: false,
        navigation: true,
        pagination: true,
        transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: false,
        // autoPlay: 5000,
        stopOnHover: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // 12. owlCarousel WORKS slider
    $(".works-owl").owlCarousel({
        autoPlay: false,
        navigation: true,
        pagination: true,
        transitionStyle: false,
        singleItem: false,
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        // itemsTablet: [600,2],
        itemsMobile: [680, 1],
        autoHeight: false,
        // autoPlay: 5000,
        stopOnHover: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // 13. countdown setup start
    $("#countdown").countdown({
        date: "02 December 2017 12:00:00", // countdown target date settings
        format: "on"
    }, function() {});

    // 14. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });

    // 15. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });

    // 16. menu desktop 2, menu desktop 3, menu desktop 4, menu mobile
    $(".navigation-fire").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $("nav.mobile-nav").toggleClass("show");
        $(".fire-closer").addClass("hide-fire-closer");
    });
    $("nav.mobile-nav a, nav.mobile-nav-2 a").on("click", function(e) {
        var hash = $(this.hash);
        $("nav").removeClass("show");
        $(".navigation-fire, .navigation-fire-2").removeClass("open");
        e.preventDefault();
    });

    // 17. menu desktop 3
    $("#menu-mobile-btn").on("click", function(e) {
        e.preventDefault();
        $(".fire-closer").addClass("hide-fire-closer");
    });

    // 18. menu desktop 4
    $(".navigation-fire-2").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $("nav.mobile-nav-2").toggleClass("show");
    });

    // 19. YTPlayer
    $(".player").mb_YTPlayer();

    // 20. snow
    $("#snow").each(function() {
        snowBind();
    });

    $(document).on("ready", function() {
        // 21. styleswitch [for demonstration purposes only]
        $(".corner").on("click", function() {
            $("#customizer").toggleClass("s-open");
        });
        function swapStyleSheet(sheet) {
            document.getElementById("general-css").setAttribute("href", sheet);
        }
    });

    // 22. morphext
    $("#js-rotating").Morphext({
        animation: "pulse",
        separator: "|",
        speed: 4000,
        complete: function() {}
    });

    // 23. slabtext
    function slabTextHeadlines() {
        $(".introduction-8-quotation h1").slabText({
            "viewportBreakpoint": 300
        });
    };


});
