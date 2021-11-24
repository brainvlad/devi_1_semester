$(document).ready(function () {
    // Добавление иконок разворота меню

    $("#first_step").click(function () {

        if ($('.sub-menu-vertical__list').css('display') == "none") {
            $(".sub-menu-vertical__list").show(300);
            const textFirst = $("#first_step").text();
            $("#first_step").text(textFirst + '⤵')
        } else {
            $(".sub-menu-vertical__list").hide(300);
            $(".sub-sub-menu-vertical__list").hide(300);
        }
    })
    $("#second_step").click(function () {
        if ($('.sub-sub-menu-vertical__list').css('display') == "none") {
            $(".sub-sub-menu-vertical__list").show(300);
            const secondStep = $("#second_step").text();
            $("#second_step").text(secondStep + '⤵')
        } else {
            $(".sub-sub-menu-vertical__list").hide(300);
        }
    })
});