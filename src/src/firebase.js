import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA0HqZJ9SkBxTfij0JAZ_WOJDhFOa5-KGQ",
    authDomain: "kahanian-8a964.firebaseapp.com",
    databaseURL: "https://kahanian-8a964-default-rtdb.firebaseio.com",
    projectId: "kahanian-8a964",
    storageBucket: "kahanian-8a964.appspot.com",
    messagingSenderId: "517649492810",
    appId: "1:517649492810:web:0d3cdb51952cedeeb3efb3",
    measurementId: "G-ES2PVNM24G"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  
  //firebase.analytics();

  export default fireDb.database().ref();
  