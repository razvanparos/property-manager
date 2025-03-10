import * as React from "react";
import Label from "./Label";
import Input from "./Input";

interface FormRowProps{
    value:any;
    onChangeFunction: React.ChangeEventHandler,
    type: string
    labelText: string
}

function FormRow({labelText, value, onChangeFunction, type}:FormRowProps) {
  return (
    <div className="flex flex-col">
     <Label text={labelText}/>
     <Input value={value} onChangeFunction={onChangeFunction} type={type}/>
    </div>
  );
}

export default FormRow;
