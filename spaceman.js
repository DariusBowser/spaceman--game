// window.onload = function() {}

    
    // Define Constants
    const objects = {
        animals: ['Octopus', 'Beaver', 'Iguana', 'Elephant', 'Chimpanzee','Hippopotamus'],
        colors: ['Pink', 'Orange', 'Yellow', 'Purple', 'Burgundy', 'Beige'],
        shapes: ['Rectangle', 'Triangle', 'Sphere', 'Diamond', 'Hexagon', 'Octagon']
    };
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
     const lettersContainer = document.getElementsByClassName('letters-container');
     const topic = document.getElementsByClassName('categories');
     const playAgain = document.getElementsByClassName('again');


    // Define state Variables
    
    
    let userInput = document.getElementsByClassName('user-input');
    let livesLeft = 6;
    let winCount = 0;
    let count = 0;
    let chosenWord = '';
    let guesses; [];
    let misses;
    let choice;
    let word;
    let guess;
    let category;
    let gameWon; 
    
    // Cache Elements
    
    
    // Add Event Listeners
    const letterButtons = document.getElementsByClassName(`letter`);
    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].addEventListener('click', function(evt) {
            const letter = evt.target.textContent.toLowerCase();
            processGuess(letter);
        })
    }
    // Functions
    
function chooseWord(categories) {
    const wordArray = objects[category];
    const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    return wordArray[randomWord].toLowerCase();
}
    // Initialize game
    function init() {
        chosenWord = chooseWord(category);
        // guesses initialize
        guesses = Array(chosenWord.length).fill('_');
        //update display of chosen words
        updateChosenWord();
        updateLivesLeft();
    }
    //Function update chosen word
    function updateChosenWord() {
        const chooseWordElement = document.getElementsByClassName('chosen-word');
        chooseWordElement.textContent = guesses.join(' ');
    }
    //Function to update display of lives
    function updateLivesLeft() {
        const livesLeftElement = document.getElementsByClassName('lives');
        livesLeftElement.textContent = `Lives Remaining: ${livesLeft}`;
    }

    // User guess function
    function processGuess(letter) {
        if (!gameWon && livesLeft > 0) {
            const guessedWord = chosenWord.indexOf(letter);
            if (guessedWord !== -1) {
                // right guess
                while (guessedWord !== -1) {
                    guesses[guessedWord] = letter;
                    guessedWord = chosenWord.indexOf(letter, guessedWord + 1);
                }
                updateChosenWord();
                if (!guesses.includes('_')) {
                    //letter guess right
                    gameWon = true;
                    alert('Congratulations! You won!');
                }
            } else {
                // wrong guess
                livesLeft--;
                updateLivesLeft();
                if (livesLeft === 0) {
                    // out of lives
                    alert('Game Over! The word was '+ chosenWord);
                }
            }
        }
    }

    // call init function 
    init();