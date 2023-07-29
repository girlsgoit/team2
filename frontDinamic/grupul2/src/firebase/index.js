// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdMgFkxoWwJxNLiZlO5QG-1H4IHIPwnZY",
  authDomain: "goji-c3d3b.firebaseapp.com",
  projectId: "goji-c3d3b",
  storageBucket: "goji-c3d3b.appspot.com",
  messagingSenderId: "291870552550",
  appId: "1:291870552550:web:688ec407c0bf9c890aa627",
  measurementId: "G-WGTYCHQ8LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
    db
}

// const header = document.querySelector("header");

// window.addEventListener("scroll", function(){
// 	header.classList.toggle("sticky", window.scrollY > 0);

// })

// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
// 	menu.classList.toggle('bx-x');
// 	navbar.classList.toggle('open');
// }

// window.onscroll = () => {
// 	menu.classList.remove('bx-x');
// 	navbar.classList.remove('open');
// }

// const sr = ScrollReveal ({
// 	distance: '30px', 
// 	duration: 2500,
// 	reset: true
// })
// sr.reveal('.home-text',{delay:200, origin:'left'});
// sr.reveal('.home-img',{delay:200, origin:'right'});
// sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});