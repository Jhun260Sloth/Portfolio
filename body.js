function myFunction() {
  var x = document.getElementById("Mytopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}