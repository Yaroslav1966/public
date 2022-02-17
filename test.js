const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "апельсин",
  "банан"];

var words = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < words.length; i++) {
  answerArray[i] = "-";
}

var remainingLetters = words.length;

var correctLet;
const correct = (words, guess, answerArray) => {
  for (var i = 0; i < words.length; i++) {
    if (guess !== words[i]) {
      correctLet = false;
    } else if (guess === words[i]) {
      correctLet = true;
      answerArray[i] = guess;
      remainingLetters--;
    }
  }

}
var count = 0;
const lineToMove = (arr) => {
  x = arr[count][0];
  y = arr[count][1];
  x1 = arr[count][2];
  y1 = arr[count][3];
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(50, 50, 15, 0, Math.PI * 2)
  ctx.moveTo(x, y)
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

const arrGallows =
  [[50, 65, 50, 110],
  [50, 80, 80, 60],
  [50, 80, 20, 60],
  [50, 110, 20, 160],
  [50, 110, 80, 160],
  [100, 10, 100, 160],
  [100, 10, 40, 10],
  [70, 10, 100, 40],
  [50, 10, 50, 35]]

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  var guess = prompt("Угадайте букву или нажмите Отмена для выхода");
  guess = guess.toLowerCase();

  correct(words, guess, answerArray);
  console.log(correctLet)
  if (guess === null) {
    break;
  } if (guess.length > 1) {
    alert(" Введите только одну букву");
  } if (correctLet === false) {
    lineToMove(arrGallows);
    count += 1;
    alert("Осталось " + remainingLetters);
  }
}
alert("Отлично! Было слово " + '\"' + words + '\"');