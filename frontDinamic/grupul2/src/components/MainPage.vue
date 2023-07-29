
=======
<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { RouterLink } from "vue-router";



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
},
);
components:{
   RouterLink
   }

</script>


<template>
      <title>Goji-restobar Home</title>
      <link rel="stylesheet" href="home.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Lisu+Bosa:wght@900&family=Lumanosimo&family=Poppins:ital,wght@1,200&family=Prompt:wght@200&display=swap" rel="stylesheet">
      <link rel="icon" href="https://i.pinimg.com/originals/7d/f7/ab/7df7ab241e2e9601b5b4be5179af0589.png"
      />
      <div align="center"><img style="margin-left:-32%" class="black" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8VFRUVDxUPFRUPFRUPFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKys3Ny0rKysrNysrNysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDERFAQAAAAAAACigioIqooAioqCoAoCKogCiKACAACACgqKg5FRQAABQQAAAABBQBQgKACCCoIogCgCgAACgAiACgoIICKAAKmCgigKigCGKgKAgAACKAACCoIogqqAgACACgCooIoIAqIKIIAooCKiooCKgAAKIoAACoAqACCoIAAAAKigAAKgAAKAAgqKgAKAIAAAqAAAoigAAAAVKoCAKEFEQABFBQBUVA0AAAAUQBAVAAAFQAAAABBUBVAAEUAAAAAAAAAFBAADAAAARcFEFRAAAAAAAAEAAFQFUAAIAIoACAqoAAoIAqACKAAAAgoCACAAoAIAAAKACCiAqgAAAAAAAoiggCgAAqQQAFUwBEQVAABAAABQAQAAAFFEVFAAAAAAAAAVQRUQFQBagUABQRUQAFQAAAQAAABQAQVAVUUAAAAAVFBFEUUEQAAAAAAQBUAAAAAAAEAAUFRQARFEUUAAVFBFAEAUAAAAAEQQFAAAAABAAUAEBUUUAAAAAAABQAFQAAUQAAAQqRQEhQAUARYAJQAWEAABAAFIAotQEBYAJVACigEAUf/2Q==">
      <img
      id="img1"
      src="https://i.pinimg.com/750x/48/93/bc/4893bc873375d837f53a2add32ab1dfc.jpg" /><img class="black" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8VFRUVDxUPFRUPFRUPFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKys3Ny0rKysrNysrNysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDERFAQAAAAAAACigioIqooAioqCoAoCKogCiKACAACACgqKg5FRQAABQQAAAABBQBQgKACCCoIogCgCgAACgAiACgoIICKAAKmCgigKigCGKgKAgAACKAACCoIogqqAgACACgCooIoIAqIKIIAooCKiooCKgAAKIoAACoAqACCoIAAAAKigAAKgAAKAAgqKgAKAIAAAqAAAoigAAAAVKoCAKEFEQABFBQBUVA0AAAAUQBAVAAAFQAAAABBUBVAAEUAAAAAAAAAFBAADAAAARcFEFRAAAAAAAAEAAFQFUAAIAIoACAqoAAoIAqACKAAAAgoCACAAoAIAAAKACCiAqgAAAAAAAoiggCgAAqQQAFUwBEQVAABAAABQAQAAAFFEVFAAAAAAAAAVQRUQFQBagUABQRUQAFQAAAQAAABQAQVAVUUAAAAAVFBFEUUEQAAAAAAQBUAAAAAAAEAAUFRQARFEUUAAVFBFAEAUAAAAAEQQFAAAAABAAUAEBUUUAAAAAAABQAFQAAUQAAAQqRQEhQAUARYAJQAWEAABAAFIAotQEBYAJVACigEAUf/2Q==">
</div>
      <header id="container1" >
      
          <RouterLink :to = "{name:'home'}"><button class="button1" style="margin-left:0%"><u><h1>Home</h1></u></button></RouterLink>
          <RouterLink :to = "{name:'menu'}"><button class="button1" style="opacity:50%; margin-left: 90%;"><h1>Menu</h1></button></RouterLink>
          <RouterLink :to = "{name:'aboutUs'}"><button class="button1" style="opacity:50%; margin-left: 180%;"><h1>About</h1></button></RouterLink>
          <RouterLink :to = "{name:'reviews'}"><button class="button1"  style="opacity:50%; margin-left: 210%; margin-top: 74%;" ><h1>Reviews</h1></button></RouterLink>
          <RouterLink :to = "{name:'bookings'}"><button id="button2"  style="opacity:50%;margin-left:180%; margin-top: 40%;"><h1>Book a table</h1></button></RouterLink>
      </header>
      <section id="container2">
        <img
          class="img2"
          style="animation-delay: 0.5s" src="8cacd0faeed25dc5860f560f24f574dd.jpg">
        <img
          class="img2"
          style="animation-delay: 0.8s ; "
          src="https://static.tildacdn.com/tild3938-6264-4661-b537-366464323366/Rectangle_3.svg"
        />

     
        <div id="div1">
          <h1>About us</h1>
          Goji restobar is a 24/7 Casual Dining restaurant with a harmonious
          combination of European and Japanese cuisine and a cocktail bar.
          <br />
          Goji is a place where mood is created. Guests literally plunge into
          another dimension filled with all the joys, blessings and festive mood,
          regardless of the purpose and time of the visit.
        </div>
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
 
        <div id="div3"><h1>MENU</h1></div>
      </section>
      <div id="containermeniu">
        <div style="border-radius:50% 0 0 0 ; background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkrn4KDuR8sc7XuJa0ff9DLJ4ewPiNF4sTA&usqp=CAU);" class="meniu"><button class="buton" onclick="window.open('')"><h1>European menu</h1></button></div>
        <div style="border-radius:0 0 0 0 ; background-image: url(download.jpg);" class="meniu"><button class="buton" onclick="window.open('')"><h1>Drinks</h1></button></div>
        <div style="border-radius:0 50% 0 0 ; background-image: url(https://thumb.tildacdn.com/stor3638-6535-4062-a236-333339343234/-/format/webp/46915269.jpg);" class="meniu"><button class="buton" onclick="window.open('')"><h1>Deserts</h1></button></div>
