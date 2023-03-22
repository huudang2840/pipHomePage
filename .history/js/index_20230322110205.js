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
    console.log("ok");
  } else {
    console.log("ok");
  }
  //   if (e.has.visibility === "hidden") {
  //     e.classList.remove("hide_navbar");
  //     e.style.visibility = "visible";
  //   } else {
  //     e.classList.add("hide_navbar");
  //     e.style.visibility = "hidden";
  //   }
}
