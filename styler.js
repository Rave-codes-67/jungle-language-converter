const slider = document.getElementById('slider');
const scroll = document.querySelector('.scroll');
const btnJungle = document.getElementById('btnJungle');
const btnEnglish = document.getElementById('btnEnglish');

const buttons = document.querySelectorAll('.switch-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // check if the clicked button already has the "active" class
    if (!button.classList.contains('active')) {
      // Remove the active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked buttons
      button.classList.add('active');
    }
  });
});

function test1 () {
  slider.style.transform = 'translateX(0)'; // Slides from left
  scroll.style.transform = 'translatex(0)'; //Slides to Left
  scroll.style.animation = 'growShrink 0.6s ease-out';
  setTimeout(() => scroll.style.animation = '', 700);
}

function test2 () {
  slider.style.transform = 'translateX(-51%)'; // Slides from right
  scroll.style.transform = 'translatex(122%)'; // Slides to right
  scroll.style.animation = 'growShrink 0.6s ease-out';
  setTimeout(() => scroll.style.animation = '', 900);
}

btnJungle.addEventListener('click', test1);
document .addEventListener('keydown', function(event) {
  if(event.key === 'ArrowLeft') {
    test1();
    if (!btnJungle.classList.contains('active')) {
      // Add active class to the clicked buttons
      btnJungle.classList.add('active');
      // Remove the active class from the other buttons
      btnEnglish.classList.remove('active')
    }
  }
})

btnEnglish.addEventListener('click', test2);
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    test2();
    if (!btnEnglish.classList.contains('active')) {
      // Add active class to the clicked buttons
      btnEnglish.classList.add('active');
      // Remove the active class from the other buttons
      btnJungle.classList.remove('active');
    }
  }
})


function copyText(button, selector) {
  const text = document.querySelector(selector).textContent;

  if (text.length >= 1) {
    navigator.clipboard.writeText(text).then(() => {
      button.textContent = 'Copied!';

      button.disabled = true;

      setTimeout(() => {
        button.textContent = 'Copy';
        button.disabled = false;
      }, 2000);
    }).catch(err => {
        alert('Copy Failed', err);
    });
  }
}

function buttonControl1 (event) {
  if (event.key === 'Enter') {
    convertToEnglish();
  }
}

document.querySelector('.js-jungle').addEventListener('keydown', buttonControl1);

function buttonControl2 (event) {
  if (event.key === 'Enter') {
    convertToJungle();
  }
}

document.querySelector('.js-english').addEventListener('keydown', buttonControl2);
