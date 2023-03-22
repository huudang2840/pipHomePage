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
  if (e.classList.contains("hide_navbar")) {
    e.classList.remove("hide_navbar");
  } else {
    e.classList.add("hide_navbar");
  }
}
function hideNav()
