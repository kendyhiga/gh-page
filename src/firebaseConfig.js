import * as firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "gh-page.firebaseapp.com",
  databaseURL: "https://gh-page.firebaseio.com",
  projectId: "gh-page",
  storageBucket: "gh-page.appspot.com",
  messagingSenderId: "825478090892",
  appId: "1:825478090892:web:043d98eb1d7c04d19c6ba9",
  measurementId: "G-SRFR5S31XB"
};

firebase.initializeApp(config)

export default firebase
