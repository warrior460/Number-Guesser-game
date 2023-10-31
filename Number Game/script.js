
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*10) + 1;
var no_of_guesses = 3;
var guessed_nums = [];
document.getElementById('playAgain').style.display = 'none';
document.getElementById('my_btn').style.display = 'block';



function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 10){
        alert("Please enter a number between 1 and 10.");
        
    }
    if(user_guess == answer){
        msg1.textContent = "Yippie You Win!!";
        msg2.textContent = "The number was: " + answer;
        msg3.textContent = "You guessed the correct number!!!";
        document.getElementById("my_btn").disabled = true;
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('my_btn').style.display = 'none';
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses--;
    
        if(no_of_guesses === 0){
        msg1.textContent = "Your game is over.";
        msg2.textContent = "No. of guesses: " + no_of_guesses;
        msg3.textContent = "The number was: " + answer;
        document.getElementById("my_btn").disabled = true;
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('my_btn').style.display = 'none';

    }

       
        else{
            const message = user_guess > answer ? 'Try a smaller number' : 'Try a larger number';
            msg1.textContent = 'Incorrect. ' + message + '. ';
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
            guessed_nums;
        }
     
        
        
    }
    

}

function resetGame() {
    location.reload();
}





console.log(answer);