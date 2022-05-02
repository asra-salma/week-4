function myLoadFunction() {
  var element = document.querySelector("#pageheading");
  element.firstChild.nodeValue = "New Heading";
  var element = document.getElementById("paragraph");
  element.firstChild.nodeValue = "New paragraph text";
}

document.addEventListener("DOMContentLoaded", myLoadFunction);
