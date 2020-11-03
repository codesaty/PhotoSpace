import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/Home/HomePage";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/Photos",
        name: "PhotosPage",
        component: () =>
            import("../views/Photos/PhotosPage")

    },
    {
        path: "/Contact",
        name: "ContactPage",
        component: () => import("../views/Contact/ContactPage.vue")

    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
