import { NOTIFICATION_SHOW } from "../actions/notificationActions";
import { NOTIFICATION_HIDE } from "../actions/notificationActions";

const notificationReducer = (state:any, action:any) => {
    const  notificationMessage  = action.payload.msg;
    const  notificationType  = action.payload.type;
    switch (action.type) {
      case NOTIFICATION_SHOW:
        return { ...state, showNotification:true, notificationMessage, notificationType };
      case NOTIFICATION_HIDE:
        return { ...state, showNotification:false, notificationType, notificationMessage };
      default:
        return false;
    }
  };
  
  export default notificationReducer;