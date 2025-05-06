// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("Hi")
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select")

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

  voiceSelect.addEventListener("change", (event)=>{
    console.log(event.target.value)
    const voiceSelected = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
  })
  const inputText = document.getElementById("text-to-speak")
  const button = document.querySelector("button")
  button.addEventListener("click", (event)=>{
    const speakThis = new SpeechSynthesisUtterance("Hi");
    window.speechSynthesis.speak(speakThis);
  });

  inputText.addEventListener("input", (event)=>{
    const speakThis = new SpeechSynthesisUtterance(event.target.value);
    window.speechSynthesis.speak(speakThis);
  });

}

// function populateVoiceList() {
//   const synth = window.speechSynthesis;
//   const voiceSelect = document.getElementById("voice-select")

//   voices = synth.getVoices();

//   for (let i = 0; i < voices.length; i++) {
//     const option = document.createElement("option");
//     option.textContent = `${voices[i].name} (${voices[i].lang})`;

//     if (voices[i].default) {
//       option.textContent += " — DEFAULT";
//     }

//     option.setAttribute("data-lang", voices[i].lang);
//     option.setAttribute("data-name", voices[i].name);
//     voiceSelect.appendChild(option);
//   }
// }