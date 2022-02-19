const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


var wordsList = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "апельсин",
  "банан"];

const selectWord = (wordList) => {
  return wordList[Math.floor(Math.random() * wordList.length)];
}
var word = selectWord(wordsList);

const setupArray = (anyLength) => {
  return new Array(anyLength).fill("_");
}

const getGuess = () => {
  return prompt("Угадайте букву или нажмите Отмена для выхода");
}

var answerArray = setupArray(word.length);
var remainingLetters = word.length;
var outMessege = {
  get: "Введите только одну букву",
  remainder: "Осталось ",
  final: "Отлично! Было слово "
};

const updateGameState = (word, guess, answerArray, callBack) => {
  var valid = false;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === "_") {
      valid = true;
      answerArray[j] = guess;
      remainingLetters--;
    }
  } if (valid === false) {
    callBack();
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
  [50, 10, 50, 35]];

const drawMan = () => {
  lineToMove(arrGallows);
  count += 1;
}

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  var guess = getGuess().toLowerCase();

  if (guess === null) {
    break;
  } else if (guess.length > 1) {
    alert(outMessege.get);
  } else {
    updateGameState(word, guess, answerArray, drawMan);
    alert(outMessege.remainder + remainingLetters);
  }
}

alert(outMessege.final + '\"' + word + '\"');