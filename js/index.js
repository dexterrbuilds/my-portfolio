var windowWidth = window.innerWidth; // 1366px

var horLength = document.querySelector(".element-wrapper").scrollWidth;
var distFromTop = document.querySelector(".horizontal-section").offsetTop;

var scrollDistance = distFromTop + horLength - windowWidth; //3074px

document.querySelector(".horizontal-section").style.height = horLength + "px"; //2640px

var scrollTo = window.pageYOffset;

window.onscroll = function () {
  var scrollTop = window.pageYOffset;

  if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
    document.querySelector(".element-wrapper").style.transform =
      "translateX(-" + (scrollTop - distFromTop) + "px)";
  }
};

//   if (
//    scrollTop >= secDistFromTop &&
//    scrollTop <= secScrollDistance + secondLength
//  ) {
//    document.querySelector(".second-wrapper").style.transform =
//     "translateX(-" + (scrollTop - 6280) + "px)";
//  }

$(window).on("load", function () {
  $(".section-loader").fadeOut(2500);
  $("header").fadeIn(2500);
  $("main").fadeIn(2500);
});

$(window).on("reload", function () {
  $(".section-loader").fadeOut(2500);
  $("header").fadeIn(2500);
  $("main").fadeIn(2500);
});

// end loader
function displayGreet() {
  let greet = document.querySelector(".greet");
  greet.style.display = "block";
}

function noGreet() {
  let greet = document.querySelector(".greet");
  greet.style.display = "none";
}

// LINKS HOVER

function reHover() {
  const link = document.querySelector(".link1");
  link.innerHTML = "Resume  &#8594;";
}

function resume() {
  const link = document.querySelector(".link1");
  link.innerHTML = "Resume &nearr;";
}

function twHover() {
  const link = document.querySelector(".link2");
  link.innerHTML = "Twitter &#8594;";
}

function twitter() {
  const link = document.querySelector(".link2");
  link.innerHTML = "Twitter &nearr;";
}

function gHover() {
  const link = document.querySelector(".link3");
  link.innerHTML = "GitHub &#8594;";
}

function github() {
  const link = document.querySelector(".link3");
  link.innerHTML = "GitHub &nearr;";
}

// DARK MODE
function myFunction() {
  var element = document.documentElement;
  element.classList.toggle("dark-mode");

  var dark = document.body;
  dark.classList.toggle("dark-mode");

  var navLink = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].classList.toggle("dark-mode-link");
  }

  var menu = document.querySelector(".hamburger");
  menu.classList.toggle("dark-mode-menu");

  var resume = document.querySelector(".resume");
  resume.classList.toggle("dark-mode-resume");

  var pfp = document.querySelector(".pfp-bg");
  pfp.classList.toggle("dark-mode-pfp");

  var greet = document.querySelector(".greet");
  greet.classList.toggle("dark-mode-greet");

  var scroll = document.querySelector(".scroll");
  scroll.classList.toggle("dark-mode-link");

  var links = document.querySelector(".link1");
  links.classList.toggle("dark-mode-link");

  var links = document.querySelector(".link2");
  links.classList.toggle("dark-mode-link");

  var links = document.querySelector(".link3");
  links.classList.toggle("dark-mode-link");

  var stanl = document.querySelector(".stan");
  stanl.classList.toggle("dark-mode-link");

  var ameenl = document.querySelector(".ameen");
  ameenl.classList.toggle("dark-mode-link");

  var links = document.getElementById("kcs1");
  links.classList.toggle("dark-mode-link");

  var links = document.getElementById("kcs2");
  links.classList.toggle("dark-mode-link");

  var links = document.getElementById("kcs3");
  links.classList.toggle("dark-mode-link");

  var links = document.getElementById("kcs4");
  links.classList.toggle("dark-mode-link");

  var links = document.getElementById("kcs5");
  links.classList.toggle("dark-mode-link");

  var name = document.getElementById("name");
  name.classList.toggle("dark-mode-border");

  var email = document.getElementById("email");
  email.classList.toggle("dark-mode-border");

  var comment = document.getElementById("comment");
  comment.classList.toggle("dark-mode-border");

  //  document
  //    .querySelector("input[type=text]")
  //   .style.setProperty.toggle("--c", "white");

  // document.querySelector("input[id=email]").style.setProperty("--c", "white");

  //  document
  //    .querySelector("textarea[id=comment]")
  //    .style.setProperty("--c", "white");

  var links = document.getElementById("email");
  links.classList.toggle("dark-mode-link");

  var links = document.getElementById("button-blue");
  links.classList.toggle("dark-mode-link");

  var twitterIcon = document.getElementById("t-icon");
  twitterIcon.classList.toggle("dark-mode-icon");

  var dribbleIcon = document.getElementById("d-icon");
  dribbleIcon.classList.toggle("dark-mode-icon");

  var behanceIcon = document.getElementById("b-icon");
  behanceIcon.classList.toggle("dark-mode-icon");

  var linkedinIcon = document.getElementById("l-icon");
  linkedinIcon.classList.toggle("dark-mode-icon");

  var dil = document.getElementsByClassName("dil");
  for (let i = 0; i < dil.length; i++) {
    dil[i].classList.toggle("dark-mode-icon");
  }

  var ftEl = document.querySelector("footer");
  ftEl.classList.toggle("dark-mode-ft");

  var ftImg = document.querySelector("ft-img");
  ftImg.classList.toggle("ft-img-dm");
}

// HEADER

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// kWARES
