;
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['$'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('$'));
    } else {
        // Browser globals
        factory($);
    }
}(function($) {
    $.fn.check = function() {
	var checkType = $(this).attr('check-type');
    }
}));
