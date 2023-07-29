
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyAdMgFkxoWwJxNLiZlO5QG-1H4IHIPwnZY",
  authDomain: "goji-c3d3b.firebaseapp.com",
  projectId: "goji-c3d3b",
  storageBucket: "goji-c3d3b.appspot.com",
  messagingSenderId: "291870552550",
  appId: "1:291870552550:web:688ec407c0bf9c890aa627",
  measurementId: "G-WGTYCHQ8LM"
} ;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
    db
}

// const reviews = ref([]);

// export async function getReviews() {
//   const querySnapshot = await getDocs(collection(db, "goji-reviews"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// }

// export async function addReviews(name, content){
// // Add a new document with a generated id.
// const docRef = await addDoc(collection(db, "goji-reviews"), {
//   name: name,
//   content: content
// });
// }
 

// export async function deleteReviews(){ 
//    const querySnapshot = await deleteDoc(doc(db, "goji-reviews", "DC"));

// }

// export const washingtonRef = doc(db, "goji-reviews", "DC");

// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
//   capital: true
// });
