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
//Wait for the DOM to finish loading 
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let playbutton = document.getElementById("play-game");
    
    playbutton.addEventListener("click", function(){
        let userInput = document.getElementById('user-input');
        let userName = document.getElementById('user-name');  
        userName.innerText = `Welcome ${userInput.value}!`;  
        //TESTING    
        // console.log(userInput.value);
        // console.log(userName.innerText);
        
        //Close welcome modal
        startGame();  
        //Generate random word
        getRandomWord();      
    });
})
//Store previously generate word in a variable
let previousWord = "";
//Add event listener to keyboard buttons
let keyboardButtons = document.getElementsByTagName('button');
for(let button of keyboardButtons){
    //console.log(button, button.innerText);
    button.addEventListener('click', clickLetter);
}
function startGame(){   
    //Close welcome modal after 300 milliseconds
    setTimeout(() => {
        //remove welcome modal
        let welcomeModal = document.getElementsByClassName('welcome-modal');
        for(let welcomeModa of welcomeModal){
            welcomeModa.classList.add('hidden');
        }
    }, 300);  
}

//Get random word
function getRandomWord(){
    let word =  wordList[Math.floor(Math.random() * wordList.length)];
    //Set previous word value
    previousWord = word;
    let wordDisplay = document.getElementsByClassName('words')[0];
    //generate the random word on the html page
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
    //Testing
    console.log(word);
}
//Get innerText of clicked button
function clickLetter(){    
    
    if(previousWord.includes(this.innerText)){
        console.log(this.innerText + " exists in the word");
    }
    else{
        console.log(this.innerText + " is NOT in the word");
    }
}

//Increment incorrect score
function incrementWrongAnswer(){

}
//Display Success Modal
function displaySuccess(){

}
//Display Lost Modal
function displayLost(){

}