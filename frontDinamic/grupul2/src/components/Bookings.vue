<template>
  <header id="container1" >
      
      <RouterLink :to = "{name:'home'}"><button class="button1" style="margin-left:0%;margin-top: 151%;"><u><h1>Home</h1></u></button></RouterLink>
      <RouterLink :to = "{name:'menu'}"><button class="button1" style="opacity:50%; margin-left: 90%;margin-top: 158%;"><h1>Menu</h1></button></RouterLink>
      <RouterLink :to = "{name:'aboutUs'}"><button class="button1" style="opacity:50%; margin-left: 180%;margin-top: 155%;"><h1>About</h1></button></RouterLink>
      <RouterLink :to = "{name:'reviews'}"><button class="button1"  style="opacity:50%; margin-left: 210%; margin-top: 128%;" ><h1>Reviews</h1></button></RouterLink>
      <RouterLink :to = "{name:'bookings'}"><button id="button2"  style="opacity:50%;margin-left:180%; margin-top: 104%;"><h1>Book a table</h1></button></RouterLink>
  </header>
  <title>Restaurant Reservation</title>
  <div class="reservation-form">
    <h2>Make a Reservation</h2>
    <form>
      <label for="table">Select a Table:</label>
      <select v-model="table" id="table" name="table">
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
        <!-- Add options for other tables here -->
        <!-- Example: <option value="table2">Table 2</option> -->
      </select>
      
      <label for="time">Select a Time:</label>
      <input v-model="time" type="time" id="time" name="time" required>
      
      <label for="name">Your Name:</label>
      <input v-model="name" type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" name="email" required><br>
      
      <button style="color:black" type="submit">Submit Reservation</button>
    </form>
  </div>
 <div align="center"><img src=https://i.pinimg.com/originals/21/e8/70/21e870f7b1a405c001459b5dc2150cc4.jpg></div>

 <footer>
<div align="center"> 
 <a href="https://www.facebook.com/gojistudioshk/"> <img class="sponsor" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ></a>
 <a href="https://www.instagram.com/lifesgoji/"> <img class="sponsor" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"></a>
  <a href="https://twitter.com/Goji_investor"><img class="sponsor" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" ></a>
</div>
<div id="div4" align="center">&copy; All rights reserved - Goji Restobar 2023</div>
</footer>


</template>

<script setup>
import { ref } from 'vue';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';

// Define the name and content variables with ref
const time = ref('');
const email = ref('');
const name = ref('');
const table = ref('');

// Function to add a new review to Firestore
const SubReview = async () => {
  try {
    const docRef = await addDoc(collection(db, "goji-reservation"), {
      time: time.value,
      email: email.value,
      name: name.value,
      table: table.value
    });
    console.log("Document written with ID: ", docRef.id);
    time.value = '',
    email.value = '',
    name.value = '',
    table.value = ''
  } catch (error) {
    console.error("Error adding document: ", error);
  }
  
};

</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1, h2, h3 {
  text-align: center;
}

.timetable {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  position: fixed;
  
}

.table {
  border: 1px solid #ddd;
  padding: 10px;
}

.schedule {
  list-style: none;
  padding: 0;
}

.reservation-form {
  margin-top: 50px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

label, input, select {
  display: block;
  margin-bottom: 10px;
}

button {
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}


</style>