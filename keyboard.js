let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

const circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  if (fillCircle) {
    ctx.fill()
  } else {
    ctx.stroke()
  }
}

const Ball = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.speed = 5;
  this.size = 10;

}


Ball.prototype.move = function () {
  this.x += this.xSpeed * this.speed;
  this.y += this.ySpeed * this.speed;

  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
}

Ball.prototype.draw = function () {
  circle(this.x, this.y, this.size, true);
}



Ball.prototype.setDirection = function (direction) {

  if (direction === "up") {
    this.xSpeed = 0;
    this.ySpeed = -1;
  } else if (direction === "down") {
    this.xSpeed = 0;
    this.ySpeed = 1;
  } else if (direction === "left") {
    this.xSpeed = -1;
    this.ySpeed = 0;
  } else if (direction === "right") {
    this.xSpeed = 1;
    this.ySpeed = 0;
  } else if (direction === "stop") {
    this.xSpeed = 0;
    this.ySpeed = 0;
  } else if (direction === "slow") {
    this.speed--;
  } else if (direction === "fast") {
    this.speed++;
  } else if (direction === "big") {
    this.size++;
  } else if (direction === "small") {
    this.size--;
  }
};

let ball = new Ball();

let keyAction = {
  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  90: "fast",
  88: "slow",
  67: "big",
  86: "small"

}


$("body").keydown(function (event) {
  let direction = keyAction[event.keyCode];

  ball.setDirection(direction);

  console.log(event.keyCode)
})

setInterval(function () {
  ctx.clearRect(0, 0, width, height)
  ball.draw();
  ball.move();
  ctx.strokeRect(0, 0, width, height)
}, 30);
