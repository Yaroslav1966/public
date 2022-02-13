var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var circle = function (x, y, radius, fillCirle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCirle === true) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

const drawSnowman = function (x, y) {
  ctx.lineWidth = 4;
  circle(x + 100, y + 50, 30, false)
  circle(x + 100, y + 130, 50, false)
  circle(x + 90, y + 45, 5, true)
  circle(x + 110, y + 45, 5, true)
  circle(x + 100, y + 110, 5, true)
  circle(x + 100, y + 130, 5, true)
  circle(x + 100, y + 150, 5, true)
  ctx.fillStyle = "Orange"
  circle(x + 100, y + 55, 5, true)
}

drawSnowman(150, 50)
