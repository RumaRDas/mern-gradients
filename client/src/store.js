import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

import firebase from "firebase/app";
import "firebase/auth";

const fbConfig = {
  apiKey: "AIzaSyD0ff0B8c4VFVHIkt-TjqBXuiX12zl50kA",
  authDomain: "mern-gradient.firebaseapp.com",
  databaseURL: "https://mern-gradient.firebaseio.com",
  projectId: "mern-gradient",
  storageBucket: "mern-gradient.appspot.com",
  messagingSenderId: "813055936676",
  appId: "1:813055936676:web:257b9a9af10f7c9b4a3e31",
  measurementId: "G-K28LLFKJ35",
};

firebase.initializeApp(fbConfig);

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};
export default store;
