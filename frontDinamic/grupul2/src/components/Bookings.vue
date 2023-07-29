<template>

<body>
  <h1>Restaurant Table Booking</h1>
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

  <div id="confirmation" style="display: none;">
    <h2>Booking Confirmation</h2>
    <p>Name: <span id="confirmedName"></span></p>
    <p>Email: <span id="confirmedEmail"></span></p>
    <p>Date: <span id="confirmedDate"></span></p>
    <p>Time: <span id="confirmedTime"></span></p>
    <p>Number of Guests: <span id="confirmedGuests"></span></p>
  </div>


</template>

<script>

    document.getElementById('bookingForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const guests = document.getElementById('guests').value;

      // You can add further validation here if needed

      showConfirmation(name, email, date, time, guests);
    });

    function showConfirmation(name, email, date, time, guests) {
      document.getElementById('bookingForm').style.display = 'none';
      document.getElementById('confirmation').style.display = 'block';

      document.getElementById('confirmedName').textContent = name;
      document.getElementById('confirmedEmail').textContent = email;
      document.getElementById('confirmedDate').textContent = date;
      document.getElementById('confirmedTime').textContent = time;
      document.getElementById('confirmedGuests').textContent = guests;
    }


</script>

<style>

</style>