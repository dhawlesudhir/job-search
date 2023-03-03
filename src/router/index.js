import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import ProfilePage from "@/components/Resources/ProfilePage.vue";
import JobView from "@/views/JobViews.vue";
import TeamsView from "@/views/TeamsView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/jobs/result", name: "JobResult", component: JobResultsView },
  { path: "/profilepage/:id", name: "Profile", component: ProfilePage },
  { path: "/job/results/:id", name: "JobView", component: JobView },
  { path: "/teams", name: "TeamsView", component: TeamsView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
