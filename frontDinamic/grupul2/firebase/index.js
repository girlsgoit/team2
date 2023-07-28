// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBB_H3dw7b6blbBC8AoxPb38o2Wi5eXtA",
  authDomain: "my-project-107a9.firebaseapp.com",
  projectId: "my-project-107a9",
  storageBucket: "my-project-107a9.appspot.com",
  messagingSenderId: "831106382487",
  appId: "1:831106382487:web:f39869111576a5e27e47d2",
  measurementId: "G-HEJMG19TF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
    db
}