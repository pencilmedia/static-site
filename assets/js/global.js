 /* ===================================================
  * global.js - Global Behaviors
  * =================================================== */

 // GLOBAL VARIABLES
 var global = {};

 global = {
     init: function() {
         global.initPlugins();
         global.smoothJump();
         global.linkBehaviors();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         $(function() {
             // Init FastClick Plugin
             FastClick.attach(document.body);
         }); 
     },
     openExternalLinks: function() {
         // EXTERNAL LINK - Open external links in new window
         ////////////////////////////////////////////////////
         $('a[href^=http]').on("click", function() {
             //Not this domain - open link in window
             if (!this.href.indexOf('screenchef.com') < 0) {
                 window.open(this.href);
                 return false;
             }
         });
     },
     smoothJump: function() {
         $('a[href*="#"]:not([href="#"], a.tab)').on("click", function() {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                 var target = $(this.hash);
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 if (target.length) {
                     $('html, body').animate({
                         scrollTop: target.offset().top
                     }, 750);
                     return false;
                 }
             }
         });
     },
     linkBehaviors: function() {
         // EXTERNAL LINK - Open external links in new window
         ////////////////////////////////////////////////////
         $('a[href^=http]').click( function() {
             //Not this domain - open link in window
             if (this.href.indexOf('pencilmedia.com') < 0) {
                 window.open(this.href);
                 return false;
             }
         });
         // Override above behavior and open internal link in a new window - Add the class .pop to the link
         if ( $('a.pop') ) {
             $('a.pop').click( function() {
                 window.open(this.href);
                 return false;
             });
         }
     }
 };

 $(global.init);