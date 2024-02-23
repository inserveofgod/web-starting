'use strict'

/* variables */
const anim_ms = 250

$(function () {
    /* go top button */
    $('#gotop').hide(0).on('click', function () {
        $('html').scrollTop(0)
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('#gotop').fadeIn(anim_ms)
        } else {
            $('#gotop').fadeOut(anim_ms)
        }
    })

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
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 1500,
    }

    const swiper_breakpoints_5 = {
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 32
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 32
            }
        }
    }

    const swiper_breakpoints_4 = {
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 32
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 32
            },
        }
    }

    const swiper_breakpoints_3 = {
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 32
            },
        }
    }

    const headerSwiper = {
        ...swiper_options,

        pagination: {
            el: '#headerSwiperPagination',
            clickable: true,
        },
    }

    new Swiper('#headerSwiper', headerSwiper)

    /* inputmasks */
    $("input[type='tel']").inputmask("+9{1,4} 999 999 99 99")

    /* password toggler */
    $("input ~ .fa").on('click', function () {
        let password_hidden = $(this).siblings("input").attr("type") === 'password'
        if (password_hidden) {
            $(this).removeClass('fa-eye-slash').addClass('fa-eye')
            $(this).siblings("input").attr("type", "text")
        } else {
            $(this).removeClass('fa-eye').addClass('fa-eye-slash')
            $(this).siblings("input").attr("type", "password")
        }
    })

    /* bs5 tooltip */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /* increase decrease buttons */
    $('.btn-plus').on('click', function () {
        const input = $(this).data('target-input')
        const input_max = parseInt($(input).attr('max'))
        let input_val = parseInt($(input).val())

        // if increased data is greater than max attribute
        if ((input_val + 1) > input_max) {
            $(this).val(input_max)
        } else {
            // increase value
            $(input).val(input_val + 1)
        }
    })

    $('.btn-minus').on('click', function () {
        const input = $(this).data('target-input')
        const input_min = parseInt($(input).attr('min'))
        let input_val = parseInt($(input).val())

        // if decreased data is less than min attribute
        if ((input_val - 1) < input_min) {
            $(this).val(input_min)
        } else {
            // decrease value
            $(input).val(input_val - 1)
        }
    })

    /* like button */
    $('.btn-like').on('click', function () {
        const heartElement = $(this).find('.fa')
        if (heartElement.hasClass('fa-heart-o')) {
            heartElement.addClass('fa-heart').removeClass('fa-heart-o')
        } else {
            heartElement.removeClass('fa-heart').addClass('fa-heart-o')
        }
    })

    /* sorting buttons */
    const sorting_classes = "row-cols-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2"

    $('#sixFold').on('change', function () {
        $('#productsRow').removeClass(sorting_classes)

        if ($(this).is(':checked')) {
            $('#productsRow').addClass('row-cols-6').find('.card-footer').css('display', 'none')
        }
    })

    $('#fourFold').on('change', function () {
        $('#productsRow').removeClass(sorting_classes)

        if ($(this).is(':checked')) {
            $('#productsRow').addClass(sorting_classes).find('.card-footer').css('display', 'block')
        }
    })

    $('#threeFold').on('change', function () {
        $('#productsRow').removeClass(sorting_classes)

        if ($(this).is(':checked')) {
            $('#productsRow').addClass('row-cols-md-3 row-cols-sm-2').find('.card-footer').css('display', 'block')
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
