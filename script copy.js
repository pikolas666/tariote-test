
	//firebase app
	// import { initializeApp } from 'firebase/app';
	// import firebase from "firebase/app";
	// import "firebase/storage"; 
		// import { } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js'
	// import { } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js'
	
	// import firebase from "firebase/app";
	// import "firebase/storage"; 
	const firebaseConfig = {
		apiKey: "AIzaSyBc64a7iZHzykTmjN289sre0R0xuOnYJyA",
		authDomain: "tariote.firebaseapp.com",
		projectId: "tariote",
		storageBucket: "tariote.appspot.com",
		messagingSenderId: "323318081530",
		appId: "1:323318081530:web:c9ade23f34baca68506643",
		measurementId: "G-WHYGDY7EHK",
		databaseURL: "https://tariote-default-rtdb.europe-west1.firebasedatabase.app",
	  };

	  firebase.initializeApp(firebaseConfig);


	  function listAll(folder){
		const storageRef = firebase.storage().ref();
		var listRef = storageRef.child(folder);
		listRef.listAll()
		.then((res) => {

			res.prefixes.forEach((folderRef)=> {
				

			}) 
			res.items.forEach((itemRef) => {
				itemRef.getDownloadURL().then((url) =>{
					gallery.innerHTML += `<a href="${url}"><img src="${url}"></a>`
					console.log(url)

				})
				console.log(itemRef)
			})

		}
	)
	  }
	  firebase.initializeApp(firebaseConfig) 
	  const storage = firebase.storage();
	  listAll(galleryFolder)
		
		