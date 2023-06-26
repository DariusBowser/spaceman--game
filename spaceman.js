// Define Constants
const categories = {
  animals: [
    "Octopus",
    "Beaver",
    "Iguana",
    "Elephant",
    "Chimpanzee",
    "Hippopotamus",
  ],
  colors: ["Pink", "Orange", "Yellow", "Purple", "Burgundy", "Beige"],
  shapes: ["Rectangle", "Triangle", "Sphere", "Diamond", "Hexagon", "Octagon"],
};
const images = [
  "./Assets/Spaceman6.jpeg",
  "./Assets/spaceman5.jpeg",
  "./Assets/spaceman4.webp",
  "./Assets/Spaceman3.webp",
  "./Assets/Spaceman2.jpeg",
  "./Assets/Spaceman1.jpeg"
];

// HTML components
const spacemanPhoto = document.getElementById('spacemanImage');
const categoriesDiv = document.getElementById("categories");
const letterInputDiv = document.getElementById("letterInput");
const letterButtons = document.querySelectorAll(".letter");
const categoryButtons = document.querySelectorAll(".category");
const letterGuessElement = document.getElementsByClassName("letter-guess");
const playAgain = document.querySelector("#again");
const chosenWordElement = document.getElementsByClassName("chosen-word");
const livesElement = document.querySelector(".lives");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const popupClose = document.getElementById("popupClose");

// Variables
let userInput = document.getElementsByClassName("user-input");
let livesLeft = 4;
let chosenWord;
let guesses = [];
let category;
let matches = 0;

// Functions
function chooseWord() {
  const wordArray = categories[category];
  const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  return randomWord.toLowerCase();
}
function createBlankLetterInput() {
  letterInputDiv.innerHTML = "";
  for (let i = 0; i < chosenWord.length; i++) {
    const newDiv = `<div id="letterInput${i}">_</div>`;
    letterInputDiv.innerHTML += newDiv;
  }
}

function checkGameStatus() {
  if (matches === chosenWord.length) {
    showPopup("Congratulations! You won!");
  }
  if (livesLeft === 0) {
    showPopup("Game Over! The word was " + chosenWord);
  }
}


function processGuess(letter) {
  if (chosenWord.includes(letter)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        document.getElementById(`letterInput${i}`).textContent = letter;
        matches++;
      }
    }
  } else {
    livesLeft--;
    updateSpaceman();
  }
  checkGameStatus();
}


function init() {
  chosenWord = chooseWord();
  console.log(chosenWord);
  createBlankLetterInput();
  updateSpaceman();
}
// Event listeners
categoryButtons.forEach((categoryButton) => {
  categoryButton.addEventListener("click", function (evt) {
    category = evt.target.getAttribute("data-category");
    evt.target.disabled = true;
    init();
  });
});

letterButtons.forEach((letterButton) => {
  letterButton.addEventListener("click", function (evt) {
    const letter = evt.target.textContent.toLowerCase();
    processGuess(letter);
    evt.target.disabled = true;
  });
});

playAgain.addEventListener("click", function (evt) {
  console.log("click");
  resetGame();
});
popupClose.addEventListener("click", closePopup);

// Functions

//Function update chosen word
function updateChosenWord() {
  chosenWordElement.textContent = guesses.join(" ");
}

function updateSpaceman() {
  const spacemanPics = images[images.length - livesLeft]
  spacemanPhoto.src = spacemanPics;
  livesElement.textContent = `Lives Remaining: ${livesLeft}`;
}

function updateLetterGuess(letter) {
  letterGuessElement.textContent += letter;
}

function resetGame() {
  matches = 0;
  livesLeft = 4;
  chosenWord = "";
  guesses = [];
  category = "";

  // Re-enable category buttons
  categoryButtons.forEach((categoryButton) => {
    categoryButton.disabled = false;
  });

  // Enable letter buttons
  letterButtons.forEach((letterButton) => {
    letterButton.disabled = false;
  });

  // Clear letter input and guessed letters
  letterInputDiv.innerHTML = "";
  letterGuessElement.textContent = "";
  updateSpaceman();
  closePopup();
}

function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}
