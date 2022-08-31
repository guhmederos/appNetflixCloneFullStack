import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyAtnAntB0dfn3xlPfaxAEAOUw0ooayBBQk",
  authDomain: "netflix-c03d7.firebaseapp.com",
  projectId: "netflix-c03d7",
  storageBucket: "netflix-c03d7.appspot.com",
  messagingSenderId: "811529272162",
  appId: "1:811529272162:web:c43076856176453f05ca3b",
  measurementId: "G-H6N0PVWB01"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;