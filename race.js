
var Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.draw();
};

Car.prototype.draw = function () {
  var carHtml = '<img src="http://nostarch.com/images/car.png">';
  this.carElement = $(carHtml);
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
  });
  $("body").append(this.carElement);
};

Car.prototype.moveRight = function (speed,) {
  this.x += speed = Math.floor(Math.random() * speed);
  this.carElement.css({
    left: this.x,
    top: this.y
  });
  if (this.x === 400) {
    clearInterval(id1)
    clearInterval(id2)
  }
};

var car1 = new Car(10, 20);
var car2 = new Car(10, 150);



var id1 = setInterval(() => {
  car1.moveRight(3)
}, 30);

var id2 = setInterval(() => {
  car2.moveRight(3)
}, 30);


