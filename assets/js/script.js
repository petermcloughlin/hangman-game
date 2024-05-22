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
    });

})

function startGame(){   
    //Close welcome modal after 500 milliseconds
    setTimeout(() => {
        //remove welcome modal
        let welcomeModal = document.getElementsByClassName('welcome-modal');
        for(let welcomeModa of welcomeModal){
            welcomeModa.classList.add('hidden');
        }
    }, 300);
}
