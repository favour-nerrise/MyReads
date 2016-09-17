const firebase = require("firebase");
const config = {
    apiKey: "AIzaSyDaQgrxXks2t0sWeeoAX2hk5MkpUqK_iY4",
    authDomain: "myreads-3f8bb.firebaseapp.com",
    databaseURL: "https://myreads-3f8bb.firebaseio.com",
    storageBucket: "myreads-3f8bb.appspot.com",
    messagingSenderId: "834319825330"
};
firebase.initializeApp(config);
const rootRef = firebase.database().ref();
const auth = firebase.auth();


firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    if (error)
        console.log(error)
    else {
        console.log("New user successfully created!")
    }
})

var provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider).then(function(result) {
  // User signed in!
  var accessToken = result.credential.accessToken;
}).catch(function(error) {
  // An error occurred
});


auth.onAuthStateChanged(function(user) {
  if (user) {
    // User signed in!
    var uid = user.uid;
  } else {
    // User logged out
  }
});


var username = $("#email").value;
//console.log($("#email"));
var password = $("password").context.value;

//LOGIN on homepage
$(".btn btn-common").on("click", function() {
    ref.authWithPassword({
        email: "bobtony@firebase.com",
        password: "correcthorsebatterystaple"
    }, function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
    })
})

$(".fa fa-eye").on("click", function(e) {
    ref.authWithPassword({
        "email": username,
        "password": password
    }, function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
    });
});


var ref = new Firebase("https://blinding-torch-5003.firebaseio.com");
var username = document.getElementById("email").value;
var password = document.getElementById("password").value;

// ref.createUser({
//   email: username,
//   password: password,
// }, function(error, userData) {
//   if (error) {
//     switch (error.code) {
//       case "EMAIL_TAKEN":
//         console.log("The new user account cannot be created because the email is already in use.");
//
//         break;
//       case "INVALID_EMAIL":
//         console.log("The specified email is not a valid email.");
//         break;
//       default:
//         console.log("Error creating user:", error);
//     }
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//
//
//     ref.authWithPassword({
//       "email": userData.email,
//       "password": userData.password,
//     }, function(error, authData) {
//       if (error) {
//         console.log("Login Failed!", error);
//       } else {
//       window.location="tutorial.html"
//
//       }
//     });
//   }
// });
