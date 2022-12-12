import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { doc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDqRMuVGCl7GlMwcQ73rE1d6Hg9pZ5-1gk",
  authDomain: "todoapp-a3a07.firebaseapp.com",
  projectId: "todoapp-a3a07",
  storageBucket: "todoapp-a3a07.appspot.com",
  messagingSenderId: "1003668611206",
  appId: "1:1003668611206:web:67638dbddedb7cd5e8b107",
  measurementId: "G-BVK04JRFFD",
};

// khởi tạo app
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Collection ref
export const colRef = collection(db, "users");
