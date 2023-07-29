<template>
    
    <body class = "body1">
        <header id="container1" >
      
      <RouterLink :to = "{name:'home'}"><button class="button1" style="margin-left:0%;margin-top: 150%;"><u><h1>Home</h1></u></button></RouterLink>
      <RouterLink :to = "{name:'menu'}"><button class="button1" style="opacity:50%; margin-left: 90%;margin-top: 160%;"><h1>Menu</h1></button></RouterLink>
      <RouterLink :to = "{name:'aboutUs'}"><button class="button1" style="opacity:50%; margin-left: 180%;margin-top: 150%;"><h1>About</h1></button></RouterLink>
      <RouterLink :to = "{name:'reviews'}"><button class="button1"  style="opacity:50%; margin-left: 210%; margin-top: 112%;" ><h1>Reviews</h1></button></RouterLink>
      <RouterLink :to = "{name:'bookings'}"><button id="button2"  style="opacity:50%;margin-left:180%; margin-top: 62%;"><h1>Book a table</h1></button></RouterLink>
  </header>
    <h3 class = "abUs">About Us</h3>
    <p> <h2 calss = "welcome" align="center">Welcome to Goji Restobar!</h2> <br> </p>
    
       <p class = "text"> Our Culinary Adventure: <br>
        At the core of Goji lies our passion for culinary excellence.Our team of talented chefs crafts a diverse menu that celebrates global flavors while infusing a touch of local inspiration. From sizzling starters to mouthwatering main courses and indulgent desserts, every dish on our menu is a masterpiece created with love and care. We source the freshest, highest-quality ingredients, ensuring each bite is a celebration of taste and texture. <br>
        
        Impeccable Service: <br>
        Hospitality is our forte, and our attentive staff is here to cater to your every need. Whether you're seeking a romantic dinner for two, a lively gathering with friends, or a corporate event, our team will go above and beyond to make your experience unforgettable. Expect warm smiles, seamless service, and a genuine commitment to ensuring your time at Goji is nothing short of delightful. <br>
        
        A Vibrant Atmosphere: <br>
        Step into a world where design meets comfort. Our thoughtfully designed interior reflects a modern and chic aesthetic, exuding a sense of warmth and sophistication. Whether you choose our cozy booths, the lively bar area, or our charming outdoor patio, every corner of Taste Haven has been carefully curated to create an atmosphere that perfectly complements your dining journey. <br>
        
        Community and Sustainability: <br>
        At Goji, we believe in giving back to the community that has embraced us with open arms. We actively support local charities, source ingredients from ethical suppliers, and implement sustainable practices to reduce our environmental footprint. By dining with us, you become a part of this meaningful endeavor to create a better, greener world. <br>
        
        We are thrilled to welcome you to Goji Restobar, where every dish tells a story, every sip sparks joy, and every moment is an experience to cherish. Join us as we embark on a culinary adventure filled with flavors, laughter, and camaraderie. <br>
        
        Come as you are, leave with a smile. Cheers to creating lasting memories together!</p>
        
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
    
    <script>
    
    </script>
    
    <style>

     .body1{
        color: rgb(151, 189, 147);
        margin: 0;
        background-image: url(https://static.tildacdn.com/tild3332-3133-4234-a665-383363313231/-/resize/504x/desktop-main_backgro.jpg);
        background-size: 300%;
      
    }
    
    .abUs {
      color: white;
      text-align: center;
      font-size: 70px;
      stroke: black;
    }
  
    
    .text {
      font-family: 'Times New Roman', Times, serif;
      font-size: 20px;
      padding:20px 70px;
      text-align: center;
      color: rgb(151, 189, 147);
    }
    .welcome {
        font-size: 50px;
        text-align: center;
        color: rgb(151, 189, 147);
        padding: 0;
    }
    #container1 {

display: flex;
justify-content: center;
margin: 1%;
margin-top:-5%;
margin-left:-20%;
}

    
    </style>