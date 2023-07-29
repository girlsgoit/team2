
=======
<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { RouterLink } from "vue-router"

export default{
  name:"MainPage",
  data: function(){
    return{

    }
  },
  components: {
    RouterLink
  }
}

const menus = ref([]);

// Function to fetch data from Cloud Firestore
const fetchData = () => {
  onSnapshot(collection(db, 'goji-menu'), (querySnapshot) => {
    const menuData = [];
    querySnapshot.forEach((doc) => {
      const menuItem = {
        Title: doc.data().Title,
        Image: doc.data().Image,
        Price: doc.data().Price,
      };
      menuData.push(menuItem);
    });
    menus.value = menuData;
  });
};
onMounted(() => {
  fetchData();
});


</script>



  <template>
  <title>MOJO HOME</title>
  <link rel="stylesheet" href="menu.css" />
  <link
    rel="icon"
    href="https://i.pinimg.com/originals/7d/f7/ab/7df7ab241e2e9601b5b4be5179af0589.png"
  />
  <header id="container1">
    <img
      id="img1"
      src="https://static.tildacdn.com/tild3865-3761-4537-b465-373432643132/logo_1.svg"
    />

<link rel="stylesheet" href="menu.css">
<link rel="icon" href="https://i.pinimg.com/originals/7d/f7/ab/7df7ab241e2e9601b5b4be5179af0589.png">
<header id="container1">
    <img id="img1" src="https://static.tildacdn.com/tild3865-3761-4537-b465-373432643132/logo_1.svg">
        <RouterLink :to = "{name:'home'}"><button class="button1"><u><h1>Home</h1></u></button></RouterLink>
        <RouterLink :to = "{name:'menu'}"><button class="button1" style="opacity:50%; margin-left: 3%;"><h1>Menu</h1></button></RouterLink>
        <RouterLink :to = "{name:'bookings'}"><button class="button1"  style="opacity:50%; margin-left: 3%;"><h1>Book a table</h1></button></RouterLink>
        <RouterLink :to = "{name:'aboutUs'}"><button class="button1" style="opacity:50%; margin-left: 3%;"><h1>About</h1></button></RouterLink>
        <RouterLink :to = "{name:'reviews'}"><button class="button1"  style="opacity:50%; margin-left: 3%;" ><h1>Reviews</h1></button></RouterLink>

</header>
<section id="container2">
<img class="img2" style="animation-delay: 0.5s;" src="https://thumb.tildacdn.com/tild6234-3233-4565-b830-353662316634/-/resize/432x/-/format/webp/IMG_3305.JPG">
<img class="img2" style="animation-delay: 0.8s;" src="https://static.tildacdn.com/tild3938-6264-4661-b537-366464323366/Rectangle_3.svg">
<img class="img2" style="animation-delay: 1.2s;" src="https://thumb.tildacdn.com/tild3435-6462-4364-a237-326161386565/-/resize/503x/-/format/webp/feel_the_mojo.png">
</section>

    <button
      onclick="window.open('https://htmlcolorcodes.com/')"
      class="button1"
    >
      <u><h1>Home</h1></u>
    </button>
    <button
      onclick="window.open('https://htmlcolorcodes.com/')"
      class="button1"
      style="opacity: 50%; margin-left: 3%"
    >
      <h1>Menu</h1>
    </button>
    <button
      onclick="window.open('https://htmlcolorcodes.com/')"
      class="button1"
      style="opacity: 50%; margin-left: 3%"
    >
      <h1>About</h1>
    </button>
    <button
      onclick="window.open('https://htmlcolorcodes.com/')"
      id="button2"
      style="border: none; margin-left: 20%"
    >
      <h1>
        <img
          id="img1"
          src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg"
        />
      </h1>
    </button>
    <button onclick="window.open('https://htmlcolorcodes.com/')" id="button2">
      <h1>Book a table</h1>
    </button>
  </header>
  <section id="container2">
    <img
      class="img2"
      style="animation-delay: 0.5s"
      src="https://thumb.tildacdn.com/tild6234-3233-4565-b830-353662316634/-/resize/432x/-/format/webp/IMG_3305.JPG"
    />
    <img
      class="img2"
      style="animation-delay: 0.8s"
      src="https://static.tildacdn.com/tild3938-6264-4661-b537-366464323366/Rectangle_3.svg"
    />
    <img
      class="img2"
      style="animation-delay: 1.2s"
      src="https://thumb.tildacdn.com/tild3435-6462-4364-a237-326161386565/-/resize/503x/-/format/webp/feel_the_mojo.png"
    />
  </section>
  <section id="container3">
    <div id="div1">
      <h1>About us</h1>
    </div>

    <div id="div2">
      MOJO restobar is a 24/7 Casual Dining restaurant with a harmonious
      combination of European and Japanese cuisine and a cocktail bar.
      <br /><br />
      MOJO is a place where mood is created. Guests literally plunge into
      another dimension filled with all the joys, blessings and festive mood,
      regardless of the purpose and time of the visit.
    </div>
  </section>
  <section id="imagine">
    <img
      id="img3"
      src="https://static.tildacdn.com/tild3235-3530-4733-b132-346231313135/Rectangle_19.svg"
    />
    <img
      id="img2"
      src="https://thumb.tildacdn.com/tild3564-6365-4530-b934-323666646435/-/resize/492x/-/format/webp/Rectangle_18.jpg"
    />
  </section>

  <section id="containerimagine">
    <img
      id="img4"
      src="https://static.tildacdn.com/tild3239-6565-4536-b362-366363626436/ark_outline.svg"
    />
    <img
      id="img5"
      src="https://thumb.tildacdn.com/tild3635-6139-4030-b730-366239353234/-/format/webp/blur-back-white.png"
    />
