import {
  ADD_PRODUCT,
  GET_PRODUCTS
} from "../../constants/constants"

export const addProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firestore = getFirestore();

    const { image, imageCollection, ...rest} = product;

    
    const firebase = getFirebase()
    const storage = firebase.storage()
    if(image){
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
  
      uploadTask.on(
        "state_changed",
        
        () => {
            storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url)=>{
              alert("IMAGE UPLOAD SUCCESS")
              firestore.collection('products').add({
                thumbnailURL : url,
                ...rest,
                
              })
            })
            .catch(error => {
              alert(error.message);
            })
        }
      )
    }

    dispatch({
      type : ADD_PRODUCT,
      payload : product
    })
  }
};


// export const getProducts = () => {
//   return (dispatch, getState, {getFirebase, getFirestore}) => {
//     // const firebase = getFirebase();
//     const firestore = getFirestore();

//     const products = [];

//     firestore
//       .collection('products')
//       .get()
//       .then( querySanpshot => {
//         querySanpshot.forEach(doc => {
//           products.push(doc.data())
//         })
//         dispatch({
//           type: GET_PRODUCTS,
//           payload : products
//         })
//       })
//       .catch(error => {
//         console.log(error)
//       })
    
    
//   }

// }
