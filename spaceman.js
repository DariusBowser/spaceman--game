
    // Define Constants
    const categories = {
        animals: ['Octopus', 'Beaver', 'Iguana', 'Elephant', 'Chimpanzee','Hippopotamus'],
        colors: ['Pink', 'Orange', 'Yellow', 'Purple', 'Burgundy', 'Beige'],
        shapes: ['Rectangle', 'Triangle', 'Sphere', 'Diamond', 'Hexagon', 'Octagon']
    };
    // HTML components
    const categoriesDiv = document.getElementById('categories')
    const letterInputDiv = document.getElementById('letterInput');
    const letterButtons = document.querySelectorAll('.letter');
    const categoryButtons = document.querySelectorAll('.category');
    
    const letterGuessElement = document.getElementsByClassName('letter-guess');

    //  const playAgain = document.getElementsByClassName('again');
     const chosenWordElement = document.getElementsByClassName('chosen-word');
     const livesElement = document.getElementsByClassName('lives');


     //variables
     let userInput = document.getElementsByClassName('user-input');
     let livesLeft = 6;
     let chosenWord;
     let guesses = [];
     let category;
     let matches = 0;
     
     console.log(categoriesDiv)
     
     function chooseWord() {
         const wordArray = categories[category];
         const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
         return randomWord.toLowerCase();
        }
        function createBlankLetterInput() {
            letterInputDiv.innerHTML = ""
            for (let i = 0; i < chosenWord.length; i++) {
                const newDiv = `<div id="letterInput${i}">_</div>`
                letterInputDiv.innerHTML += newDiv
            }
        }
        
        function checkGameStatus() {
            if (matches === chosenWord.length) {
                alert('Congratulations! You won!');
            }
            if (livesLeft === 0) {
                alert('Game Over! The word was '+ chosenWord)
            }
        }

        function processGuess(letter) {
            if (chosenWord.includes(letter)) {
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === letter) {
                    document.getElementById(`letterInput${i}`).textContent = letter
                    matches++
                }
            }
        }
        else livesLeft--
        checkGameStatus()
        }

        
        function init() {
            chosenWord = chooseWord();
            console.log(chosenWord)
            // guesses = Array(chosenWord.length).fill('_');
            // updateChosenWord();
            // updateLivesLeft();
            createBlankLetterInput();
        }
        // Add Event Listeners
    categoryButtons.forEach(categoryButton => {
        categoryButton.addEventListener('click', function(evt) {
            // Chose category from data
             category = evt.target.getAttribute('data-category');
            // call init from category
            evt.target.disabled = true;
            init();
        });
    });
    
    letterButtons.forEach(letterButton => {
        letterButton.addEventListener('click', function(evt) {
            const letter = evt.target.textContent.toLowerCase();
            processGuess(letter);
            evt.target.disabled = true;
    })
        })
    

    // Functions
    
    //Function update chosen word
    function updateChosenWord() {
         chosenWordElement.textContent = guesses.join(' ');
     }
    //Function to update display of lives
     function updateLivesLeft() {
         livesElement.textContent = `Lives Remaining: ${livesLeft}`;
     }
     function updateLetterGuess(letter) {
         letterGuessElement.textContent += letter;
     }

    // Initialize game

    // call init function 
    //init();