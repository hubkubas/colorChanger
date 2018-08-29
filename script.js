
var tlo = document.getElementById("box");

var colorChanger = {

  reset: function() {
    if ((tlo.classList.contains("white")) || (tlo.classList.contains("blue")) || (tlo.classList.contains("purple"))){
      tlo.classList.remove("blue") || tlo.classList.remove("purple") || tlo.classList.remove("white");
      console.log("No color");
    } else {
      console.log("brak koloru");
    }
  },

  white: function() {
    tlo.classList.add("white");
    console.log("white");
  },
  purple: function() {
    tlo.classList.add("purple");
    console.log("purple");
  },
  blue: function() {
    tlo.classList.add("blue");
    console.log("blue");
  }
};
