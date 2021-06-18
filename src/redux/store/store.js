import { createStore } from "redux";
import { combineReducers, applyMiddleware, compose} from "redux"
import rootReducer from "../reducers/";
import thunk from "redux-thunk";

import { createFirestoreInstance, getFirestore  } from "redux-firestore"
import firebase from "firebase/app";
import {getFirebase} from "react-redux-firebase";


const middlewares = [
  thunk.withExtraArgument({getFirebase, getFirestore})
]

export const store = createStore(
  combineReducers(rootReducer),
  compose(
    applyMiddleware(...middlewares),
    // reduxFirestore(firebaseConfig),
    // reactReduxFirebase(firebaseConfig),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
  ) 
  
)

export const rfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
export const rrfProps = {
  firebase,
  dispatch : store.dispatch,
  config : rfConfig,
  createFirestoreInstance
}

// export default store;