window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
window.SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'

const recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
recognition.interimResults = true;

speechRecognitionList.addFromString(grammar, 1);
recognition.lang = 'en-US';

const transcript_element = document.getElementById("transcript");
let p = document.createElement("p");
transcript_element.appendChild(p);

recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript);
    
    p.textContent = transcript;
    if (e.results[0].isFinal){
        p = document.createElement("p");
        p.textContent = transcript;
        transcript_element.appendChild(p);
        p.textContent = "";
    }
});