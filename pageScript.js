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
    
    const getGuess = () => {       
        return prompt("Угадайте букву или нажмите Отмена для выхода");    
    }

    var answerArray = setupArray(word.length);
    var remainingLetters = word.length;
    var outMessege = ["Введите только одну букву", "Осталось ", "Отлично! Было слово "];
    
    const updateGameState =  (a,b,c) => {
        for (var j = 0; j < a.length; j ++) {
            if (a[j] === b && c[j] === "_") {
                c[j] = b;
                remainingLetters --;
            }
        }  
    }   
    // игровой цикл
    while (remainingLetters > 0 ) {
         
        // показываем состояние игры
        alert(answerArray.join(" "));
        // Запрашиваем вариант ответа
        var guess = getGuess().toLowerCase();

        if (guess === null) {
            // выходим из игорого цикла
            break;
        } else if (guess.length > 1) {
            alert(outMessege[0]);    
        } else {

        // обновляем состояние игры 
            updateGameState(word, guess, answerArray); 
            alert(outMessege[1] + remainingLetters);  
        }       
    
        // конец игрового цикла
    }

    // отображаем ответ и поздравляем игрока
    alert(outMessege[2] + word);