// Functions
const wordsList = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "апельсин",
  "банан",
];

const generateAnswerArray = (len) => {
  return new Array(len).fill("_");
};

const getRandomWord = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const askGuess = (answers) => {
  const guess = prompt(`Угадай букву в слове: ${answers.join(" ")}`).trim();

  if (guess.length !== 1) {
    alert("Введите только одну букву");
    return askGuess(answers);
  }

  return guess.toLowerCase();
};

const makeMove = (word, answers, remaining) => {
  const guess = askGuess(answers);

  for (index in word) {
    let letter = word[index];

    if (letter === guess) {
      answers[index] = letter;
      remaining--;
    }
  }

  !!remaining && makeMove(word, answers, remaining);
};

const gameInit = (wordsList) => {
  const word = getRandomWord(wordsList);
  const answers = generateAnswerArray(word.length);
  let remainingLetters = word.length;

  makeMove(word, answers, remainingLetters);

  const retry = confirm(
    `Победа! Слово было ${word}. Хотите попробовать еще раз?`
  );
  retry && gameInit(wordsList);
};

gameInit(wordsList);