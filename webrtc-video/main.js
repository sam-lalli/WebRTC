import './style.css';
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBtGBWQXpiOXjfQUUEeNL7wUhL8Io1G5TE",
  authDomain: "webrtc-video-dd3d3.firebaseapp.com",
  projectId: "webrtc-video-dd3d3",
  storageBucket: "webrtc-video-dd3d3.appspot.com",
  messagingSenderId: "1038708782616",
  appId: "1:1038708782616:web:0443eafee6eac8027cb56d",
  measurementId: "G-7FJ3M6XE1Z"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();