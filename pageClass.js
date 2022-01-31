class GuessGame {
  wordsList;
  answers;
  word;
  guess;
  remaining;

  constructor(wordsList) {
    this.wordsList = wordsList;
    this.wordsCount = wordsList.length;
  }

  #setAnswerArray = (len) => {
    this.answers = new Array(len).fill("_");
  };

  #getRandomWord = () => {
    this.word = this.wordsList[Math.floor(Math.random() * this.wordsCount)];
  };

  #validate(guess) {
    if (guess.length !== 1) {
      alert("Введите только одну букву");
      return this.askGuess();
    } else this.guess = guess;
  }

  init(callBack) {
    this.#getRandomWord();
    this.remaining = this.word.length;
    this.#setAnswerArray(this.remaining);

    callBack(this);
  }

  askGuess() {
    const guess = prompt(
      `Угадай букву в слове: ${this.answers?.join(" ")}`
    )?.trim();
    this.#validate(guess?.toLowerCase());
  }

  checkGuess() {
    for (let index in this.word) {
      let letter = this.word[index];

      if (letter === this.guess) {
        this.answers[index] = letter;
        this.remaining--;
      }
    }
  }
}

//
// Code
//
const wordsList = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "апельсин",
  "банан",
];

const makeMove = (Game) => {
  Game.askGuess();
  Game.checkGuess();

  if (!!Game.remaining) {
    return makeMove(Game);
  }

  const retry = confirm(
    `Победа! Слово было ${Game.word}. Хотите попробовать еще раз?`
  );

  retry &&
    setTimeout(() => {
      Game.init(makeMove);
    }, 500);
  return;
};

const Game = new GuessGame(wordsList);
Game.init(makeMove);
