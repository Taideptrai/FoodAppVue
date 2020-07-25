import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBZLgEMThCeTygrVrJ8lEZVVYJ7ym-Eb7A",
    authDomain: "prep-meal.firebaseapp.com",
    databaseURL: "https://prep-meal.firebaseio.com",
    projectId: "prep-meal",
    storageBucket: "prep-meal.appspot.com",
    messagingSenderId: "963139854865",
    appId: "1:963139854865:web:d0dd7acef2c5027e2947b0",
    measurementId: "G-5PPPPZ5HFV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
