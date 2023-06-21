window.onload = function() {

    
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
    const displayTopics = () => {
        categories.innerHtml += `<h4>Please Select a Category</h4>`;
    }
    // Define state Variables
    
    
    let userInput = document.getElementsByClassName('user-input');
    let livesLeft = document.getElementsByClassName('lives');
    let winCount = 0;
    let count = 0;
    let chosenWord = '';
    let misses;
    let choice;
    let word;
    let guesses;
    let guess;

    
    // Cache Elements
    let buttons = function() {
        myLetters = document.getElementsByClassName('letter-container');
        letters = document.createElement('ul');
        for (let i = 0; i < letters.length; i++) {
            alphabet.id = 'letters';
            list = document.createElement('li');
            alphabet.id = 'letter';
            list.innerHtml = letters[i];
            check();
            buttons.appendChild(letters);
            letters.appendChild(list);
        }
    }
}

    outcome = function () {
        input = document.getElementsByClassName('user-input');
        rightGuess = document.createElement('ul');
        for (let i = 0; i < letters.length; i++) {
            rightGuess.setAttribute('class', 'word');
            guess = document.createAttribute('li');
            guess.setAttribute('class', 'guess');
                if (word[i] === '-') {
                    guess.innerHtml = '-';
                    space = 1;
                } else {
                    guess.innerHtml = '-';
                }
                guesses.push(guess);
                }
                rightGuess.appendChild(guess)
        }

    
    // Add Event Listeners
    
    // Invoke the init function
    
    
    
    // Invoke the main Render function