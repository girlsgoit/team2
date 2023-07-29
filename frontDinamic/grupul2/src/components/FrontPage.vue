
<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

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
    
        <!-- header section -->
        <header>
            <!-- <a href="#" class="logo">Food<span>Fun</span></a> -->
            <a href="#" class="logo"><img src="img/logo.png" alt="logo"></a>
            <ul class="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>

            DISPLAY EVERY ITEM FROM DATABASE
            Loop through the menus array to render menu items
            <!-- <div v-for="menuItem in menus">
            <p>{{ menuItem.Title }}</p> -->
            <!-- Render other properties of the menuItem object, e.g., Image, Price, etc. -->
            <!-- <img :src="menuItem.Image" style="width: 100px;">
            <p>{{ menuItem.Price }}</p>
            </div> -->
    
        <!-- home section -->
            <section class="home" id="home">
                <div class="home-text">
                    <h1><span>Welcome</span> to The world of Tasty & Fresh Pizza</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <a href="#" class="btn">Choose a Pizza</a>
                </div>
    
                <div class="home-img">
                    <img src="img/home.png" alt="home">
                </div>
            </section>
    
        <!-- contact section -->
            <section class="container">
                <div class="main-text">
                    <h2>Ingredients</h2>
                    <p>Only the Best for You</p>
                </div>
    
                <div class="container-box">
                    <div class="c-mainbox">
                        <div class="container-img">
                            <img src="img/b1.png" alt="box1">
                        </div>
                        <div class="container-text">
                            <p>Delicate Dough</p>
                        </div>
                    </div>
    
                    <div class="c-mainbox">
                        <div class="container-img">
                            <img src="img/b2.png" alt="box2">
                        </div>
                        <div class="container-text">
                            <p>Fresh Tomatoes</p>
                        </div>
                    </div>
    
                    <div class="c-mainbox">
                        <div class="container-img">
                            <img src="img/b3.png" alt="box3">
                        </div>
                        <div class="container-text">
                            <p>Alpine Cheese</p>
                        </div>
                    </div>
    
                    <div class="c-mainbox">
                        <div class="container-img">
                            <img src="img/b4.png" alt="box4">
                        </div>
                        <div class="container-text">
                            <p>Italian Sausage</p>
                        </div>
                    </div>
                </div>
    
            </section>
        
        <!-- about section -->
            <section class="about" id="about">
                <div class="about-img">
                    <img src="img/a.png" alt="">
                </div>
    
                <div class="about-text">
                    <h2>The Delicious Food<br> For a Good Mood</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum?<br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolore pariatur! Enim inventore excepturi laudantium necessitatibus placeat mollitia, incidunt consequatur.</p>
                    <a href="#" class="btn">Choose a Pizza</a>
                </div>
    
            </section>
    
        <!-- menu section -->
        <section class="menu" id="menu">
                <div class="main-text">
                    <h2>Most Popular Pizza</h2>
                    <p>We have selected for You<br> the most exquisite tastes around the world</p>
                </div>
    
                <div class="menu-content">
                    <div class="row">
                        <img src="img/m1.jpg" alt="main-product1">
                        <div class="menu-text">
                            <div class="menu-left">
                                <h4>Margarita</h4>
                            </div>
                            <div class="menu-right">
                                <h5>$17.00</h5>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magnam.</p>
                        <div class="star">
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                        </div>
                    </div>
    
                    <div class="row">
                        <img src="img/m2.jpg" alt="main-product2">
                        <div class="menu-text">
                            <div class="menu-left">
                                <h4>Montanara</h4>
                            </div>
                            <div class="menu-right">
                                <h5>$17.00</h5>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magnam.</p>
                        <div class="star">
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                        </div>
                    </div>
    
                    <div class="row">
                        <img src="img/m3.jpg" alt="main-product3">
                        <div class="menu-text">
                            <div class="menu-left">
                                <h4>Con Carne</h4>
                            </div>
                            <div class="menu-right">
                                <h5>$17.00</h5>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magnam.</p>
                        <div class="star">
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                        </div>
                    </div>
    
                    <div class="row">
                        <img src="img/m4.jpg" alt="main-product4">
                        <div class="menu-text">
                            <div class="menu-left">
                                <h4>Pepperoni</h4>
                            </div>
                            <div class="menu-right">
                                <h5>$17.00</h5>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magnam.</p>
                        <div class="star">
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                            <a href="#"><i class='bx bxs-star' ></i></a>
                        </div>
                    </div>
                </div>
        </section>
    
        <!-- contact section -->
    
            <section class="contact" id="contact">
                <div class="main-contact">
                    <div class="contact-content">
                        <h4>Services</h4>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </div>
    
                    <div class="contact-content">
                        <h4>Delivery</h4>
                        <li><a href="#home">Uber Eats</a></li>
                        <li><a href="#about">DoorDash</a></li>
                        <li><a href="#menu">ChowNow</a></li>
                        <li><a href="#contact">Toast TakeOut</a></li>
                    </div>
    
                    <div class="contact-content">
                        <h4>Contact</h4>
                        <li><a href="#home">Contact Us</a></li>
                        <li><a href="#about">Press Center</a></li>
                        <li><a href="#menu">Careers</a></li>
                        <li><a href="#contact">FAQ</a></li>
                    </div>
    
                    <div class="contact-content">
                        <h4>Follow Us</h4>
                        <li><a href="#home">TikTok</a></li>
                        <li><a href="#about">Twitter</a></li>
                        <li><a href="#menu">Facebook</a></li>
                        <li><a href="#menu">Instagramm</a></li>
                    </div>
                </div>
            </section>
    
            <div class="last-text">
                <p>© Developed 2023 by Ilya Korobeynikov</p>
            </div>
    
        <!-- scroll top -->
        <a href="#home" class="scroll-top">
            <i class='bx bx-up-arrow-alt' ></i>
        </a>
    
        <!-- custom scrollreveal link -->
    </template>
       
