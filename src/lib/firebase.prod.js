import Firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { seedDatabase } from "../seed";

// we need to somehow seed the database


//we need a config here
const config = {
  apiKey: "AIzaSyB_8dbASymZh_3yXJUJbcpgJAN1rqe2ucU",
  authDomain: "netflix-clone-d0119.firebaseapp.com",
  projectId: "netflix-clone-d0119",
  storageBucket: "netflix-clone-d0119.appspot.com",
  messagingSenderId: "694986376536",
  appId: "1:694986376536:web:6f64254acba044107bd12d",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };