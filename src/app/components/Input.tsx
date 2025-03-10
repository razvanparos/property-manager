import * as React from "react";

interface InputProps{
    value:any;
    onChangeFunction: React.ChangeEventHandler,
    type: string
}

function Input({ value, onChangeFunction, type }: InputProps) {
  return (
    <input
      value={value}
      onChange={onChangeFunction}
      type={type}
      className="border p-2 rounded-lg"
    />
  );
}

export default Input;
