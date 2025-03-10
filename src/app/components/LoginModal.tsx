"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import AuthModalActions from "../context/actions/authModalActions";
import FormComponent from "./FormComponent";
import FormRow from "./FormRow";
import ButtonComponent from "./ButtonComponent";
import Spinner from "./Spinner";
import { login } from "../services/authService";
import NotificationActions from "../context/actions/notificationActions";
function LoginModal() {
  const { state }: any = useContext(AppContext);
  const { loginModal } = state;

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let response:any = await login(loginEmail, loginPassword);
    if(response===200){
      setLoginEmail("");
      setLoginPassword("");
      NotificationActions.showNotification('Login success','normal')
      AuthModalActions.showModal("loginModal",false);
    }else{
      NotificationActions.showNotification('Wrong credentials','danger')
    }
    
    setLoading(false);
  };

  const closeLoginModal = (e?: any) => {
    e.stopPropagation();
    AuthModalActions.showModal("loginModal", false);
  };

  if (loginModal)
    return (
      <div
        onClick={closeLoginModal}
        className={`h-full w-full absolute top-0 left-0 flex lg:items-center justify-center backdrop-blur-sm duration-200`}
      >
        <FormComponent
          submitFunction={handleLogin}
          title="Login"
          closeFunc={closeLoginModal}
        >
          <FormRow
            labelText="Email"
            value={loginEmail}
            onChangeFunction={(e: any) => {
              setLoginEmail(e.target.value);
            }}
            type="email"
          />
          <FormRow
            labelText="Password"
            value={loginPassword}
            onChangeFunction={(e: any) => {
              setLoginPassword(e.target.value);
            }}
            type="password"
          />
          <ButtonComponent
            text={loading ? <Spinner /> : "Login"}
            type="background"
          />
        </FormComponent>
      </div>
    );
}

export default LoginModal;
