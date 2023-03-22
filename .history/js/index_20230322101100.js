function showShare() {
  let e = document.getElementById("share-list");
  if (e.style.visibility === "hidden") {
    e.style.visibility = "visible";
    e.style.transition: opacity 1s;()
  } else {
    e.style.visibility = "hidden";
  }
}
