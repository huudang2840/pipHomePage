AOS.init();
function showShare() {
  let e = document.getElementById("share-list");
  if (e.classList.contains("hide-list-share")) {
    e.classList.remove("hide-list-share");
  } else {
    e.classList.remove("hide-list-share");
  }
}
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

function showSearch() {
  if (search.style.visibility === "hidden") {
    search.style.visibility = "visible";
  } else {
    search.style.visibility = "hidden";
  }
}
