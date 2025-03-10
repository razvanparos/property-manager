import { SET_USER_DATA } from "../actions/userActions";


const userReducers = (state:any, action:any) => {
    const  userData  = action.payload.userData;

    switch (action.type) {
      case SET_USER_DATA:
        return { ...state, userData };

      default:
        return false;
    }
  };
  
  export default userReducers;