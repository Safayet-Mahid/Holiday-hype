// const firebaseConfig = {
//   apiKey: "AIzaSyBG__k9kVYlLqk1FSke3DcE5qlRePjbZEc",
//   authDomain: "travel-agency-mahid.firebaseapp.com",
//   projectId: "travel-agency-mahid",
//   storageBucket: "travel-agency-mahid.appspot.com",
//   messagingSenderId: "1073751517157",
//   appId: "1:1073751517157:web:a7b5396c0a051fbe4f310c"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;
