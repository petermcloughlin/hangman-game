//Generate word list
let wordList = [
    'Canada','Ireland','England','Scotland','Wales','Denmark','Sweden','Finland','Norway','Netherlands',
    'France','Spain','Germany','Italy','Croatia','USA','Mexico','Cuba','Estonia','Lithuania',
    'Georgia','Ukraine','Portugal','Switzerland','Poland','Bolivia','Argentina','Brazil','Austria','Romania',
    'Serbia','Montenagro','Bosnia','Hungary','Latvia','Russia','China','Japan','Vietnam','Mongolia',
    'Sudan','Cameroon','Somalia','Nigeria','Libya','Algeria','Tunisia','Egypt','Qatar','Australia',
    'Apple','Orange','Kiwi','Banana','Apricot','Tangerine','Tomato','Potatoe','Scallion','Carrots'];
    // '','','','','','','','','','',
    // '','','','','','','','','','',
    // '','','','','','','','','','',
    // '','','','','','','','','','',
    // '','','','','','','','','','',
    // '','','','','','','','','',''];  
//Convert the array to uppercase word list  
wordList = wordList.map(function(w){
    return w.toUpperCase();
});
//Store previously generate word in a variable
let theWord = "";
let maxTries = 6; //Maximum number of guesses equating to hangman body parts
let incorrectGuessCount = 0; //to account for play button click
let hangmanBody = document.querySelector('.hangman img'); //get the HTML hangman image
let correctLetters = []; //array for collecting correctly guessed letters
//Wait for the DOM to finish loading 
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let playbutton = document.getElementById("play-game");
    
    playbutton.addEventListener("click", function(){
        let userInput = document.getElementById('user-input');
        let userName = document.getElementById('user-name');  
        userName.innerText = `Welcome ${userInput.value}!`;
               
        //Close welcome modal
        startGame(); 
              
    });
})

//Add event listener to keyboard buttons
let keyboardButtons = document.getElementsByClassName('keybtn');
for(let button of keyboardButtons){
    //console.log(button, button.innerText);
    button.addEventListener('click', clickLetter);   
}

//Start game function
function startGame(){   
    //Close welcome modal after 300 milliseconds
    setTimeout(() => {
        //remove welcome modal
        let welcomeModal = document.getElementsByClassName('welcome-modal');
        for(let welcomeModa of welcomeModal){
            welcomeModa.classList.add('hidden');
        }
    }, 300);  
    //Generate random word
    getRandomWord();
}

//Get random word
function getRandomWord(){
    let word =  wordList[Math.floor(Math.random() * wordList.length)];
    //Set previous word value
    theWord = word;
    let wordDisplay = document.getElementsByClassName('words')[0];
    //generate the random word on the html page
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
    //Testing
    console.log(word);
}
//Get innerText of clicked button
function clickLetter(){   
    
    if(theWord.includes(this.innerText)){
        console.log(this.innerText + " exists in the word");        
        [...theWord].forEach((character, index) => {
            if(character === this.innerText){                
                correctLetters.push(character);  //Testing the count 
                let wordDisplay = document.getElementsByClassName('words')[0];
                wordDisplay.querySelectorAll('li')[index].innerText = character;    
                console.log(correctLetters.length);            
            }
        })
  
    }
    else{
        console.log(this.innerText + " is NOT in the word");
        incrementWrongAnswer();   
        console.log(incorrectGuessCount);   //Testing the count      
        hangmanBody.src = `assets/images/hangman-${incorrectGuessCount}.svg`; 
    }
    
    let guessCount = document.querySelector('.guess-count b');
    guessCount.innerText = `${incorrectGuessCount} / ${maxTries}`;
    //If guess count = 6 then game over
    if(incorrectGuessCount === maxTries){
        console.log('Total Incorrect guesses: ' + incorrectGuessCount);        
        displayLost();             
    }
    if(correctLetters.length === theWord.length){
        console.log('Total correct letters: ' + correctLetters.length)        
        displaySuccess();              
    }
    
}

//Increment incorrect score
function incrementWrongAnswer(){    
    incorrectGuessCount++;      
}

//Display Success Modal, Test with alert function first
function displaySuccess(){
    // return modified playagain modal to success modal
    setTimeout(() => {
        alert('Congrats, you found the word.');
    }, 1000);
    
}
//Display Lost Modal
function displayLost(){
    // return modified playagain modal to lost modal
    setTimeout(() => {
        alert('Hard luck, do you want to play again?');
    }, 1000);
    
}