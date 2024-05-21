// $.noConflict();
$(function() {
	"use strict";

    $(this).find('li').not('.is-active').has('ul').children('ul').addClass('collapse');
    $(this).find('li.is-active').has('ul').children('ul').addClass('collapse show');

    $(this).find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        $(this).parent('li').siblings().removeClass('is-active').find('ul').collapse('hide');
        $(this).parent('li').siblings().find('a').removeClass('active');

        $(this).parent('li').toggleClass('is-active').children('ul').collapse('toggle');
        $(this).parent('li').children('a').toggleClass('active');

        if ($toggle) {
            $(this).parent('li').siblings().removeClass('is-active').children('ul.in').collapse('hide');
            $(this).parent('li').children('a').removeClass('active');
        }
    });


});