=======
    <!-- Loop through the menus array to render menu items -->
    <div v-for="menuItem in menus">
      <p>{{ menuItem.Title }}</p>
      <!-- Render other properties of the menuItem object, e.g., Image, Price, etc. -->
      <img :src="menuItem.Image" style="width: 100px;">
      <p>{{ menuItem.Price }}</p>
    </div>


<div id="div2">
    MOJO restobar is a 24/7 Casual Dining restaurant with a harmonious combination of European and Japanese cuisine and a cocktail bar.
<br><br>
    MOJO is a place where mood is created. Guests literally plunge into another dimension filled with all the joys, blessings and festive mood, regardless of the purpose and time of the visit.
</div>

</section>
<section id="imagine">
    <img id="img3" src="https://static.tildacdn.com/tild3235-3530-4733-b132-346231313135/Rectangle_19.svg">
    <img id="img2" src="https://thumb.tildacdn.com/tild3564-6365-4530-b934-323666646435/-/resize/492x/-/format/webp/Rectangle_18.jpg">
</section>

<section id="containerimagine">

<img id="img4" src="https://static.tildacdn.com/tild3239-6565-4536-b362-366363626436/ark_outline.svg">
<img id="img5" src="https://thumb.tildacdn.com/tild3635-6139-4030-b730-366239353234/-/format/webp/blur-back-white.png">

<div id="div3"><h1>MENU</h1></div>

</section>
>>>>>>> a4941d38cbde4a3f07069195409e194a4417e221:frontDinamic/grupul2/src/components/MainPage.vue

    <div id="div3"><h1>MENU</h1></div>

</template>

<style>
body {
  margin: 0;
  background-image: url(https://static.tildacdn.com/tild3332-3133-4234-a665-383363313231/-/resize/504x/desktop-main_backgro.jpg);
  background-size: 300%;
}
#img1 {
  margin: 4%;
  margin-left: 6%;
}
.button1 {
  border: none;
  background: none;
  font-size: 65%;
  color: rgb(230, 230, 230);
  margin-left: 6%;
}
#container1 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2%;
}
#button2 {
  background: none;
  font-size: 50%;
  color: rgb(230, 230, 230);
  border-color: rgb(230, 230, 230);
  padding-left: 3%;
  padding-right: 3%;
}
#button2,
.button1 {
  transition: transform 0.2s ease-in-out;
}

#button2:hover {
  transform: scale(1.1);
}
.button1:hover {
  transform: scale(1.1);
}
#img1 {
  height: 30px;
}

#container2 {
  display: flex;
  justify-content: center;
  flex-direction: unset;
  align-items: center;
}

.img2 {
  position: absolute;
  animation-name: poza;
  opacity: 0%;
  margin-top: 50%;
  animation-fill-mode: forwards;
  animation-duration: 0.8s;
}
@keyframes poza {
  0% {
    margin-top: 40%;
    opacity: 0%;
  }
  100% {
    margin-top: 50%;
    opacity: 100%;
  }
}
#container3 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55%;
}
#div1 {
  color: rgb(230, 230, 230);
  font-size: 400%;
  width: 40%;
  text-align: center;
}
#div2 {
  color: rgb(230, 230, 230);
  font-size: 200%;
  width: 60%;
}

#img2 {
  position: absolute;
  padding: 6%;
}

#img3 {
  position: absolute;
  margin-top: 3%;
  width: 50%;
  height: 50%;
  padding: 6%;
}

#img4 {
  position: absolute;
  width: 115%;
  margin-top: 14%;
}

#img5 {
  position: absolute;
  width: 115%;
  margin-top: 27%;
}

#containerimagine {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100%;
}
#div3 {
  position: absolute;
  font-size: 250%;
  margin-top: -100%;
  animation-name: menu;
  animation-duration: 1.5s;
  animation-play-state: running;
}

@keyframes menu {
  0% {
    opacity: 0%;
    margin-top: -110%;
  }
  100% {
    opacity: 100%;
    margin-top: -100%;
  }
}
</style>
