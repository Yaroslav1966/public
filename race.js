
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

Car.prototype.moveRight = function () {
  this.x += 10;
  this.carElement.css({
    let: this.x,
    top: this.y
  });
};

var car1 = new Car(10, 20);
var car2 = new Car(200, 200);
