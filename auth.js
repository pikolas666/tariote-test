

const firebaseConfig = {
  apiKey: "hidden",
  authDomain: "tariote.firebaseapp.com",
  databaseURL: "https://tariote-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tariote",
  storageBucket: "tariote.appspot.com",
  messagingSenderId: "hidden",
  appId: "hidden",
  measurementId: "hidden"
};

   
  
    // make auth and firestore references
   
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    

 

  // content script
  // var firebaseRef = firebase.database().ref('adminHTML');
      
  // firebaseRef.once("value").then(function(snapshot){
	// var loginInfo=snapshot.val();
	// console.log(loginInfo)
  // });

    
// create welcome
let welcomename = "Dovile";
let welcomePlace = document.querySelector('.welcome');


function addWelcome() {
      welcomePlace.innerText = `
      Labas, ${welcomename}!`
  };
 
  
// delete welcome

function deleteWelcome() {
    welcomePlace.innerText = '';
};

//hide login
let loginButton = document.querySelector('#loginButton');
function hideLoginButton() {
  loginButton.style.display = "none";
  //show login
}
function showLoginButton() {
  loginButton.style.display = "block";
}

//hide logout
let logoutButton = document.querySelector('#logout');
function hideLogoutButton() {
  logoutButton.style.display = "none";
  //show logout
}
function showLogoutButton() {
  logoutButton.style.display = "block";

}

//show content for admin
// var firebaseRef = firebase.database().ref('adminHTML');
      
//       firebaseRef.once("value").then(function(snapshot){
//         var loginInfo=snapshot.val();
//         console.log(loginInfo)
//       });
// let content = document.querySelector('#content');
// var firebaseRef = firebase.database().ref('adminHTML');
// console.log(firebaseRef);
// firebaseRef.once("value", function(snapshot){
//   var data= snapshot.val();
//   for(let i in data) {
//     console.log(data[i]);
//   }
// })
// function showContent() {
// content.innerHTML = db.value
// }


// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        addWelcome();
        hideLoginButton();
        showLogoutButton();
      console.log('user logged in: ', user);
    } else {
        deleteWelcome();
        showLoginButton();
        hideLogoutButton();

      console.log('user logged out');
    }
  })
  
 
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    });
  
  });
