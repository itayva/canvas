// triangle

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(30,220);
ctx.lineTo(220,220);
ctx.lineTo(30,30);
ctx.closePath()
ctx.fill();
ctx.stroke()
