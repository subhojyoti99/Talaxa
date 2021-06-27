firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    // User is sign in
        document.getElementById("user").style.display="block";
        document.getElementById("master").style.display="none";
      
        var user = firebase.auth().currentUser;
      
        if(user != null) {
            
            var email_id = user.email;
            
            document.getElementById("para").innerHTML="Welcome User : " + email_id;
        }
      
  } else {
    // User is signed out
        document.getElementById("user").style.display="none";
        document.getElementById("master").style.display="block";
  }
});

function loging(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
        
        window.alert("Error : " + errorMessage);
  });
}


function logout(){
    
    firebase.auth().signOut();
}