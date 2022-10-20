"use strict";

{
//variables
let list = document.querySelector(".main-nav__list");
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
}



// Make apear menu on scroll up and disappera on scroll down
window.addEventListener("scroll", function(event) {
  //1024 is a break point, add open ohide menu bar.
  if(window.innerWidth < 1024) {
    if (this.oldScroll > this.scrollY) {
      document.querySelector(".main-nav").style.top = "0px";
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

// WINDOW FEATURES
window.addEventListener("resize", Reset);

}
