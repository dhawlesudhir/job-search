import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import ProfilePage from "@/components/Resources/ProfilePage.vue";
import JobView from "@/views/JobViews.vue";
import TeamsView from "@/views/TeamsView.vue";
import LoginPage from "@/views/LoginPage.vue";
import AboutPage from "@/views/AboutPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/jobs/result",
    name: "JobResults",
    component: JobResultsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/profiles",
    name: "AvailableProfiles",
    component: ProfilePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/job/results/:id",
    name: "JobView",
    component: JobView,
    meta: { requiresAuth: true },
  },
  {
    path: "/teams",
    name: "TeamsView",
    component: TeamsView,
  },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/about", name: "AboutPage", component: AboutPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
