var red = "#f44336";
var green = "#4CAF50";
var blue = "#008CBA";
var grey = "#646869";
var black = "#262828";

function Change(base) {
//    alert("Oh No! Le BouTon Red!!!");
    document.body.style.backgroundColor = base;
}
// document.getElementById("p2").style.color = "blue";
// document.body.style.backgroundColor = "red";
function UserChange() {
  var userIN = SolIN.value;

  if (userIN == "red" || userIN == "Red") {
    document.body.style.backgroundColor = red;
  }
  if (userIN == "green" || userIN == "Green") {
    document.body.style.backgroundColor = green;
  }
  if (userIN == "blue" || userIN == "Blue") {
    document.body.style.backgroundColor = blue;
  }
  if (userIN == "grey" || userIN == "Grey") {
    document.body.style.backgroundColor = grey;
  }
  if (userIN == "black" || userIN == "Black") {
    document.body.style.backgroundColor = black;
  }

  //document.body.style.backgroundColor = userIN;
}
