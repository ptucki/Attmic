"use strict";
{
   let headerImg = document.querySelector(".header__img-container");
   let header = document.querySelector(".header");
   const initialColor = headerImg.style.backgroundColor;
   
   function ChangeColor(elem){
      let elementProperties = getCoords(elem);
      
     
      if( window.scrollY <= elementProperties.height){
         if(window.scrollY == 0) {
            
            elem.style.setProperty("--grid-cols", "1fr");
         } else {
            let fraction = Math.round((1 - (window.scrollY - elementProperties.top) * 1.6 / elementProperties.height) * 1000) / 1000;
            //elem.style.setProperty("--grid-cols", fraction + "fr");
            elem.style.gridTemplateColumns = "1fr " + fraction + "fr"; 
         }
         //console.log( Math.round((1 - window.scrollY / elementProperties.height) * 1000) / 1000);
      } else {
         elem.style.gridTemplateColumns = "1fr 0fr";
      }
   }
   
   //section     - HTML section to be divided;
   //stableSpace - is space where no modification appears
   function DivideTwoColumnesGrid(section, initFr, endFr) {
      let sectionProperties = getCoords(section);
      // console.log(sectionProperties.height);
      // console.log(window.scrollY);
      // console.log(window.innerHeight);

      //Section starts appearing on the browser view
      if(window.scrollY + window.innerHeight >= sectionProperties.top && window.scrollY < sectionProperties.top) {
         console.log("if");
         initFr = initFr + ((scrollY + window.innerHeight - sectionProperties.top) /sectionProperties.height) * (endFr - initFr);
         let ColumnFr = 1 - initFr;
         section.style.gridTemplateColumns = initFr + "fr " + ColumnFr + "fr";
      }
      //Section starts to disappear at the top of the window
      else if(window.scrollY >= sectionProperties.top && window.scrollY < sectionProperties.top + sectionProperties.height) {
         console.log("else if");
         initFr = endFr - (endFr - initFr) * ((window.scrollY - sectionProperties.top) / sectionProperties.height);
         let ColumnFr = 1 - initFr;
   
         section.style.gridTemplateColumns = initFr + "fr " + ColumnFr + "fr";
      }
      else{
         console.log("else");
         let ColumnFr = 1 - initFr;
         section.style.gridTemplateColumns = initFr + "fr " + ColumnFr + "fr";
      }

   }


   let sectionOnScroll = document.querySelectorAll(".section");

   window.addEventListener("scroll", function() {
      DivideTwoColumnesGrid(document.querySelector(".header"), 0.2, 0.8);
      DivideTwoColumnesGrid(sectionOnScroll[0], 1 ,0.4);
      // [...document.querySelectorAll(".section")].forEach(element => {
      //    DivideTwoColumnesGrid(element, 0.1, 0.9, 50);
      // })


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