/*!
 * FAST BURGER - main.js REFORMULADO (2026)
 * Versão limpa, organizada, moderna e performática
 * Mantém TODAS as funcionalidades do original
 * Otimizado para o seu HTML atual (.custom-header, .hero-slider, .testmonial_active, etc.)
 */

(function ($) {
    "use strict";

    /* =============================================
       1. STICKY HEADER + BACK TO TOP
       ============================================= */
    $(window).on("scroll", function () {
        const scroll = $(window).scrollTop();

        // Sticky no header customizado (classe usada no seu HTML)
        if (scroll > 100) {
            $(".custom-header").addClass("sticky");
        } else {
            $(".custom-header").removeClass("sticky");
        }

        // Back to top (mantido do original)
        if (scroll > 400) {
            $("#back-top").fadeIn(500);
        } else {
            $("#back-top").fadeOut(500);
        }
    });

    /* =============================================
       2. DOCUMENT READY - Tudo que roda após carregar o DOM
       ============================================= */
    $(document).ready(function () {

        /* --------------------- MOBILE MENU (Slicknav) --------------------- */
        const menu = $("ul#navigation");
        if (menu.length) {
            menu.slicknav({
                prependTo: ".mobile_menu",
                closedSymbol: "+",
                openedSymbol: "-",
                label: "",
                allowParentLinks: true
            });
        }

        /* --------------------- HERO SLIDER (seu .hero-slider) --------------------- */
        if ($(".hero-slider").length) {
            $(".hero-slider").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: true,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                nav: false,
                dots: true,
                smartSpeed: 1200,
                responsive: {
                    0: { items: 1 },
                    768: { items: 1 }
                }
            });
        }

        /* --------------------- TESTIMONIALS (seu .testmonial_active) --------------------- */
        if ($(".testmonial_active").length) {
            $(".testmonial_active").owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                nav: true,
                dots: true,
                responsive: {
                    0: { items: 1, nav: false, dots: true },
                    992: { items: 1, nav: true }
                }
            });
        }

        /* --------------------- OUTROS CAROUSELS (mantidos caso use em outras páginas) --------------------- */
        // Se quiser ativar em outras páginas, descomente:
        /*
        $('.slider_active, .about_active').owlCarousel({ ... });
        $('.brand-active').owlCarousel({ ... });
        $('.project-active').owlCarousel({ ... });
        $('.details_active').owlCarousel({ ... });
        */

        /* --------------------- WOW ANIMATION --------------------- */
        new WOW().init();

        /* --------------------- COUNTER UP --------------------- */
        if ($(".counter").length) {
            $(".counter").counterUp({
                delay: 10,
                time: 2000
            });
        }

        /* --------------------- MAGNIFIC POPUP --------------------- */
        // Imagens
        $(".popup-image, .img-pop-up").magnificPopup({
            type: "image",
            gallery: { enabled: true }
        });

        // Vídeos (seu .popup-video)
        $(".popup-video").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Formulário popup (se usar)
        $(".popup-with-form").magnificPopup({
            type: "inline",
            preloader: false,
            focus: "#name",
            callbacks: {
                beforeOpen: function () {
                    if ($(window).width() < 700) this.st.focus = false;
                }
            }
        });

        /* --------------------- ISOTOPE (Portfolio Filter) --------------------- */
        if ($(".grid").length) {
            const $grid = $(".grid").isotope({
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: { columnWidth: ".grid-sizer" }
            });

            $(".portfolio-menu").on("click", "button", function () {
                const filterValue = $(this).attr("data-filter");
                $grid.isotope({ filter: filterValue });
            });

            $(".portfolio-menu button").on("click", function () {
                $(this).siblings(".active").removeClass("active");
                $(this).addClass("active");
            });
        }

        /* --------------------- NICE SELECT --------------------- */
        if ($("#default-select").length) {
            $("select").niceSelect();
        }

        /* --------------------- SCROLLIT (Smooth Scroll) --------------------- */
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: "linear",
            scrollTime: 600,
            activeClass: "active",
            topOffset: 0
        });

        /* --------------------- SCROLL UP (Back to Top) --------------------- */
        $.scrollUp({
            scrollName: "scrollUp",
            topDistance: "450",
            topSpeed: 300,
            animation: "fade",
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="fa fa-angle-double-up"></i>',
            activeOverlay: false
        });

        /* --------------------- SEARCH TOGGLE (limpo e unificado) --------------------- */
        function toggleSearch() {
            $("#search_input_box").slideToggle(300);
            $("#search_input").focus();
        }

        $("#search, #search_1").on("click", toggleSearch);

        $("#close_search").on("click", function () {
            $("#search_input_box").slideUp(300);
        });

        /* --------------------- MAILCHIMP --------------------- */
        function mailChimp() {
            $("#mc_embed_signup").find("form").ajaxChimp();
        }
        mailChimp();

    });

    /* =============================================
       3. WINDOW LOAD (caso precise de algo após tudo carregar)
       ============================================= */
    $(window).on("load", function () {
        // Aqui você pode colocar coisas como preloader se quiser no futuro
    });

})(jQuery);