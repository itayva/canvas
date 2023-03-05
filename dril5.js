
// line circule

var m = document.getElementById("myCanvas5");
var ctx = m.getContext("2d");
let x= 12;
let y= 12;
let z = 10;
let spacing= 5;

for( let i = 0 ; i < 6; i++){
    ctx.beginPath();
    ctx.arc(x, y, z, 0, 2 * Math.PI);
    x += z * 4 + spacing;
    y += z + 30 + spacing;
    
    var color = 'rgb(' + (255 - i*40) + ', ' + (255 - i*40) + ', ' + (255 - i*40) + ')';
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
    }
