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
  <header id="container1" >
      
      <RouterLink :to = "{name:'home'}"><button class="button1" style="margin-left:0%;margin-top: 151%;"><u><h1>Home</h1></u></button></RouterLink>
      <RouterLink :to = "{name:'menu'}"><button class="button1" style="opacity:50%; margin-left: 90%;margin-top: 158%;"><h1>Menu</h1></button></RouterLink>
      <RouterLink :to = "{name:'aboutUs'}"><button class="button1" style="opacity:50%; margin-left: 180%;margin-top: 155%;"><h1>About</h1></button></RouterLink>
      <RouterLink :to = "{name:'reviews'}"><button class="button1"  style="opacity:50%; margin-left: 210%; margin-top: 128%;" ><h1>Reviews</h1></button></RouterLink>
      <RouterLink :to = "{name:'bookings'}"><button id="button2"  style="opacity:50%;margin-left:180%; margin-top: 104%;"><h1>Book a table</h1></button></RouterLink>
  </header>

<div class="container">
  <h1>Restaurant Reviews</h1><br>
<div id="recen"><p>Here you can place reviews regarding our restobar.<br> We appreciate every single review. <br>Thank you !</p></div>

  <div id="reviews-container"></div>
  <form id="review-form" @submit.prevent="SubReview">
    <input v-model="name" placeholder="Your name" required />
    <input v-model="content" placeholder="Your review" required />
    <button type="submit">Submit Review</button>
  </form>
</div>
<section>
  <div v-for="rev in review" :key="rev.name" id="recenzii">
    <h2>{{ rev.name }}</h2>
    <p>{{ rev.content }}</p>
  </div>
</section>
<br/>

<footer>
<div align="center"> 
 <a href="https://www.facebook.com/gojistudioshk/"> <img class="sponsor" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ></a>
 <a href="https://www.instagram.com/lifesgoji/"> <img class="sponsor" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"></a>
  <a href="https://twitter.com/Goji_investor"><img class="sponsor" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" ></a>
</div>
<div id="div4" align="center">&copy; All rights reserved - Goji Restobar 2023</div>
</footer>

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
  background-color: #b69a9a;
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
#recenzii{
  margin-top:1%;
  margin-left:23.98%;
  background-color:rgb(239, 228, 192);
  padding-left:5%;
  padding-right:5%;
  width:52.08%;
}
#recen{
width:40%;
position:absolute;
margin-top:4.5%;
margin-left:-5.4%;
}

.sponsor{
  width:30px;
  margin-top: 10%;
}
</style>