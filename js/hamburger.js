"use strict";

{
  let lineFirst = document.querySelectorAll(".main-nav__hamburger-line")[0];
  let lineSecond = document.querySelectorAll(".main-nav__hamburger-line")[1];
  let lineThird = document.querySelectorAll(".main-nav__hamburger-line")[2];
  let isOpen = false;
  
  function ChangeHamburger() {
    
    if(!isOpen) {
      SetLine(lineFirst, 4, 4, 46, 46);
      SetLine(lineSecond, 25, 25, 25, 25);
      SetLine(lineThird, 4, 46, 46, 4);
      isOpen = true;
    } else {
      SetLine(lineFirst, 4, 4, 46, 4);
      SetLine(lineSecond, 4, 25, 46, 25);
      SetLine(lineThird, 4, 46, 46, 46);
      isOpen = false;
    }

  }

  function SetLine(line ,x1, y1, x2, y2) {
    line.setAttributeNS(null, 'x1', x1.toString());
    line.setAttributeNS(null, 'y1', y1.toString());
    line.setAttributeNS(null, 'x2', x2.toString());
    line.setAttributeNS(null, 'y2', y2.toString());
  }

  function Reset() {
    isOpen = true;
    ChangeHamburger();
  }

  window.addEventListener("scroll", Reset);
  window.addEventListener("resize", Reset);
  document.querySelector(".main-nav__hamburger").addEventListener("click", ChangeHamburger);

}