<style>
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Raleway', sans-serif;
	text-decoration: none;
	list-style: none;
	scroll-behavior: smooth;
}
:root{
	--text-color: #302e29;
	--main-color: #ff9100;
	--second-color: #858585;
	--bg-color: #fffbf6;
	--big-font: 4.5rem;
	--h2-font: 2.6rem;
	--p-font: 1.1rem;
}
body{
	background: var(--bg-color);
	color: var(--text-color);
}
header{
	position: fixed;
	width: 100%;
	top: 0;
	right: 0;
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;
	padding: 23px 15%;
	transition: all .38s ease;
}
.logo{
	font-size: 30px;
	font-weight: 700;
	color: var(--text-color);
}
span{
	color: var(--main-color);
}
.navbar{
	display: flex;
}
.navbar a{
	color: var(--text-color);
	font-size: var(--p-font);
	font-weight: 600;
	padding: 5px 10px;
	margin: 2px 25px;
	border-bottom: 2px solid transparent;
	transition: all .38s ease;
}
.navbar a:hover{
	border-bottom: 2px solid var(--main-color);
	color: var(--main-color);
}
.h-icons{
	display: flex;
	align-items: center;
	padding: 10px 22px;
	background: var(--main-color);
	border-radius: 5rem;
}
.h-icons i{
	font-size: 22px;
	color: var(--bg-color);
	margin-right: 15px;
	margin-left: 8px;
}
#menu-icon{
	font-size: 32px;
	color: var(--bg-color);
	z-index: 10001;
	cursor: pointer;
	display: none;
}
section{
	padding: 90px 15% 80px;
}
.home{
	height: 88vh;
	width: 100%;
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	gap: 2rem;
}
.home-img img{
	width: 100%;
	height: auto;
}
.home-text h1{
	font-size: var(--big-font);
	line-height: 1.2;
	margin-bottom: 2rem;
}
.home-text p{
	font-size: var(--p-font);
	font-weight: 500;
	color: var(--second-color);
	line-height: 32px;
	margin-bottom: 2.3rem;
}
.btn{
	display: inline-block;
	padding: 14px 26px;
	background: var(--main-color);
	color: var(--bg-color);
	font-size: 15px;
	font-weight: 600;
	border-radius: 5rem;
	transition: all .38s ease;
}
.btn:hover{
	letter-spacing: 1px;
}
header.sticky{
	padding: 10px 15%;
	background: var(--bg-color);
	box-shadow: 0px 4px 15px rgb(0 0 0 / 8%);
}
.container{
	margin-top: 50px;
}

