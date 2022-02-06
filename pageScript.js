
    var wordsList = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "апельсин",
    "банан"];
    
    const selectWord = (wordList) =>  {
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
    var outMessege = [
        "Введите только одну букву", 
        "Осталось ", 
        "Отлично! Было слово "];
    const decrementRemeining = () => {
        remainingLetters--;
    }
    const updateGameState =  (word,guess,answerArray,callback) => {
        for (var j = 0; j < word.length; j ++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                callback();
            }
        }  
    }   
    while (remainingLetters > 0 ) {     
        alert(answerArray.join(" "));
        var guess = getGuess().toLowerCase();
        if (guess === null) {
            break;
        } else if (guess.length > 1) {
            alert(outMessege[0]);    
        } else {
            updateGameState(word, guess, answerArray, decrementRemeining); 
            alert(outMessege[1] + remainingLetters);  
        }           
    }
    alert(outMessege[2] + word);