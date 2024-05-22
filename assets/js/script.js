//Wait for the DOM to finish loading 
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let playbutton = document.getElementById("play-game");
    
    playbutton.addEventListener("click", function(){
        let userInput = document.getElementById('user-input');
        let userName = document.getElementById('user-name');        
        console.log(userInput.value);
        console.log(userName.innerText);
    });
    
})
