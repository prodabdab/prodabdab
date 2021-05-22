var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

    document.getElementById("input1").innerHTML="";

    recognition.start();

}

recognition.onresult = function run (event){

    console.log(event);

    var finalresult = event.results[0][0].transcript;

    console.log(finalresult);

    document.getElementById("input1").innerHTML = finalresult;

}