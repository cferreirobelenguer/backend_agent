# Virtual Assistant Noa 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This proyect is a RR.HH virtual agent. It has an API REST with mongoDB database and it searchs information in this when the user orders something.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## npm Dependencies

### speech-js

Is a dependencies of nodeJS, it is a speech recognition and speech synthesis

npm install speech-js

import speech from 'speech-js'


### react-speech-recognition

useSpeechRecognition is a React hook that gives a component access to a transcript of speech picked up from the user's microphone.

SpeechRecognition manages the global state of the Web Speech API, exposing functions to turn the microphone on and off.

npm i react-speech-recognition

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognit

### Express

Web framework of nodeJS

npm i express

### Body-parser

Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

npm i body-parser

var bodyParser = require('body-parser')

### Mongoose

npm i mongoose

Is necesary to config and connect mongoDB database

### axios

First is necesary to config CORS to the backend.

This library can to send ajax request, to connect backend to the frontend

npm i axios

import axios from 'axios'

### Environment Variables -Dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 

npm install dotenv --save


## Deployment

### `npm run build` 

### Deployment backend, database and frontend

The server deployment is done with heroku cli

The database deployment is done with mongoDB Atlas

The frontend deployment is done with netlify
