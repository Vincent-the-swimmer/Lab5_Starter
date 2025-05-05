// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById("horn-select")
  const hornAudio = new Audio()
  const jsConfetti = new JSConfetti()
  selectHorn.addEventListener("change", (event)=>{
    // let img = document.querySelector("img")
    // if (event.target.value == "air-horn"){
    //   img.alt = "Air Horn"
    //   img.src = "assets/images/air-horn.svg"
    // }
    // if (event.target.value == "car-horn"){
    //   img.alt = "Car Horn"
    //   img.src = "assets/images/car-horn.svg"
    // }
    // if (event.target.value == "party-horn"){
    //   img.alt = "Party Horn"
    //   img.src = "assets/images/party-horn.svg"
    // }
    changeImage(event.target.value);
  });

  const volumeSlider = document.getElementById("volume")
    volumeSlider.addEventListener("input", (event)=>{
      hornAudio.volume = 0.01*event.target.value
      const volumeLevelImg = document.querySelector("#volume-controls img")
      console.log(volumeLevelImg.src)
      if (event.target.value == 0){
        volumeLevelImg.src = "assets/icons/volume-level-0.svg"
      }
      if (event.target.value >= 1 && event.target.value < 33){
        volumeLevelImg.src = "assets/icons/volume-level-1.svg"
      }
      if (event.target.value >= 33 && event.target.value < 66){
        volumeLevelImg.src = "assets/icons/volume-level-2.svg"
      }
      if (event.target.value >=66){
        volumeLevelImg.src = "assets/icons/volume-level-3.svg"
      }
  });

  const playButton = document.querySelector("button")
  playButton.addEventListener("click", (event)=>{
    if (selectHorn.value == "air-horn"){
      hornAudio.src= "assets/audio/air-horn.mp3"
    }
    if (selectHorn.value == "car-horn"){
      hornAudio.src= "assets/audio/car-horn.mp3"
    }
    if (selectHorn.value == "party-horn"){
      hornAudio.src= "assets/audio/party-horn.mp3"
      jsConfetti.addConfetti()
    }
    hornAudio.play()
  });
}

function changeImage(name){
  let img = document.querySelector("img")
    if (name == "air-horn"){
      img.alt = "Air Horn"
      img.src = "assets/images/air-horn.svg"
    }
    if (name == "car-horn"){
      img.alt = "Car Horn"
      img.src = "assets/images/car-horn.svg"
    }
    if (name == "party-horn"){
      img.alt = "Party Horn"
      img.src = "assets/images/party-horn.svg"
    }
}