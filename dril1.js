
// red circule
var d = document.getElementById("myCanvas1");
var ctx = d.getContext("2d");
ctx.beginPath();
ctx.arc(125,125,50,0,2*Math.PI);
ctx.strokeStyle="red";
ctx.stroke();
