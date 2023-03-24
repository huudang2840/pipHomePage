AOS.init();

let share = document.getElementById("share-list");
let e = document.getElementById("navbar");
let e2 = document.getElementById("pseudo");
let p2 = document.getElementById("pseudo2");
let showMenu = document.getElementById("show-menu");
let hideMenu = document.getElementById("hide-menu");
let opMenu = document.getElementById("op-menu");
let search = document.getElementById("search");
let header = document.getElementById("header");

function showShare() {
  search.classList.add("hide-search");

  if (share.classList.contains("hide-list-share")) {
    share.classList.remove("hide-list-share");
    p2.style.visibility = "visible";
  } else {
    share.classList.add("hide-list-share");
    p2.style.visibility = "hidden";
  }
}
function showNavbar() {
  search.classList.add("hide-search");
  share.classList.add("hide-list-share");
  if (e.classList.contains("hide_navbar")) {
    e.classList.remove("hide_navbar");
    e2.style.visibility = "visible";
    showMenu.style.display = "none";
    hideMenu.style.display = "block";
    opMenu.classList.add("option__menu__hide");
  } else {
    e.classList.add("hide_navbar");
    e2.style.visibility = "hidden";
    showMenu.style.display = "block";
    hideMenu.style.display = "none";
    opMenu.classList.remove("option__menu__hide");
  }
}
function hideNav() {
  showMenu.style.display = "block";
  hideMenu.style.display = "none";
  e.classList.add("hide_navbar");
  e2.style.visibility = "hidden";
}

function hideOption() {
  e.classList.add("hide_navbar");
  e2.style.visibility = "hidden";
  search.classList.add("hide-search");
  share.classList.add("hide-list-share");
  p2.style.visibility = "hidden";
}

function showSearch() {
  share.classList.add("hide-list-share");
  if (search.classList.contains("hide-search")) {
    search.classList.remove("hide-search");
    p2.style.visibility = "visible";
  } else {
    search.classList.add("hide-search");
    p2.style.visibility = "hidden";
  }
}

function scrolled() {
  let h = window.scrollY;
  if (h >= 300) {
    header.style.backgroundColor = "#1c1c1cc1";
  } else {
    header.style.backgroundColor = "transparent";
  }
}

window.onscroll = scrolled;
