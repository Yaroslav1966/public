var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/*var circle = function (x, y, radius, fillCirle) {
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

drawSnowman(150, 50)*/

let points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
let mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50],
[70, 90], [100, 90], [70, 120]];

let drawPoints = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let point = arr[i];
    x = point[0]
    y = point[1]
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y);
    point = arr[i + 1];
    x = point[0]
    y = point[1]
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
//drawPoints(mysteryPoints);
drawPoints(points);