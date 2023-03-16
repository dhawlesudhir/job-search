import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@/index.css";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCggVZY8ALm4Xqzt4wnN_y4hZybb52iU-E",
  authDomain: "vuejs-practice-b7505.firebaseapp.com",
  databaseURL:
    "https://vuejs-practice-b7505-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vuejs-practice-b7505",
  storageBucket: "vuejs-practice-b7505.appspot.com",
  messagingSenderId: "765013991673",
  appId: "1:765013991673:web:2a4cdb8b28d886d3164228",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//importing icons below
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);
library.add(faGoogle);

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
