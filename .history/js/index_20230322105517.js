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
  e.classList.add("hide_navbar");
}
