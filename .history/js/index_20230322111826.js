function showShare() {
  let e = document.getElementById("share-list");
  if (e.style.visibility === "hidden") {
    e.style.visibility = "visible";
  } else {
    e.style.visibility = "hidden";
  }
}
let e = document.getElementById("navbar");
let e2 = document.getElementById("pseudo");
let headerOption = document.getElementsByClassName("header__option");

function showNavbar() {
  console.log(headerOptionAfter);
  if (e.classList.contains("hide_navbar")) {
    e.classList.remove("hide_navbar");
    e2.style.visibility = "visible";
  } else {
    e.classList.add("hide_navbar");
    e2.style.visibility = "hidden";
  }
}
function hideNav() {
  e.classList.add("hide_navbar");
  e2.style.visibility = "hidden";
}
