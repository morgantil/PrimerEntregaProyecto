import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBZqI-xomiv6Dus5D5Us5i1_mhiPi0TEvI",
  authDomain: "proyectocoder-9dddd.firebaseapp.com",
  projectId: "proyectocoder-9dddd",
  storageBucket: "proyectocoder-9dddd.appspot.com",
  messagingSenderId: "223603362679",
  appId: "1:223603362679:web:8ef92120199dd11774af72"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
  

  const db=getFirestore(app);

  export default db