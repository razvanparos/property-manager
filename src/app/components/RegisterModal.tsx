"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import AuthModalActions from "../context/actions/authModalActions";
import FormComponent from "./FormComponent";
import FormRow from "./FormRow";
import ButtonComponent from "./ButtonComponent";
import Spinner from "./Spinner";

function RegisterModal() {
  const { state }: any = useContext(AppContext);
  const { registerModal } = state;

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
        }),
      });
      const data = await response.json();
      console.log(response);
      if (response.status === 200) {
        setRegisterEmail("");
        setRegisterPassword("");
        alert("Login successfull");
      } else alert("Wrong credentials");
    } catch (err) {
      alert("User not found");
      console.log(err);
    }
    setLoading(false)
  };

  const closeRegisterModal = (e: any) => {
    e.stopPropagation();
    AuthModalActions.showModal("registerModal",false);
  };

  if (registerModal)
    return (
      <div
        onClick={closeRegisterModal}
        className={`h-full w-full absolute top-0 left-0 flex lg:items-center justify-center backdrop-blur-sm duration-200`}
      >
        <FormComponent submitFunction={handleRegister} title='Register' closeFunc={closeRegisterModal}>
          <FormRow
            labelText="Name"
            value={registerName}
            onChangeFunction={(e:any)=>{setRegisterName(e.target.value)}}
            type='text'
          />
          <FormRow
            labelText="Email"
            value={registerEmail}
            onChangeFunction={(e:any)=>{setRegisterEmail(e.target.value)}}
            type='email'
          />
          <FormRow
            labelText="Password"
            value={registerPassword}
            onChangeFunction={(e:any)=>{setRegisterPassword(e.target.value)}}
            type='password'
          />
          <ButtonComponent text={loading?<Spinner/>:"Register"} type="background" />
        </FormComponent>
      </div>
    );
}

export default RegisterModal;
