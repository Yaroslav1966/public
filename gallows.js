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

while (remainingLetters != 0) {
  alert(answerArray.join(" "));
  var guess = prompt("Угадайте букву или нажмите Отмена для выхода");
  guess = guess.toLowerCase();

  if (guess === null) {
    break;
  } if (guess.length !== 1) {
    alert(" Введите только одну букву");

  } else {
    for (var j = 0; j < words.length; j++) {
      if (words[j] === guess && answerArray[j] === "-") {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
    alert("Осталось " + remainingLetters);
  }
}
alert("Отлично! Было слово " + '\"' + words + '\"');