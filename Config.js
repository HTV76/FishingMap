import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp,query,onSnapshot, orderBy } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpxUYLkJpMQSOGEgak99WNPCeEvVtG_pk",
  authDomain: "chat-265cc.firebaseapp.com",
  projectId: "chat-265cc",
  storageBucket: "chat-265cc.appspot.com",
  messagingSenderId: "64045247883",
  appId: "1:64045247883:web:3987b0cd035e76d132138e"
};

initializeApp(firebaseConfig)

const firestore = getFirestore()

const MESSAGES = 'messages'

export {
  firestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
  MESSAGES  
};