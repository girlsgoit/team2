<script setup>
import { ref, onMounted } from 'vue';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';

// Define the review array as a ref
const review = ref([]);

// Function to fetch reviews from Firestore
async function fetchReviews() {
  try {
    // Query a reference to the subcollection
    const querySnapshot = await getDocs(collection(db, "goji-reviews"));

    // Loop through the query snapshot to get each document
    querySnapshot.forEach((doc) => {
      // Push name and content to the review array
      review.value.push({
        name: doc.data().name,
        content: doc.data().content
      });
    });

    console.log("Review array:", review.value); // Log the populated review array
  } catch (error) {
    console.error("Error fetching reviews: ", error);
  }
}

// Call the fetchReviews function when the component is mounted
onMounted(fetchReviews);

// Define the name and content variables with ref
const name = ref('');
const content = ref('');

// Function to add a new review to Firestore
const SubReview = async () => {
  try {
    const docRef = await addDoc(collection(db, "goji-reviews"), {
      name: name.value,
      content: content.value,
    });
    console.log("Document written with ID: ", docRef.id);
    name.value = '';
    content.value = '';
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
</script>

<template>
<body>

<div class="container">
  <h1>Restaurant Reviews</h1>
  <div id="reviews-container"></div>
  <form id="review-form" @submit.prevent="SubReview">
    <input v-model="name" placeholder="Your name" required />
    <input v-model="content" placeholder="Your review" required />
    <button type="submit">Submit Review</button>
  </form>
</div>
<section>
  <div v-for="rev in review" :key="rev.name">
    <h2>{{ rev.name }}</h2>
    <p>{{ rev.content }}</p>
  </div>
</section>
<br/>

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