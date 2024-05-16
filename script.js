const textArea = document.getElementById("speechToText");

const btn = document.getElementById("click-btn");


function voice() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
        const speech = event.results[0][0].transcript
        textArea.value = speech
    }
    recognition.start()
}
















































