// expose.js
const jsConfetti = new JSConfetti();


window.addEventListener('DOMContentLoaded', init);

const hornAudio = new Audio();

function init() {
  const selector = document.getElementById('horn-select');
  selector.addEventListener('change', (e) => {
    changeImage(e.target.value);
  });

  const playButton = document.querySelector('button');
  playButton.addEventListener('click', () => {
    const current = selector.value;
    playAudio(current);
  });

  const volume = document.getElementById("volume-controls");
  const volImg = document.querySelector('#volume-controls img');
  volume.addEventListener("change", (e) => {
    if (e.target.value == 0) {
      volImg.src = 'assets/icons/volume-level-0.svg';
    }
    if (e.target.value >= 1 && e.target.value <= 33) {
      volImg.src = 'assets/icons/volume-level-1.svg';
    }
    if (e.target.value > 33 && e.target.value <= 67) {
      volImg.src = 'assets/icons/volume-level-2.svg';
    }
    if (e.target.value > 67) {
      volImg.src = 'assets/icons/volume-level-3.svg';
    }
    hornAudio.volume = e.target.value / 100;
  });
}

function changeImage(newImage) {
  const img = document.querySelector('img');
  //console.log(newImage)
  if (newImage == 'air-horn') {
    img.src = 'assets/images/air-horn.svg';
    img.alt = 'Air horn selected';
  }

  if (newImage == 'car-horn') {
    img.src = 'assets/images/car-horn.svg';
    img.alt = 'Car horn selected';
  }

  if (newImage == 'party-horn') {
    img.src = 'assets/images/party-horn.svg';
    img.alt = 'Party horn selected';
  }
}

function playAudio(audio) {
  console.log(audio);
  if (audio == 'air-horn') {
    hornAudio.src = (`assets/audio/air-horn.mp3`);
  }

  if (audio == 'car-horn') {
    hornAudio.src = (`assets/audio/car-horn.mp3`);
  }

  if (audio == 'party-horn') {
    hornAudio.src = (`assets/audio/party-horn.mp3`);
    jsConfetti.addConfetti();
  }
  hornAudio.play();
}