</div>
      
<div id="text1" ><h1><i>Feel the Goji...</i></h1></div>
<div id="text2" ><h1><i>With your heart.</i></h1></div>
  <img id="reclama" src="https://thumb.tildacdn.com/tild6261-3635-4933-b635-613439326132/-/format/webp/desk-gallery.png" >


<footer>
<div align="center"> 
 <a href="https://www.facebook.com/gojistudioshk/"> <img class="sponsor" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ></a>
 <a href="https://www.instagram.com/lifesgoji/"> <img class="sponsor" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"></a>
  <a href="https://twitter.com/Goji_investor"><img class="sponsor" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" ></a>
</div>
<div id="div4" align="center">&copy; All rights reserved - Goji Restobar 2023</div>



</footer>
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
  border-radius: 100%;
}
.button1 {
  border: none;
  background: none;
  font-size: 65%;
  color: rgb(230, 230, 230);
  cursor: pointer;
  margin-top:100%;
}
#container1 {

  display: flex;
  justify-content: center;
  margin: 1%;
  margin-top:-5%;
  margin-left:-20%;
}
#button2 {
  background: none;
  font-size: 50%;
  color: rgb(230, 230, 230);
  border-color: rgb(230, 230, 230);
  padding-left: 3%;
  padding-right: 3%;
  cursor: pointer;
  margin-top:100%;
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
  height: 190px;
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
  margin-left: -50%;
  margin-top: 7%;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}
@keyframes poza {
  0% {
    margin-top: -4%;
    opacity: 0%;
  }
  100% {
    margin-top: 20%;
    opacity: 100%;
  }}

@keyframes text {
    0% {
      margin-top: -7%;
      opacity: 0%;
    }
    100% {
      margin-top: 14%;
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
  font-size: 200%;
  width: 40%;
  margin-left: 50%;
  text-align: center;
  opacity:0%;
  animation-name:text ;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-duration: 1s;
font-family: 'Prompt', sans-serif;

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
#container1 {

display: flex;
justify-content: center;
margin: 1%;
margin-top:0%;
margin-left:-20%;
}
#img4 {
  position: absolute;
  width: 100%;
  margin-top: -45%;
}

#img5 {
  position: absolute;
  width: 100%;
  margin-top: -30%;
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
  opacity: 0%;
  color:black;
  animation-delay: 2s;
  margin-left:2%;
  animation-name: menu;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes menu {
  0% {
    opacity: 0%;
    margin-top: -150%;
  }
  100% {
    opacity: 100%;
    margin-top: -140%;
  }
}
#containermeniu{ position:absolute;
  display:flex;
  justify-content: center;
  margin-left:32%;
  margin-top: -65%;
}

.meniu{position:relative;
       border:solid black 1px;
       width:100%;
       padding:4%;
       padding-left:18%;
       padding-right:18%;
       transition: filter 0.3s ease-in-out;
       line-height: 200%;
       text-align:center;
       margin-left:20%;
       background-size: cover;
       cursor: pointer;
}
.buton{
  border:none;
  background: none;
  cursor: pointer;
  font-size:100%;
  opacity:0%;
  transition: opacity 0.3s ease-in-out;
  color:rgb(230, 230, 230);

}
.meniu:hover {
  filter: brightness(70%);
}

.meniu:hover .buton {opacity:100%;}
#reclama{position: absolute;
  width:85%;
  margin-left:7%;
  margin-top:-10%;

}

#text1{font-size:250%;
      position:absolute;
      color:black;
      margin-top:-50%;
      margin-left:14%;

}

#text2{font-size:250%;
  position:absolute;
  margin-top:-35%;
  margin-left:45%;
  color:black;

}

.sponsor{
  width:30px;
  margin-top: 51%;
}
#div4{ 
  font-size: 150%;
  margin-top:3%;
  margin-left:0%;
  color:rgb(230, 230, 230);}
.black{width:450px;
height:3px;
position:absolute;
margin-top:11%;
} 
#button2{ width:150px;
  background-color: none;
}
  </style>