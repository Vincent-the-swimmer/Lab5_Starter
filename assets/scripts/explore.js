// // explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("Hi")
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];
  setTimeout(() => {
    voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }, 50);
  const utterThis = new SpeechSynthesisUtterance();

  voiceSelect.addEventListener("change",(event)=>{
    console.log(event.target.value);
    const select = document.getElementById("voice-select");
    const selectedOption = select.options[select.selectedIndex];
    console.log(selectedOption);
    const dataName = selectedOption.getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {  
      if (voices[i].name === dataName) {  
        utterThis.voice = voices[i];  
      }  
    }
  })
  
  const textArea = document.getElementById("text-to-speak");
  const playButton = document.querySelector("button");
  const speakingImg = document.querySelector("img");

  playButton.addEventListener("click", (event)=>{
    utterThis.onstart = () => {
      speakingImg.src = "assets/images/smiling-open.png";
    }
    utterThis.onend = () => {
      speakingImg.src = "assets/images/smiling.png";
    }
    utterThis.text = textArea.value;
    synth.speak(utterThis);
  })
}