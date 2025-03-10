import authReducers from "./authModalReducers";
import notificationReducer from "./notificationReducers";
import userReducers from "./userReducers";


const allReducers = [notificationReducer, userReducers, authReducers];

const combineReducers = (state:any, action:any) => {
  let result = false;

  for (let reducer of allReducers) {
    result = reducer(state, action);

    if (result) {
      break;
    }
  }

  if (result) {
    return result;
  } else {
    throw new Error(`No action named "${action.type}" was found.`);
  }
};

export default combineReducers;
