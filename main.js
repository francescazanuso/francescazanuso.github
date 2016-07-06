$(function() {

  //MAIN NAV FUNCTION

var workLink = $(".nav-work");
var aboutLink = $(".nav-about");
var contactLink = $(".nav-contact");
var inner = $(".inner");
var homeLink = $(".white-logo-header");

function goToWork() {
  var workPage = -100;
  inner.css("left", workPage + "vw");

  aside.fadeOut(400);
  var classList = document.getElementById("aside").classList;
  aside.addClass("aside-close");

  pageNumber = 1;
};

workLink.click(goToWork);

function goToAbout() {
  var aboutPage = -200;
  inner.css("left", aboutPage + "vw");

  aside.fadeOut(400);
  var classList = document.getElementById("aside").classList;
  aside.addClass("aside-close");

  pageNumber = 2;
};

aboutLink.click(goToAbout);

function goToContact() {
  var contactPage = -300;
  inner.css("left", contactPage + "vw");

  aside.fadeOut(400);
  var classList = document.getElementById("aside").classList;
  aside.addClass("aside-close");

  pageNumber = 3;
};

contactLink.click(goToContact);

function goToHome() {
  var homePage = 0;
  inner.animate({
    left: homePage + "vw",
  }, 700);

  pageNumber = 0;
};

homeLink.click(goToHome);


//HORIZONTAL SCROLL

var rightButton = $("#cursorright");
var leftButton = $("#cursorleft");

var inner = $(".inner")

var pageNumber = 0;

function moveLeft() {
  if(pageNumber === 0) {
    return;
  }
  pageNumber = pageNumber - 1;
  var left = pageNumber * -100;
  inner.animate({
    left: left + "vw",
  }, 700);
};

leftButton.click(moveLeft);

function moveRight() {
  if(pageNumber === 3) {
    return;
  }
  pageNumber = pageNumber + 1;
  var right = pageNumber * -100;
  inner.animate({
    left: right + "vw",
  }, 700);
};

rightButton.click(moveRight);

// var workLink = $(".nav-work");
//
// function goToWork() {
//   var workValue = 100;
//   inner.css("left", workValue + "vw");
// };

//open the menu function

var buttonOpen = $("#openmenu");
var aside = $("#aside");

buttonOpen.click(function (){
  aside.fadeIn(400);
  var classList = document.getElementById("aside").classList;
  aside.removeClass("aside-close");
});

//close the menu function

var buttonClose = $("#closemenu");
var aside = $("#aside");

buttonClose.click(function (){
  aside.fadeOut(400);
  var classList = document.getElementById("aside").classList;
  aside.addClass("aside-close");
});


//PROJECT GRID HOVER




});

//var left = inner.css("left");
