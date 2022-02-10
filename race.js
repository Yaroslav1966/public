
const Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.intervalId = null;
  this.draw();
};

Car.prototype.draw = function () {
  const carHtml = '<img src="http://nostarch.com/images/car.png">';
  this.carElement = $(carHtml);
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
  });
  $("body").append(this.carElement);
};

Car.prototype.moveRight = function (speed) {
  this.x += speed = Math.floor(Math.random() * speed);
  this.carElement.css({
    left: this.x,
    top: this.y
  });
  if (this.x > 450) {
    clearInterval(this.intervalId)
  }
};

const car1 = new Car(10, 20);
const car2 = new Car(10, 100);
const car3 = new Car(10, 200)

Car.prototype.move = function () {
  this.intervalId = setInterval(() => {
    this.moveRight(10)
  }, 30);
};

car1.move();
car2.move();
car3.move();
