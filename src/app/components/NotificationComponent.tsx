"use client";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import NotificationActions from "../context/actions/notificationActions";

function Notification() {
  const { state }: any = useContext(AppContext);
  const { showNotification } = state;
  const { notificationMessage } = state;
  const { notificationType } = state;
  const notificationClasses = {
    normal: "bg-primaryBlue",
    danger: "bg-red-500",
    warning: "bg-yellow-500",
  } as any;

  return (
    <section
      onClick={() => {
        NotificationActions.hideNotification();
      }}
      className={`capitalize text-white duration-200 rounded-lg py-1 px-4 fixed z-30 left-[50%] translate-x-[-50%] 
        text-center w-[90%] lg:w-fit 
        ${notificationClasses[notificationType]}
        ${showNotification ? "top-[20px]" : "translate-y-[-100%]"}
        `}
    >
      {notificationMessage}
    </section>
  );
}

export default Notification;
