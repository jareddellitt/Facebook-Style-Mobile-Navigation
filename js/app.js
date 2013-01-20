(function ($, global) {
    'use strict';

    var $doc = $(global.document),
        $body = $('body'),
        $header = $('#header'),
        $main = $('#main'),
        $nav = $('#nav'),
        visible = false;

    function moveNav() {
        $nav.prependTo($body).addClass('visible');
    }

    // function open() {
    //     $main.addClass('animate');
    //     $header.addClass('animate');
    //     $body.addClass('nav-showing');
    //     $body.addClass('no-scrolling');
    //     $nav.addClass('scroll');

    //     visible = true;        
    // }

    // function close() {
    //     $main.removeClass('animate');
    //     $header.removeClass('animate');
    //     $body.removeClass('nav-showing');
    //     $body.removeClass('no-scrolling');
    //     $nav.removeClass('scroll');        
        
    //     visible = false;

    //     if (!visible) {
    //         $nav[0].scrollTop = 0;
    //     }
    // }

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function doneMoving(e) {
        console.log('got here');

        $body.toggleClass('no-scrolling');
        $nav.toggleClass('scroll');

        visible = !visible;

        if (!visible) {
            $nav[0].scrollTop = 0;
        }
    }

    function toggle(e) {
        preventDefault(e);

        $main.toggleClass('animate');
        $header.toggleClass('animate');
        $body.toggleClass('nav-showing');
    }

    function init() {
        $doc.on('.nav-showing #main', Modernizr.touch ? 'touchstart' : 'mousedown', preventDefault);
        
        $main.on('webkitTransitionEnd transitionend oTransitionEnd', doneMoving);

        $body.one(Modernizr.touch ? 'touchstart' : 'mousedown', moveNav);

        $('#activator').on(Modernizr.touch ? 'touchend' : 'click', toggle);

        global.scrollTo('1px');
    }

    global.app = {
        slider: {
            init: init
        }
    };

}($, this));