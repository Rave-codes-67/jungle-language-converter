const vowels = ['a', 'e', 'i', 'o', 'u'];
const numbers = ['1', '2', '3', '4', '5'];

let output1 = document.querySelector('.js-converted').textContent;
let output2 = document.querySelector('.js-converted1').textContent;


function convertToEnglish() {
  let userInput = document.querySelector('.js-jungle').value;
  let letter = userInput;
  let final = '';
  skip = false;

  for (let i = 0; i < letter.length; i++) {
    if (skip === true) {
      skip = false;
      continue;
    }

    if (numbers[0] === letter[i]) {
      final += 'a';
    } else if (numbers[1] === letter[i]) {
        final += 'e';
    } else if (numbers[2] === letter[i]) {
        final += 'i';
    } else if (numbers[3] === letter[i]) {
        final += 'o';
    } else if (numbers[4] === letter[i]) { 
        final += 'u';
    } else if (letter[i] === ' ') {
        final += letter[i]
    } else if (/^[a-zA-Z]+$/.test(letter[i])) {
        if (i + 1 < userInput.length && userInput[i + 1].toLowerCase() === 'a') {
          final += letter[i].toLowerCase();
          skip = true;
        } else {
          final += letter[i];
        }
    } else {
        final += letter[i];
    }
  }
  document.querySelector('.js-converted').textContent = final;
  console.log(final)
}

function convertToJungle () {
  let userInput = document.querySelector('.js-english').value;
  let letter = userInput;
  let result = '';

  for (let i = 0; i < letter.length; i++) {
    if (vowels[0] === letter[i]) {
      result += numbers[0];
    } else if (vowels[1] === letter[i]) {
      result += numbers[1];
    } else if (vowels[2] === letter[i]) {
      result += numbers[2];
    } else if (vowels[3] === letter[i]) {
      result += numbers[3];
    } else if (vowels[4] === letter[i]) {
      result += numbers[4];
    } else if (letter[i] === ' ') {
      result += letter[i];
    } else if (/^\d+/.test(letter[i])) {
      result += letter[i];
    } else if (/^[a-zA-Z]+$/.test(letter[i]) === false) {
      result += letter[i];
    } else {
      result += letter[i] + 'a'
    }
  }

  document.querySelector('.js-converted1').textContent = result;
  console.log(result)
}

