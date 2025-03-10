import { MODAL_SHOW } from "../actions/authModalActions";


const authReducers = (state:any, action:any) => {
    const  modalType  = action.payload.modalType;
    const  modalState  = action.payload.modalState;

    switch (action.type) {
      case MODAL_SHOW:
        state[modalType]=modalState
        return { ...state };

      default:
        return false;
    }
  };
  
  export default authReducers;