"use client";

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AuthModalActions from "../context/actions/authModalActions";
import Logo from "./Logo";
import ButtonComponent from "./ButtonComponent";

function Header() {
  const { state }: any = useContext(AppContext);

  const showLoginModal = () => {
    AuthModalActions.showModal('loginModal',true);
  };
  const showRegisterModal = () => {
    AuthModalActions.showModal('registerModal',true);
  };

  return (
    <header className="h-[70px] border-b px-4 lg:px-[7%] flex items-center justify-between bg-backgroundBlue">
      <Logo />
      {/* <button
        onClick={() => {
          console.log(state);
        }}
        className="text-white"
      >
        click
      </button> */}
      <div className="flex items-center gap-x-4">
        <ButtonComponent onClickFunction={showLoginModal} text="Login" type={'background'}/>
        <ButtonComponent onClickFunction={showRegisterModal} text="Register" type=""/>
      </div>
    </header>
  );
}

export default Header;
