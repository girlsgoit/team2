import { createRouter, createWebHistory } from 'vue-router';
import Menu1 from "./components/Menu1.vue";
import MainPage from "./components/MainPage.vue";
import Bookings from "./components/Bookings.vue";
import Reviews from "./components/Reviews.vue";
import AboutUs from "./components/AboutUs.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
       
        {
            name: "home",
            path: "/",
            component: MainPage
        },
        {
            name:"menu",
            path:"/menu",
            component: Menu1
        },
        {
            name:"bookings",
            path:"/bookings",
            component: Bookings
        },
        {
            name:"reviews",
            path:"/reviews",
            component: Reviews
        },
        {
            name:"aboutUs",
            path:"/aboutUs",
            component: AboutUs
        }
    ],
});