
const Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.intervalId = null; // Interval variable
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

Car.prototype.moveRight = function (speed,) {
  this.x += speed = Math.floor(Math.random() * speed);
  this.carElement.css({
    left: this.x,
    top: this.y
  });
  if (this.x > 450) {
    clearInterval(id1) // Сделать только один clearInterval, что принимает id текущей машины
    clearInterval(id2)
  }
};

const car1 = new Car(10, 20);
const car2 = new Car(10, 150);


Car.prototype.move = () => {
  // По принципу cosnt id1 = setInterval
  // Создать интервал во внетреннюю переменную this.intervalId
}

const id1 = setInterval(() => {
  car1.moveRight(10)
}, 30);

const id2 = setInterval(() => {
  car2.moveRight(10)
}, 30);


