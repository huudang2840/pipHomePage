function showShare() {
  let e = document.getElementById("share-list");
  if (e.style.visibility === "hidden") {
    e.style.visibility = "visible";
  } else {
    e.style.visibility = "hidden";
  }
}

function showNavbar() {
  let e = document.getElementById("navbar");
  let e2 = document.getElementById("pseduor");
  if (e.classList.contains("hide_navbar")) {
    e.classList.remove("hide_navbar");
    e.style.visibility = "visible";
  } else {
    e.classList.add("hide_navbar");
  }
}
function hideNav() {
  let e = document.getElementById("navbar");
  e.classList.add("hide_navbar");
}
