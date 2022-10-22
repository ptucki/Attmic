"use strict";

{
//variables
let list = document.querySelector(".main-nav__list");
let menu = document.querySelector(".main-nav");
const init_style = list.style;

// Function to set properties for opening and closing menu with humburger.
function OpenHideMainNav() {
  let listDisplay = list.style.display;

  if (window.innerWidth < 640) { //window.innerWidth < 400
    if (list.style.display !== "block") {
      list.style.display = "block";
    }
    else {
      list.style.display = "none";
      
    }
  }
  else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
    if (list.style.left !== "0px") {
      list.style.left = "0px";
    }
    else {
      list.style.left = "-100px";
      Reset();
    }
  }
  else {
    alert("Something wrong")
  }
}

// Resets style
function Reset() {
  list.style.display = "none";
  list.style.display = "block";
  
  list.style = init_style;
  if(window.innerWidth > 1024) {
    document.querySelector(".main-nav").style.top = "0px";
  }
  else if (document.querySelector(".main-nav").style.top === "0px") {
    //do nothing
  }
  else if (window.scrollY == 0) {
    //do nothing
  }
  else {
    document.querySelector(".main-nav").style.top = "-50px";
  }
  
  ResetHamburger();
}


  let lines = document.querySelectorAll(".main-nav__hamburger-line");
  let isOpen = false;
  
function ChangeHamburger() {
  
  if(!isOpen) {
    SetLine(lines[0], 4, 4, 46, 46);
    SetLine(lines[1], 25, 25, 25, 25);
    SetLine(lines[2], 4, 46, 46, 4);
    isOpen = true;
  } else {
    SetLine(lines[0], 4, 4, 46, 4);
    SetLine(lines[1], 4, 25, 46, 25);
    SetLine(lines[2], 4, 46, 46, 46);
    isOpen = false;
  }

}

function SetLine(line ,x1, y1, x2, y2) {
  line.setAttributeNS(null, 'x1', x1.toString());
  line.setAttributeNS(null, 'y1', y1.toString());
  line.setAttributeNS(null, 'x2', x2.toString());
  line.setAttributeNS(null, 'y2', y2.toString());
}

function ResetHamburger() {
  isOpen = true;
  ChangeHamburger();
}

window.addEventListener("scroll", ResetHamburger);
window.addEventListener("resize", ResetHamburger);
document.querySelector(".main-nav__hamburger").addEventListener("click", ChangeHamburger);

// Make apear menu on scroll up and disappera on scroll down
window.addEventListener("scroll", function(event) {
  //1024 is a break point, add open ohide menu bar.
  if(window.innerWidth < 1024) {
    if (this.oldScroll > this.scrollY) {
      document.querySelector(".main-nav").style.top = "0px";
      Reset();
    }
    if(this.oldScroll < this.scrollY) {
      document.querySelector(".main-nav").style.top = "-50px";
      Reset();
    }
  }
  else{
    // fix menu bar
    document.querySelector(".main-nav").style.top = "0px";
  }

  this.oldScroll = this.scrollY;
  });

//Add functionality to hamburger
document.querySelector(".main-nav__hamburger")
  .addEventListener("click", OpenHideMainNav, false);

{
  [...document.querySelectorAll(".menu-reset")].forEach(element => {
    element.addEventListener("click", function() {
      Reset();
      if(window.innerWidth < 1024 && window.scrollY != 0) {
          document.querySelector(".main-nav").style.top = "-50px";
      }
      }
    );
  });
  //document.querySelectorAll(".menu-reset").addEventListener("click", Reset);
}


// WINDOW FEATURES
window.addEventListener("resize", Reset);

}
