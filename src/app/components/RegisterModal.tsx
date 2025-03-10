"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import AuthModalActions from "../context/actions/authModalActions";
import FormComponent from "./FormComponent";
import FormRow from "./FormRow";
import ButtonComponent from "./ButtonComponent";
import Spinner from "./Spinner";
import { register } from "../services/authService";
import NotificationActions from "../context/actions/notificationActions";

function RegisterModal() {
  const { state }: any = useContext(AppContext);
  const { registerModal } = state;

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let response:any = await register(registerName, registerEmail, registerPassword);
    if(response===200){
      setRegisterName('')
      setRegisterEmail("");
      setRegisterPassword("");
      NotificationActions.showNotification('Registered successfully','normal')
      AuthModalActions.showModal("registerModal",false);
      AuthModalActions.showModal("loginModal",true);
    }else{
      NotificationActions.showNotification(response[0],'danger')
    }
    setLoading(false);
  };

  const closeRegisterModal = (e: any) => {
    e.stopPropagation();
    AuthModalActions.showModal("registerModal", false);
  };

  if (registerModal)
    return (
      <div
        onClick={closeRegisterModal}
        className={`h-full w-full absolute top-0 left-0 flex lg:items-center justify-center backdrop-blur-sm duration-200`}
      >
        <FormComponent
          submitFunction={handleRegister}
          title="Register"
          closeFunc={closeRegisterModal}
        >
          <FormRow
            labelText="Name"
            value={registerName}
            onChangeFunction={(e: any) => {
              setRegisterName(e.target.value);
            }}
            type="text"
          />
          <FormRow
            labelText="Email"
            value={registerEmail}
            onChangeFunction={(e: any) => {
              setRegisterEmail(e.target.value);
            }}
            type="email"
          />
          <FormRow
            labelText="Password"
            value={registerPassword}
            onChangeFunction={(e: any) => {
              setRegisterPassword(e.target.value);
            }}
            type="password"
          />
          <ButtonComponent
            text={loading ? <Spinner /> : "Register"}
            type="background"
          />
        </FormComponent>
      </div>
    );
}

export default RegisterModal;
