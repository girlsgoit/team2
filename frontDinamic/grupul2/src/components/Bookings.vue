<template>
  <title>Restaurant Reservation</title>
  <link rel="stylesheet" href="styles.css">
  <h1>Restaurant Reservation</h1>

    <!-- Add more tables here with their schedules -->
    <!-- Example: 
    <div class="table">
      <h3>Table 2</h3>
      <ul class="schedule">
        <li>...</li>
        <li>...</li>
      </ul>
    </div>
    -->

  <div class="reservation-form">
    <h2>Make a Reservation</h2>
    <form>
      <label for="table">Select a Table:</label>
      <select id="table" name="table">
        <option value="table1">Table 1</option>
        <!-- Add options for other tables here -->
        <!-- Example: <option value="table2">Table 2</option> -->
      </select>
      
      <label for="time">Select a Time:</label>
      <input type="time" id="time" name="time" required>
      
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="name">Table:</label>
      <input type="text" id="table" name="table" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <button type="submit">Submit Reservation</button>
    </form>
  </div>

</template>

<script>

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