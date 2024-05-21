jQuery(document).ready(function () {
    "use strict";

    /*------------Input Fileds Mask----------*/
    var today = new Date();
    var dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    var mm =
        today.getMonth() + 1 < 10
            ? `0${today.getMonth() + 1}`
            : today.getMonth() + 1;
    var yyyy = 1900 + today.getYear() - 18;
    var maxDate = `${dd}/${mm}/${yyyy}`;

    jQuery("#dob").inputmask("datetime", {
        clearIncomplete: true,
        inputFormat: "dd/mm/yyyy",
        max: maxDate,
    });

    jQuery(".calendar-date").inputmask("datetime", {
        clearIncomplete: true,
        inputFormat: "dd/mm/yyyy",
    });

    jQuery("#emp_id").inputmask("\\AQR99999");
    jQuery("#email").inputmask({ alias: "email" });

    /*------------ Calendar Date ----------*/
    $("#dob").datepicker({
        format: "dd/mm/yyyy",
        autoHide: true,
        endDate: maxDate,
    });

    $('[data-toggle="datepicker"]').datepicker({
        format: "dd/mm/yyyy",
        autoHide: true,
    });

    /*------------Active Link----------*/
    jQuery(".side-menu li a").each(function () {
        if (this.href === activeUrl) {
            jQuery(this)
                .parent()
                .parent()
                .parent()
                .find("> a")
                .addClass("active");
            jQuery(this).parent().closest("ul").addClass("show");
            jQuery(this).closest("li").addClass("is-active");
            jQuery(this).addClass("active");
        }
    });

    /*------------Tooltip------------*/
    jQuery("[data-bs-toggle=tooltip").tooltip();

    /*------------Popup Confirm------------*/
    jQuery(".btn-delete").on("click", function (e) {
        e.preventDefault();
        var dltFrm = $(this).closest("form");
        bootbox.confirm({
            centerVertical: true,
            message:
                "<h5 class='text-center'>Confirm to delete?</h5> <p class='text-center'>Do you really want to delete this record?</p>",
            buttons: {
                confirm: {
                    label: "Yes",
                    className: "btn-primary btn-sm px-3",
                },
                cancel: {
                    label: "Cancel",
                    className: "btn-outline-secondary btn-sm",
                },
            },
            callback: function (result) {
                if (result) {
                    $(dltFrm).submit();
                } else {
                    return true;
                }
            },
        });
    });

    /*------------ Back to top button ----------*/
    var btn = jQuery(".back-to-top");
    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop() > 200) {
            btn.addClass("activeBtn");
        } else {
            btn.removeClass("activeBtn");
        }
    });

    btn.on("click", function (e) {
        e.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
    });
});
