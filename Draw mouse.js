var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = function (x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();
};

$("#canvas").mousemove(function (event) {
  x = event.pageX;
  y = event.pageY;
  //ctx.lineWidth = 4;
  ctx.fillStyle = "Red";
  circle(x, y, 2);
});
