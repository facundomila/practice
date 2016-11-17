 src="https://www.gstatic.com/firebasejs/3.6.0/firebase.js"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLxlsP9XGpnbwzQ2AbTfEG_IPq1fMrKYA",
    authDomain: "hello-world-614c2.firebaseapp.com",
    databaseURL: "https://hello-world-614c2.firebaseio.com",
    storageBucket: "hello-world-614c2.appspot.com",
    messagingSenderId: "348530014620"
};

firebase.initializeApp(config);

    var db = firebase.database();

    db.ref('users').once('value', function (snapshot) {
    return users = snapshot.val()
});

 document.getElementById("login").innerHTML = "Hello World";

//document.getElementById("login");

