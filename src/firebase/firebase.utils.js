import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCI61JDaRLs_jAtDM3C7jwWmPqstE7gCUI',
  authDomain: 'shop-db-e5f0c.firebaseapp.com',
  databaseURL: 'https://shop-db-e5f0c.firebaseio.com',
  projectId: 'shop-db-e5f0c',
  storageBucket: '',
  messagingSenderId: '534414793746',
  appId: '1:534414793746:web:5ea6bdf072619ce6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
