// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require tether
//= require bootstrap-datepicker/core
//= require bootstrap-sprockets
//= require moment
//= require daterangepicker
//=	require mousetrap/mousetrap.min.js

//Window on Load Function
$(window).load(function() {
    initMenuToggle();
    initKeyboardShortcuts();
});

//initMenu and init the on click listener 
function initMenuToggle() {
	$('[data-tooltip-type="alwaysOn"]').tooltip('enable');
    $("#menuToggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $('.menuToggleIcon').toggleClass("fa-flip-horizontal");
        if ($('#wrapper').hasClass('toggled')) {
            initToolTips(true)
        } else {
            initToolTips(false)
        }
        $('.navHidden').toggle();
    });
};

//Tooltip logic to disable based on menu position
function initToolTips(boolean) {
	$sideMenuTooltips = $('[data-tooltip-type="sideMenu"]')
	$alwaysOnTooltips = $('[data-tooltip-type="alwaysOn"]')
    if (boolean) {
        $sideMenuTooltips.tooltip('enable');
    } else {
        $sideMenuTooltips.tooltip('disable');
    }
}

function initKeyboardShortcuts(){
	Mousetrap.bind('[', toggleSidebar);
	function toggleSidebar() {
		$('#menuToggle').click();
	}
}