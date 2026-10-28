let RunSentimentAnalysis = () => {
    const textToAnalyze = document.getElementById("textToAnalyze").value;
    const output = document.getElementById("system_response");

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            output.innerHTML = this.status === 200 ? this.responseText : "Something went wrong. Please try again.";
        }
    };
    xhttp.open("GET", "emotionDetector?textToAnalyze=" + encodeURIComponent(textToAnalyze), true);
    xhttp.send();
};
