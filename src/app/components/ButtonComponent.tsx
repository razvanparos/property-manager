import * as React from "react";

interface ButtonProps{
    onClickFunction?:React.MouseEventHandler,
    text: string|any,
    type: string,
}

function ButtonComponent({ onClickFunction, text, type }: ButtonProps) {
  const buttonClasses = {
    background: "bg-primaryBlue py-2 px-4 rounded-lg ",
  } as any;

  return (
    <button
      onClick={onClickFunction}
      className={`cursor-pointer ${buttonClasses[type]} text-white`}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
