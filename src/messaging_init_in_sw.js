import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAuADzRszzGPtk6MBjjv4lyPrXZrkVyJjA",
  authDomain: "notify-34cb1.firebaseapp.com",
  projectId: "notify-34cb1",
  storageBucket: "notify-34cb1.appspot.com",
  messagingSenderId: "528483537715",
  appId: "1:528483537715:web:7adc2ffd7be0d5bcb9e446",
  measurementId: "G-3LLBRLG30X",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
getToken(messaging, {
  vapidKey:
    " BLIuNLsE6adpKXh4xkyfDvKN8pe8zIjKU2RaNTyZT6HHU5-MHsoZhDUVUyFOImaDlJi_nPEu9Wh6jKzW9h3CHMg ",
}).then((currentToken) => {
  if (currentToken) {
    console.log("Current token: ", currentToken);
  } else {
    console.log("Cannot get current token");
  }
});
