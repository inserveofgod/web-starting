'use strict'

/* variables */
const anim_ms = 250

$(function () {
    /* go top button */
    $('#gotop').on('click', function () {
        $('html').scrollTop(0)
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('#gotop').fadeIn().css('display', 'flex');
        } else {
            $('#gotop').fadeOut(anim_ms);
        }
    });

    /* slide effects for dropdowns */
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').stop(true, true).slideDown(anim_ms)
    })

    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').stop(true, true).slideUp(anim_ms)
    })

    /* swipers */
    const swiper_options = {
        direction: 'horizontal',
        loop: true,
        autoplay: (window.innerWidth > 768) ? true : false,
        spaceBetween: 10,
        slidesPerView: 1,
        speed: 1500,
        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    }

    const swiper_breakpoints = {
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 35
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    }

    /* inputmasks */
    $("input[type='tel']").inputmask("+9{1,4} 999 999 99 99")

    /* password toggler */
    $("input ~ .fa").on('click', function () {
        let password_hidden = $(this).siblings("input").attr("type") === 'password'
        if (password_hidden) {
            $(this).removeClass('fa-eye-slash').addClass('fa-eye')
            $(this).siblings("input").attr("type", "text");
        } else {
            $(this).removeClass('fa-eye').addClass('fa-eye-slash')
            $(this).siblings("input").attr("type", "password");
        }
    })
})

/* preloader */
$(window).on("load", () => {
    const Preload = new Promise((resolve, reject) => {
        const preloader = $('#preloader')
        if (preloader.length > 0) {
            preloader.fadeOut(anim_ms)
            resolve('ok')
        } else {
            reject('Preloader not found!')
        }
    })

    Preload.then(value => {
        if (value == 'ok') {
            $('html').css('overflow', 'auto')
        }
    }).catch(reason => {
        alert("Error: " + reason.toString())
    })
})
