// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDE4l3SxQOZPx8E53lwAUS-QrRNYs08pRU',
  authDomain: 'library-system-5db5a.firebaseapp.com',
  projectId: 'library-system-5db5a',
  storageBucket: 'library-system-5db5a.appspot.com',
  messagingSenderId: '1068457732318',
  appId: '1:1068457732318:web:80086ffbc1ec97ef417a4f',
};

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}
