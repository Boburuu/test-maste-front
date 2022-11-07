import { createRouter, createWebHistory } from "vue-router";
import Home from "./../Views/AppHome.vue";
import Artist from "./../Views/AppArtist.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/artist/:id",
      name: "artist",
      component: Artist,
      props: true,
    },
  ],
});
