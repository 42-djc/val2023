
const favouriteThings = [
    "Nice eyes",
    "Nice beard and hair",
    "Funny person",
    "Clever man",
    "Kind",
    "Sweet (differan to kind - sanks!)",
    "Doing well at gym",
    "Doing well at food",
    "Nice lunch-maker",
    "Patient with night class"
    ];
    const generateButton = document.querySelector("#generate-button");
    const favouriteThingsDiv = document.querySelector("#favourite-things");
    
    generateButton.addEventListener("click", function() {
        let trackStatus = localStorage.getItem("trackPlayed");
        if (!trackStatus) {
          let sound = new Audio("sophie.mp3");
          sound.play();
          localStorage.setItem("trackPlayed", "true");
        }
    generateButton.innerHTML = "❤️❤️❤️";
    let favouriteThingsHTML = "";
    let usedIndexes = [];
    for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * favouriteThings.length);
    while (usedIndexes.includes(randomIndex)) {
    randomIndex = Math.floor(Math.random() * favouriteThings.length);
    }
    usedIndexes.push(randomIndex);
    favouriteThingsHTML += "<p>" + (i + 1) + ". " + favouriteThings[randomIndex] + "</p>";
    }
    favouriteThingsDiv.innerHTML = favouriteThingsHTML;
    });

    //Sound board

    document.addEventListener("DOMContentLoaded", function() {
        const soundBoard = document.querySelector("#sound-board");
        const kindButton = document.querySelector("#kind");
        const youAlsoButton = document.querySelector("#you-also");
        const loveLoveButton = document.querySelector("#love-love");
        const andAlsoWithYouButton = document.querySelector("#and-also-with-you");
        
        kindButton.addEventListener("click", function() {
        let sound = new Audio("kind.m4a");
        sound.play();
        });
        
        youAlsoButton.addEventListener("click", function() {
        let sound = new Audio("you-also.m4a");
        sound.play();
        });
        
        loveLoveButton.addEventListener("click", function() {
        let sound = new Audio("love-love.m4a");
        sound.play();
        });
        
        /*andAlsoWithYouButton.addEventListener("click", function() {
        let sound = new Audio("and-also-with-you.m4a");
        sound.play();
        });*/
        });
        
        