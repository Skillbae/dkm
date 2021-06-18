// const initState = null;

const initState = {
  isAuth: true,
  role: 'ADMIN'
}

// const initState = {
//   isAuth: true,
//   role: 'USER'
// }


const authReducer =  (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return {
        id: action.payload.id,
        role: action.payload.role,
        provider: action.payload.provider
      };
    case "SIGNOUT_SUCCESS":
      return null;
    default:
      return state;
  }
};
export default authReducer;