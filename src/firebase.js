import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVwpdcwMQcCbDvVVaJaC30jBML6CXJb4k",
  authDomain: "react-todo-dbadd.firebaseapp.com",
  projectId: "react-todo-dbadd",
  storageBucket: "react-todo-dbadd.appspot.com",
  messagingSenderId: "877728340",
  appId: "1:877728340:web:432d66f1f70ee8205513c1",
  measurementId: "G-3GJBK692XD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };