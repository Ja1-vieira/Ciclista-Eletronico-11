import firebase from "firebase";

  const firebaseConfig = {
  apiKey: "AIzaSyAtz7jeOHLa6jF4pxw8wFQnHzq8phJ0HDg",
  authDomain: "ciclista-eletronico-3ce7b.firebaseapp.com",
  databaseURL: "https://ciclista-eletronico-3ce7b-default-rtdb.firebaseio.com",
  projectId: "ciclista-eletronico-3ce7b",
  storageBucket: "ciclista-eletronico-3ce7b.appspot.com",
  messagingSenderId: "182721066156",
  appId: "1:182721066156:web:3bbc89918691d787771b09"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
