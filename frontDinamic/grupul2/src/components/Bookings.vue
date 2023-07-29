<template>
     <header id="container1" >
      
      <RouterLink :to = "{name:'home'}"><button class="button1" style="margin-left:0%;margin-top: 150%;"><u><h1>Home</h1></u></button></RouterLink>
      <RouterLink :to = "{name:'menu'}"><button class="button1" style="opacity:50%; margin-left: 90%;margin-top: 160%;"><h1>Menu</h1></button></RouterLink>
      <RouterLink :to = "{name:'aboutUs'}"><button class="button1" style="opacity:50%; margin-left: 180%;margin-top: 150%;"><h1>About</h1></button></RouterLink>
      <RouterLink :to = "{name:'reviews'}"><button class="button1"  style="opacity:50%; margin-left: 210%; margin-top: 112%;" ><h1>Reviews</h1></button></RouterLink>
      <RouterLink :to = "{name:'bookings'}"><button id="button2"  style="opacity:50%;margin-left:180%; margin-top: 62%;"><h1>Book a table</h1></button></RouterLink>
  </header>
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
  
<footer>
<div align="center"> 
 <a href="https://www.facebook.com/gojistudioshk/"> <img class="sponsor" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ></a>
 <a href="https://www.instagram.com/lifesgoji/"> <img class="sponsor" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"></a>
  <a href="https://twitter.com/Goji_investor"><img class="sponsor" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" ></a>
</div>
<div id="div4" align="center">&copy; All rights reserved - Goji Restobar 2023</div>
</footer>
</template>

<script>

</script>

<style>
#container1 {

display: flex;
justify-content: center;
margin: 1%;
margin-top:-5%;
margin-left:-20%;
}
</style>