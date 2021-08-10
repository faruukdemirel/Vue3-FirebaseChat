
import firebase from "firebase";
import "firebase/database";

const config={
    //API KEYS
    apiKey: "AIzaSyA6pBGeDbPBnyehm6-RfLBy79-MELA56Mc",
    authDomain: "vue-chat-3508d.firebaseapp.com",
    projectId: "vue-chat-3508d",
    storageBucket: "vue-chat-3508d.appspot.com",
    messagingSenderId: "48125012966",
    appId: "1:48125012966:web:3438362209c389057cc427"
}
const db=firebase.initializeApp(config);
export default db