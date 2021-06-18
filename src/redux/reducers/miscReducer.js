import {
  IS_AUTHENTICATING, LOADING,
  SET_AUTH_STATUS,
  SET_REQUEST_STATUS,
  FLIP_SIDENAV_STATUS
} from '../../constants/constants';

const initState = {
  loading: false,
  isAuthenticating: false,
  authStatus: null,
  requestStatus: null,
  theme: 'light',
  isSideNavVisible : false
};

const miscReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case IS_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.payload
      };
    case SET_REQUEST_STATUS:
      return {
        ...state,
        requestStatus: action.payload
      };
    case SET_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload
      };
    case FLIP_SIDENAV_STATUS:
      const temp = state.isSideNavVisible;
      return {
        ...state,
        isSideNavVisible: !temp
      };
    default:
      return state;
  }
};
export default miscReducer;