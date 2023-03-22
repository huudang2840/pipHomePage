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
  $(document).ready(function () {
    if ($("li.item101").hasClass("active")) $("#main").addClass("woodwork");
  });
  if (e.hasClas)
    if (e.has.visibility === "hidden") {
      e.classList.remove("hide_navbar");
      e.style.visibility = "visible";
    } else {
      e.classList.add("hide_navbar");
      e.style.visibility = "hidden";
    }
}
