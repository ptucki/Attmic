"use strict";
{   
   //section     - HTML section to be divided;
   //stableSpace - is space where no modification appears
   function DivideTwoColumnesGrid(section, initFr, endFr, space) {
      let sectionProperties = getCoords(section);

      let windowTop = window.scrollY;
      let windowBottom = windowTop + window.innerHeight;
      let sectionTop = sectionProperties.top;
      let sectionBottom = sectionProperties.top + sectionProperties.height;

      let windowSpace = (window.innerHeight) * space;

      let windowFocusTop = windowTop + windowSpace;
      let windowFocusBottom = windowBottom - windowSpace;  

      // Section starts to appear on the window view.
      if (sectionTop < windowBottom && sectionTop >= windowFocusBottom) {
         initFr = initFr + (endFr - initFr) * ((windowBottom - sectionTop) / windowSpace);
         let supplementFr = 1 - initFr;
         section.style.gridTemplateColumns = initFr + "fr " + supplementFr + "fr";
         //zmiana grida
      }
      // Section starts to appear on the no-chamge range.
      else if (sectionTop <= windowFocusBottom && sectionBottom >= windowFocusTop) {
         let supplementFr = 1 - endFr;
         section.style.gridTemplateColumns = endFr + "fr " + supplementFr + "fr";
      }
      // Section starts leaving the no-chamge range.
      else if (sectionBottom < windowFocusTop && sectionBottom >= windowTop) {
         initFr = initFr + (endFr - initFr) *((sectionBottom - windowTop) / windowSpace);
         let supplementFr = 1 - initFr;
         section.style.gridTemplateColumns = initFr + "fr " + supplementFr + "fr";
      }
      // Section does not appear on the window view.
      else {
         let supplementFr = 1 - initFr;
         section.style.gridTemplateColumns = initFr + "fr " + supplementFr + "fr";
      } 
   }

   let sectionOnScroll = document.querySelectorAll(".section");

   window.addEventListener("scroll", function() {

      if(window.innerWidth >= 1024) {
         DivideTwoColumnesGrid(sectionOnScroll[0], 0.7, 0.9, 0.8);
         DivideTwoColumnesGrid(sectionOnScroll[1], 0.4 ,0.5, 0.8);
         DivideTwoColumnesGrid(sectionOnScroll[2], 0 ,1, 0.3);
         // [...document.querySelectorAll(".section")].forEach(element => {
         //    DivideTwoColumnesGrid(element, 0.1, 0.9, 50);
         // })
      }
   }, false);

   function getCoords(elem) { // crossbrowser version
       var box = elem.getBoundingClientRect();

       var body = document.body;
       var docEl = document.documentElement;

       var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
       var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

       var clientTop = docEl.clientTop || body.clientTop || 0;
       var clientLeft = docEl.clientLeft || body.clientLeft || 0;

       var top  = box.top +  scrollTop - clientTop;
       var left = box.left + scrollLeft - clientLeft;

       return { top: Math.round(top), left: Math.round(left), height: box.height };
   }
}