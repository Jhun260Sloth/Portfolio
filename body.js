
function myFunction() {
  var x = document.getElementById("Mytopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


 var opacity = 0;
        var intervalID = 0;
        window.onload = fadeIn;
  
        function fadeIn() {
            setInterval(show, 80);
            facts();

        }
  
        function show() {
            var body = document.getElementById("body");
            opacity = Number(window.getComputedStyle(body)
                             .getPropertyValue("opacity"));

            if (opacity < 1) {
                opacity = opacity + 0.1;
                body.style.opacity = opacity
            } else {
                clearInterval(intervalID);
            }
        }




 facts = () => {
  fetch("https://some-random-api.ml/facts/cat")
  .then(res => res.json())
  .then(result => {
    console.log(result)
    document.getElementById("thecyfacts").innerHTML = result.fact

    //For Image Stuff like waifu js
    let thecyfacts = document.getElementById("thecyfacts");
  })
  .catch(err => console.error(err));
}
