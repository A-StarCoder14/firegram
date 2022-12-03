import * as firebase from "firebase/app"
import {getStorage} from "firebase/storage"
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAHg4Yt_Znq2D0YxJDinM72Imz0wkTQBRA",
  authDomain: "tidos-firegram.firebaseapp.com",
  projectId: "tidos-firegram",
  storageBucket: "tidos-firegram.appspot.com",
  messagingSenderId: "150852464159",
  appId: "1:150852464159:web:daccf6be3fb3ae8251af2a"
}

firebase.initializeApp(firebaseConfig)


export const projectStorage = getStorage()
export const projectFireStore = getFirestore()
