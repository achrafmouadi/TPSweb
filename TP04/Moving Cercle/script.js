var cercle = document.getElementById("cercle");
var square = document.getElementById("square");

var x, y;

square.onmousemove = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    cercle.style.bottom = y + "px";
    cercle.style.right = x + "px";

} 