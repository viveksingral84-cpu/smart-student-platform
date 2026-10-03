import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo17yy7CLRslLP1RxnC82HbPHKNdW9eSg",
  authDomain: "smart-student-platform-59583.firebaseapp.com",
  projectId: "smart-student-platform-59583",
  storageBucket: "smart-student-platform-59583.firebasestorage.app",
  messagingSenderId: "931754559602",
  appId: "1:931754559602:web:cd2034fadf0cbb64a75aeb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;