import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDqZYL30mkUn0PjjpKUj65tlcR7PiHD89w',
  authDomain: 'netflix-clone-master-c4017.firebaseapp.com',
  projectId: 'netflix-clone-master-c4017',
  storageBucket: 'netflix-clone-master-c4017.appspot.com',
  messagingSenderId: '637169404352',
  appId: '1:637169404352:web:c20edb35d3263de9692025',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
