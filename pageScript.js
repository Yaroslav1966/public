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
    
    var words = selectWord(wordsList);

    // создаем пустой массив
    const setupArray = () => {
        const inArray = []; 
        for (var i = 0; i < words.length; i++) {
            inArray[i] = "-";
        }
        return inArray;
    }
    var answerArray = setupArray();
    

    var remainingLetters = words.length;
    

    // игровой цикл
    while (remainingLetters > 0 ) {
        // показываем состояние игры
        alert (answerArray.join(" "));
        // Запрашиваем вариант ответа
        var guess = prompt("Угадайте букву или нажмите Отмена для выхода");
        guess = guess.toLowerCase();
        if (guess === null) {
            // выходим из игорого цикла
            break;
        } else if (guess.length !== 1) {
            alert (" Введите только одну букву");
            
        } else {

        // обновляем состояние игры 
            for (var j = 0; j < words.length; j ++) {
                if (words[j] === guess && answerArray[j] === "-") {
                    answerArray[j] = guess;
                    remainingLetters --;
                }
            }  alert ("Осталось " + remainingLetters);
        }       
    
        // конец игрового цикла
    }

    // отображаем ответ и поздравляем игрока
    //alert ( answerArray.join(" "));
    alert ("Отлично! Было слово " + words);