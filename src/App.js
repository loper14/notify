// import icon from "./logo192.png";

// const App = () => {
//   let a = () => {
//     setTimeout(() => {
//       Notification.requestPermission().then((perm) => {
//         if (perm === "granted") {
//           console.log("working");
//           return new Notification("Title", {
//             body: "Success",
//             icon: icon,
//           });
//         }
//       });
//     }, 10000);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "100%",
//         justifyContent: "center",
//         height: "100vh",
//         alignItems: "center",
//         backgroundColor: "red",
//       }}
//     >
//       <button
//         style={{
//           width: "200px",
//           height: "100px",
//           backgroundColor: "blue",
//         }}
//         onClick={() => a()}
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAuADzRszzGPtk6MBjjv4lyPrXZrkVyJjA",
  projectId: "notify-34cb1",
  messagingSenderId: "528483537715",
  appId: "1:528483537715:web:7adc2ffd7be0d5bcb9e446",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const messaging = firebase.messaging();

  const handleButtonClick = () => {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
          return messaging.getToken();
        } else {
          throw new Error("Notification permission denied.");
        }
      })
      .then((token) => {
        console.log("FCM token:", token);
        messaging.showNotification("Hello from FCM!", {
          body: "This is a notification sent from Firebase Cloud Messaging.",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Send Notification</button>
    </div>
  );
};

export default App;
