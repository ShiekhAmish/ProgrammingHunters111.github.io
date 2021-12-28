

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA5vNFRmaIgLM_IA4Vg2teUpuDFrA-f7VM",
  authDomain: "blogging-9bdf1.firebaseapp.com",
  databaseURL: "https://blogging-9bdf1-default-rtdb.firebaseio.com",
  projectId: "blogging-9bdf1",
  storageBucket: "blogging-9bdf1.appspot.com",
  messagingSenderId: "828674923499",
  appId: "1:828674923499:web:f9a2e9ca6d672622a9d7ae",
  measurementId: "G-CNC98WNMYG"
  };
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "firebase/analytics";
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  var database=firebase.database();
  function sendMessage()
  {
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var subject=document.getElementById("subject").value;
  var message=document.getElementById("message").value;
  
  var newMessagekey=database.ref().child('comments').push().key;
  database.ref('comments/' + newMessagekey+ '/Name').set(name);
  database.ref('comments/' + newMessagekey+ '/Email').set(email);
  database.ref('comments/' + newMessagekey+ '/Web_Site').set(subject);
  database.ref('comments/' + newMessagekey+ '/Comment').set(message);
  }
  function submitForm(e)
  {
  e.preventDefault();
  }
  document.querySelector('alert').getElementByClassName.display='block';
  
  function hideAlert()
  {
  document.querySelector('.alert').getElementByClassName.display='none';
  }
  setTimeout(hideAlert,3000);
  
  document.getElementById('home').addEventlistner('submit',submitForm)
