 // создаем массив со словами
    var wordsList = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "апельсин",
    "банан"];
    
    // выбираем случайное слово
    const selectWord = (wordList) =>  {
       return wordList[Math.floor(Math.random() * wordList.length)];   
    }
    var word = selectWord(wordsList);

    // заменяем слово символами
    const setupArray = (anyLength) => { 
       return new Array(anyLength).fill("_");
    }
    
    const showPlayerProgress = (answer) => {
        alert(answer.join(" "));
    } 
    const getGuess = () => {       
        return prompt("Угадайте букву или нажмите Отмена для выхода");    
    }

    var answerArray = setupArray(word.length);
    var remainingLetters = word.length;
    // игровой цикл
    while (remainingLetters > 0 ) {
        // показываем состояние игры
        showPlayerProgress(answerArray);
        // Запрашиваем вариант ответа
        var guess = getGuess().toLowerCase();

        if (guess === null) {
            // выходим из игорого цикла
            break;
        } else if (guess.length !== 1) {
            alert (" Введите только одну букву");
            
        } else {

        // обновляем состояние игры 
            for (var j = 0; j < word.length; j ++) {
                if (word[j] === guess && answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters --;
                }
            }  alert ("Осталось " + remainingLetters);
        }       
    
        // конец игрового цикла
    }

    // отображаем ответ и поздравляем игрока
    alert ("Отлично! Было слово " + word);