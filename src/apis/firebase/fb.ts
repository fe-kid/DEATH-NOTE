import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBVTUjQ_WJeo5_xJ-hDDG8fmJPoupH-Dkg',
  authDomain: 'death-note-77961.firebaseapp.com',
  projectId: 'death-note-77961',
  storageBucket: 'death-note-77961.appspot.com',
  messagingSenderId: '531988946556',
  appId: '1:531988946556:web:d970aa680edd089b6a73f9',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
