<script >

</script>

<template>
<body>

<div class="container">
  <h1>Restaurant Reviews</h1>
  <div id="reviews-container"></div>
  <form id="review-form">
    <input type="text" id="name" placeholder="Your Name" required/>
    <textarea id="review" placeholder="Write your review here" required></textarea>
    <button type="submit">Submit Review</button>
  </form>
</div>

</body>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

#reviews-container {
  margin-top: 20px;
}

.review {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.review p {
  margin: 0;
}

form {
  margin-top: 20px;
}

form input,
form textarea,
form button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
}

form textarea {
  resize: vertical;
}
</style>