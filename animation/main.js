angular.module('animate',['ngAnimate'])
	.animation('.my-special-animation', function() {
	  return {
	    enter : function(element, done) {
	      jQuery(element).css({
	        color:'#000000'
	      });

	      //node the done method here as the 2nd param
	      jQuery(element).animate({
	        color:'#ffffff'
	      }, done);

	      return function(cancelled) {
	        /* this (optional) function is called when the animation is complete
	           or when the animation has been cancelled (which is when
	           another animation is started on the same element while the
	           current animation is still in progress). */
	        if(cancelled) {
	          jQuery(element).stop();
	        }
	      }
	    },

	    leave : function(element, done) { done(); },
	    move : function(element, done) { done(); },

	    beforeAddClass : function(element, className, done) { done(); },
	    addClass : function(element, className, done) { done(); },

	    beforeRemoveClass : function(element, className, done) { done(); },
	    removeClass : function(element, className, done) { done(); },

	    allowCancel : function(element, event, className) {}
	  };
	});