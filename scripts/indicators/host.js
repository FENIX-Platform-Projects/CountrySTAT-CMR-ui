/*global define*/
define([
    'jquery',
    'fx-menu/start',
    'host/config',
    'progressbar'
], function ($, TopMenu, C, ProgressBar) {

    'use strict';

    var s = {
        PERCENTAGE_ONE : '#percentage-one',
        PERCENTAGE_TWO : '#percentage-two'
    };

    function Host() {
    }

    Host.prototype.initFenixComponent = function () {

        this.initPageStructure();

        this.topMenu = new TopMenu({
            url: C.TOP_MENU,
            active: 'home',
            container: '#sidebar-wrapper',
            template: 'fx-menu/templates/side.html'
        });

    };

    Host.prototype.initPageStructure = function () {

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

/*
        this.initPercentageAnimations();
*/

    };

    return Host;

});