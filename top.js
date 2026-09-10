const phrases = [
  "Jungle Language to English...",
  "English Language to Jungle..."
]

let i = 0;  // phrase index
let j = 0;  // character index
let currentPhrase = "";
let isDeleting = false;

const textElement = document.getElementById("typing-text");

function type() {
  const fullText = phrases[i];

  if (!isDeleting && j < fullText.length) {
    currentPhrase = fullText.substring(0, j + 1);
    j++;
  } else if (isDeleting && j > 0) {
    currentPhrase = fullText.substring(0, j - 1);
    j--;
  }

  textElement.textContent = currentPhrase;

  if (isDeleting) {
    textElement.classList.add('no-blink');
  } else {
    textElement.classList.remove('no-blink');
  }

  let typingSpeed = isDeleting ? 100 : 100;

  if (!isDeleting && j === fullText.length) {
    typingSpeed = 3000;  // pause before deleting
    isDeleting = true;
    textElement.classList.add("fade-out");
  } else if (isDeleting && j === 0) {
    textElement.classList.add("fade-out");
    setTimeout(() => {
      isDeleting = false;
      i = (i + 1) % phrases.length; //go to next phrase
      textElement.classList.remove('fade-out');
      textElement.classList.add("fade-in");
    }, 400);
    typingSpeed = 600;
  }

  setTimeout(type, typingSpeed);
}

type();



