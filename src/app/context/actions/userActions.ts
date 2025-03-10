export const SET_USER_DATA = "SET_USER_DATA";

class UsersActions {
    static #dispatch:any;
  
    static registerActions(dispatch:any) {
      this.#dispatch = dispatch;
    }
  
    static setUserData(userData:any) {
      this.#dispatch({
        type: SET_USER_DATA,
        payload: {
          userData,
        },
      });
    }

  }
  
  export default UsersActions;
  