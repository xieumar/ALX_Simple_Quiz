function checkAnswer() {
    var correctAnswer = 4;
    var userAnswer = document.querySelector('name="quiz"').value;

    if(userAnswer == correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    }
    else{
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

    document.getElementById("submit-answer").addEventListener(onclick, checkAnswer);
