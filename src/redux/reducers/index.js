import authReducer from "./authReducer";
import miscReducer from "./miscReducer";
import productReducer from "./productReducer";
import basketReducer from "./basketReducer";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'

const rootReducer = {
  auth: authReducer,
  app : miscReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  product : productReducer,
  basket : basketReducer
};

export default rootReducer;
