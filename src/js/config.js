import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyB_xHxYt-HpqnrZ4h8v0TGCrtPMuw_JrNA",
  authDomain: "webdinamico-51a16.firebaseapp.com",
  databaseURL: "https://webdinamico-51a16.firebaseio.com",
  projectId: "webdinamico-51a16",
  storageBucket: "webdinamico-51a16.appspot.com",
  messagingSenderId: "415434847777"
}

const init = () => firebase.initializeApp(config)

init()
