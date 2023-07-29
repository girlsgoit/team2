<template>
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
      
      <button @click="SubReview()" type="button">Submit Reservation</button>
    </form>
  </div>

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
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

</style>