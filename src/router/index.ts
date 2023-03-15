import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import ProfilePage from "@/components/Resources/ProfilePage.vue";
import JobView from "@/views/JobViews.vue";
import TeamsView from "@/views/TeamsView.vue";
import LoginPage from "@/views/LoginPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "@/stores/user";

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

function getCurrenUser() {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}

router.beforeEach(async (to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrenUser()) {
      const userStore = useUserStore();
      userStore.userLogin(getCurrenUser());
      console.log("auth", getCurrenUser);
      next();
    } else {
      console.log("no access, redicting to login paghe");
      next({ name: "LoginPage" });
    }
  } else if (to.matched.some((record) => record.name == "LoginPage")) {
    if (await getCurrenUser()) {
      console.log("alredy logged in , redicting to Home");
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    console.log("exe");
    next();
  }
});

export default router;
