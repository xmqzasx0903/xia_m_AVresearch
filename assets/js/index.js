$(document).ready(function () {
    let moonEle = $('#moon');
    let bodyEle = $('#body');

    moonEle.on('click', function () {
        let lightEle = $('.light');

        if (lightEle.length > 0) {
            let bgDarkEles = $('.bg-dark');
            let btnDarkEles = $('.btn-dark');
            let textWhiteEles = $('.text-white');

            bodyEle.removeClass('light').addClass('dark');
            bgDarkEles.each(function () {
                $(this).removeClass('bg-dark').addClass('bg-light');
            });
            btnDarkEles.each(function () {
                $(this).removeClass('btn-dark').addClass('btn-light');
            });
            textWhiteEles.each(function () {
                $(this).removeClass('text-white').addClass('text-black');
            })

        } else {
            let bgLightEles = $('.bg-light');
            let btnLightEles = $('.btn-light');
            let textBlackEles = $('.text-black');

            bodyEle.removeClass('dark').addClass('light');
            bgLightEles.each(function () {
                $(this).removeClass('bg-light').addClass('bg-dark');
            });
            btnLightEles.each(function () {
                $(this).removeClass('btn-light').addClass('btn-dark');
            });
            textBlackEles.each(function () {
                $(this).removeClass('text-black').addClass('text-white');
            })
        }
    });
});