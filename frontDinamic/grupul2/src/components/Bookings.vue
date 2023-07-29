<template>
  <form id="bookingForm">
    <label for="name">Name:</label>
    <input type="text" id="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" required>

    <label for="date">Date:</label>
    <input type="date" id="date" required>

    <label for="time">Time:</label>
    <input type="time" id="time" required>

    <label for="guests">Number of Guests:</label>
    <input type="number" id="guests" min="1" required>

    <button type="submit">Book Table</button>
  </form>
</template>

<script>

   // document.getElementById('bookingForm') ;{
    

      //const name = document.getElementById('name').value;
      //const email = document.getElementById('email').value;
      //const date = document.getElementById('date').value;
     // const time = document.getElementById('time').value;
     // const guests = document.getElementById('guests').value;


  //  };



</script>

<style>

</style>