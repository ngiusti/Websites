$(document).ready(function () {
    var delayMillis = 1000;

    $('.js-truckIcon').waypoint(function (direction) {
        $('.js-truckIcon').addClass('animated slideInLeft');
    }, {
            offset: '50%'
        });
    
    setTimeout(function () {
        $('.js--deal-pulse1').waypoint(function (direction) {
            $('.js--deal-pulse1').addClass('animated pulse');


        }, {
                offset: '50%'
        });
    }, 1 * delayMillis);
    setTimeout(function () {
        $('.js--deal-pulse2').waypoint(function (direction) {
            $('.js--deal-pulse2').addClass('animated pulse');


        }, {
                offset: '50%'
            });
    }, 2 * delayMillis);
    setTimeout(function () {
        $('.js--deal-pulse3').waypoint(function (direction) {
            $('.js--deal-pulse3').addClass('animated pulse');


        }, {
                offset: '50%'
            });
    }, 3 * delayMillis);

    $('.js--stock').waypoint(function (direction) {
        $('.js--stock').addClass('animated rubberBand');
    }, {
            offset: '50%'
        });
});

