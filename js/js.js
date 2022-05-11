
function myFunction() {
    alert("welcome to my page !");
  }
  document.getElementById("j1").innerHTML =
"navigator.cookieEnabled is " + navigator.cookieEnabled;

document.getElementById("j2").innerHTML = "we hope you enjoy reading our page";

function displayDate() {
    document.getElementById("j3").innerHTML = Date();
  }
  function scrollWin() {
    window.scrollTo(0, 100000);
  }