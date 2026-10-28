# Emotion Detector

AI-based web application that detects emotions (anger, disgust, fear, joy, sadness) in text using the Watson NLP library, deployed with Flask. Final project for *Developing AI Applications with Python and Flask*.

## Structure

```
EmotionDetection/
  __init__.py            Package: exposes emotion_detector
  emotion_detection.py   Calls the Watson NLP EmotionPredict service
server.py                Flask application (/ and /emotionDetector)
templates/index.html     Web interface
static/mywebscript.js    Front-end script
test_emotion_detection.py  Unit tests
```

## Usage

The Watson NLP service is only reachable from the Skills Network lab environment.

```bash
pip install -r requirements.txt
python3 server.py                      # open http://localhost:5000
python3 -m unittest test_emotion_detection.py
pylint server.py
```

Blank or invalid input returns `Invalid text! Please try again!`.
