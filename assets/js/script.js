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

wordList = wordList.map(function(w){
    return w.toUpperCase();
});

let theWord = "";
let maxTries = 6; 
let incorrectGuessCount = 0; 
let hangmanBody = document.querySelector('.hangman img'); 
let correctLetters = []; 

document.addEventListener("DOMContentLoaded", function(){
    let playbutton = document.getElementById("play-game");
    
    playbutton.addEventListener("click", function(){
        let userInput = document.getElementById('user-input');
        let userName = document.getElementById('user-name');  
        userName.innerText = `Welcome ${userInput.value}!`;
        
        startGame();               
    });
})

let keyboardButtons = document.getElementsByClassName('keybtn');
for(let button of keyboardButtons){ 
    button.addEventListener('click', clickLetter);   
}

function startGame(){  
    setTimeout(() => {        
        let welcomeModal = document.getElementsByClassName('welcome-modal');
        for(let welcomeModa of welcomeModal){
            welcomeModa.classList.add('hidden');
        }
    }, 300);  
   
    getRandomWord();
}

function getRandomWord(){
    let word =  wordList[Math.floor(Math.random() * wordList.length)];    
    theWord = word;
    let wordDisplay = document.getElementsByClassName('words')[0];   
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");    
}

function clickLetter(){     
    if(theWord.includes(this.innerText)){              
        [...theWord].forEach((character, index) => {
            if(character === this.innerText){                
                correctLetters.push(character);  
                let wordDisplay = document.getElementsByClassName('words')[0];
                wordDisplay.querySelectorAll('li')[index].innerText = character;   
                wordDisplay.querySelectorAll('li')[index].classList.add('guessed');                          
            }
        })        
    }
    else{        
        incrementWrongAnswer();      
        hangmanBody.src = `assets/images/hangman-${incorrectGuessCount}.svg`; 
    }
    this.disabled = true;
    let guessCount = document.querySelector('.guess-count b');
    guessCount.innerText = `${incorrectGuessCount} / ${maxTries}`;
    
    if(incorrectGuessCount === maxTries){               
        displayLost();             
    }
    if(correctLetters.length === theWord.length){               
        displaySuccess();              
    }    
}

function incrementWrongAnswer(){    
    incorrectGuessCount++;      
}

function displaySuccess(){    
    setTimeout(() => {
        if(confirm(`Well done!\nYou found the word : ${theWord}\nDo you want to play again?`) ==  true)  {
            resetGame();
        }            
    }, 1000);    
}

function displayLost(){    
    setTimeout(() => {
        if(confirm(`Hard luck!\nThe correct word was: ${theWord}\nDo you want to play again?`) == true){
            resetGame();
        }
    }, 1000);
    
}

function resetGame(){
    correctLetters = [];
    incorrectGuessCount = 0;
    hangmanBody.src = `assets/images/hangman-${incorrectGuessCount}.svg`; 
    let guessCount = document.querySelector('.guess-count b');
    guessCount.innerText = `${incorrectGuessCount} / ${maxTries}`;

    getRandomWord();
    
    let keyboardButtons = document.getElementsByClassName('keybtn');
    for(let btn of keyboardButtons){
        btn.disabled = false;
    }
}