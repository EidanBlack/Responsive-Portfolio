function myFunction() {
    var x = document.getElementById("mytopnav");
    var z = document.getElementById("navegador");

    if (x.className === "menutopbar") {
      x.className += " responsive";
      z.className += " responsive";
    } else {
      x.className = "menutopbar";
      z.className = "topnav";
    }
  }