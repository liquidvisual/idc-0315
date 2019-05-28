/*
    MAIN SCRIPTS - Last updated: 23-01-19
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// READY
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar

    // Flatpickr - NEW 2019
    $('.datepicker, .ui-datepicker').flatpickr({
            format: "d-m-Y", // 2018-12-18
            altFormat: "d-m-Y", // 06 Dec 2018 etc
            altInput: true,
            allowInput: true
        }
    );

    // https://github.com/flatpickr/flatpickr/issues/892
    const datePickers = document.querySelectorAll('.datepicker, .ui-datepicker');

    datePickers.forEach(function(target) {
        target.onkeypress = function() {
            return false;
        }
    })

});

$(window).load(function() {
    NProgress.done();
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================