.main-text h2{
	font-size: var(--h2-font);
	margin-bottom: 10px;
}
.main-text p{
	font-size: var(--p-font);
	font-weight: 500;
	color: var(--second-color);
	line-height: 32px;
}
.container-box{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, auto));
	gap: 2rem;
	align-items: center;
	margin-top: 4rem;
}
.c-mainbox{
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.4rem;
	border-radius: 10px;
	height: 90px;
	background: var(--bg-color);
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	transition: all .40s ease;
}
.container-text p{
	font-size: var(--p-font);
	font-weight: 500;
}
.c-mainbox:hover{
	transform: translateX(7px);
	cursor: pointer;
}
.about{
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	gap: 2rem;
}
.about-img img{
	padding-top: 50px;
	height: auto;
	width: 100%;
}
.about-text h2{
	font-size: var(--h2-font);
	margin-bottom: 2rem;
	line-height: 1.3;
}
.about-text p{
	font-size: var(--p-font);
	color: var(--second-color);
	font-weight: 500;
	line-height: 32px;
	margin-bottom: 2.3rem;
}
.menu-content{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, auto));
	gap: 2rem;
	align-items: center;
	margin-top: 4rem;
	cursor: pointer;
}
.row img{
	width: 100%;
	height: auto;
	border-radius: 10px;
}
.row{
	transition: all .40s ease;
}
.menu{
	padding-top: 110px;
}
.menu-text{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 0;
}
.menu-left h4{
	font-size: 23px;
}
.menu-right h5{
	color: var(--main-color);
	font-size: 23px;
}
.row p{
	color: var(--second-color);
	font-size: 15px;
	line-height: 30px;
	margin-bottom: 15px;
}
.star i{
	color: var(--main-color);
	font-size: 17px;
	margin-right: 4px;
}
.row:hover{
	transform: scale(1.02);
}
.contact{
	padding: 50px 15% 40px;
}
.main-contact{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, auto));
	justify-content: center;
	gap: 2rem;
}
.contact-content h4{
	font-size: 20px;
	color: var(--text-color);
	margin-bottom: 1.5rem;
}
.contact-content li{
	margin-bottom: 16px;
}
.contact-content li a{
	display: block;
	color: var(--text-color);
	font-size: 15px;
	font-weight: 500;
	transition: all .40s ease;
}
.contact-content li a:hover{
	transform: translateX(10px);
	color: var(--main-color);
}
.last-text p{
	text-align: center;
	padding: 25px;
	color: var(--text-color);
	font-size: 15px;
	letter-spacing: 1px;
}
.scroll-top{
	position: fixed;
	bottom: 2.2rem;
	right: 2.2rem;
}
.scroll-top i{
	padding: 8px;
	font-size: 1.4rem;
	color: #fff;
	background: var(--main-color);
	border-radius: 5rem;
}

@media (max-width: 1690px){
	section{
		padding: 70px 2%;
		transition: .20s;
	}
	header{
		padding: 11px 2%;
		transition: .20s;
	}
	header.sticky{
		padding: 8px 2%;
		transition: .20s;
	}
	.contact{
		padding: 70px 2%;
		transition: .20s;
	}
}
@media (max-width: 1290px){
	section{
		padding: 80px 2%;
		transition: .20s;
	}
	:root{
		--big-font: 3.2rem;
		--h2-font: 2rem;
		--p-font: 1rem;
		transition: .20s;
	}
	.home{
		height: 80vh;
	}
	.main-text{
		text-align: center;
	}
}
@media (max-width: 880px){
	#menu-icon{
		display: block;
	}
	.navbar{
		position: absolute;
		top: 100%;
		right: -100%;
		width: 250px;
		height: 110vh;
		background: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 180px 40px;
		transition: all .40s ease;
	}
	.navbar a{
		display: block;
		margin: 1.3rem 0;
	}
	.navbar.open{
		right: 0;
	}
}
@media (max-width: 820px){
	:root{
		--big-font: 3rem;
		--h2-font: 1.8rem;
		transition: .20s;
	}
	.home{
		grid-template-columns: 1fr;
		height: 114vh;
	}
	.home-img{
		text-align: center;
	}
	.home-img img{
		width: 100%;
		height: auto;
		max-width: 500px;
	}
	.home-text{
		padding-top: 50px;
	}
	.about{
		grid-template-columns: 1fr;
	}
	.about-img{
		text-align: center;
	}
	.about-img img{
		height: auto;
		max-width: 500px;
		width: 100%;
	}
}
@media (max-height: 680px){
	.container{
		margin-top: 150px;
	}
}
</style>