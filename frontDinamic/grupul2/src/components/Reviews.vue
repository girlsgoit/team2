<script>
import { db } from '@/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const reviews = ref([]);

const fetchData = () => {
  onSnapshot(collection(db, ''), (querySnapshot) => {
    const allReviews = [];
    querySnapshot.forEach((doc) => {
      const review = {
        Title: doc.data().Title,
        Rating: doc.data().Rating,
        Text: doc.data().Text,
        Username: doc.data().Username,
      };
      allReviews.push(review);
    });
    reviews.value = allReviews;
  });
};
onMounted(() => {
  fetchData();
});

</script>

<template>
     <!-- Loop through the menus array to render menu items -->
     <div v-for="review in reviews">
      <p>{{ review.Title }}</p>
      <!-- Render other properties of the menuItem object, e.g., Image, Price, etc. -->
      <p>{{ review.Rating }}</p>
      <p>{{ review.Text }}</p>
      <p>{{ review.Username }}</p>
    </div>
</template>

<style>
</style>