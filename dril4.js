/*face*/
var p = document.getElementById("myCanvas4");
var ctx = p.getContext("2d");

ctx.beginPath();
ctx.moveTo(170,170);
ctx.lineTo(230,170);
ctx.stroke();


ctx.beginPath();
ctx.arc(200,200,100,0,2*Math.PI, );/*head*/
ctx.stroke();

ctx.beginPath();
ctx.arc(170,170,10,0,2*Math.PI, );/*left eye*/
ctx.stroke();

ctx.beginPath();
ctx.arc(230,170,10,0,2*Math.PI, );/*right eye*/
ctx.stroke();

ctx.beginPath();
ctx.arc(200,200,80,0,Math.PI, );/*iner circule*/
ctx.stroke();

