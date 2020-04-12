const btn = document.getElementById('btn');
const result = document.getElementById('result');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
const recognition = new SpeechRecognition();

// let paragraph = document.createElement('p');
// let container =  document.querySelector('.text-container');
// container.appendChild(paragraph);
// const sound = document.querySelector('.sound')

recognition.onstart = function(){
    console.log('oke')
}

recognition.onresult = function(event){
    // console.log(event);
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    
}

// icon.addEventListener('click', ()=>{
//     sound.play();
//     dictate();
// });

// const dictate = () => {
//     recognition.start();
//     recognition.onresult=(event) => {
//         const speechToText = Array.from(event.results)
//         .map(result => result[0])
//         .map(result => result.transcript)
//         .join(' ');
//         console.log(speechToText)
//         paragraph.textContent = speechToText;
//     }
// }