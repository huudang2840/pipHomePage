AOS.init();
function showShare() {
  if (share.classList.contains("hide-list-share")) {
    share.classList.remove("hide-list-share");
  } else {
    share.classList.add("hide-list-share");
  }
}
let share = document.getElementById("share-list");
let e = document.getElementById("navbar");
let e2 = document.getElementById("pseudo");
let showMenu = document.getElementById("show-menu");
let hideMenu = document.getElementById("hide-menu");
let opMenu = document.getElementById("op-menu");
let search = document.getElementById("search");

function showNavbar() {
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
  e.classList.add("hide_navbar");
  e2.style.visibility = "hidden";
}

function hideOption() {
  e.classList.add("hide_navbar");
  e2.style.visibility = "hidden";
  earch.classList.add("hide-search");
}

function showSearch() {
  if (search.classList.contains("hide-search")) {
    search.classList.remove("hide-search");
  } else {
    search.classList.add("hide-search");
  }
}
