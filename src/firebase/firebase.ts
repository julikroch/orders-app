import app from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./config";

class Firebase {
  db: app.firestore.Firestore;
  storage: app.storage.Storage;

  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

const firebase = new Firebase();
export default firebase;
