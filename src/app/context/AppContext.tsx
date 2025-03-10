'use client'
import React, { createContext, useReducer } from "react";
import combineReducers from "./reducers/combineReducers";
import {initialState} from './initialState'
import NotificationActions from "./actions/notificationActions";
import UsersActions from "./actions/userActions";
import AuthModalActions from "./actions/authModalActions";
export const AppContext = createContext();

const AppProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(combineReducers, initialState);
  NotificationActions.registerActions(dispatch)
  UsersActions.registerActions(dispatch)
  AuthModalActions.registerActions(dispatch)
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
