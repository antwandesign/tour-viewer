import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:tourId",
      component: () => import("../views/Tour/TourLayout.vue"),
      children: [
        {
          path: "",
          name: "tour",
          component: () => import("../views/Tour/TourView.vue"),
        },
        {
          path: ":floorId",
          name: "floor",
          component: () => import("../views/Tour/FloorView.vue"),
        },

        {
          path: ":floorId/:hotspotId",
          name: "hotspots",
          component: () => import("../views/Tour/HotspotsView.vue"),
        },
      ],
    },
  ],
});

export default router;
