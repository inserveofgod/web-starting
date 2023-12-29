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
