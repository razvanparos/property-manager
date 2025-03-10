import { CircleX } from "lucide-react";
import * as React from "react";

function FormComponent({ submitFunction, title, children, closeFunc }: any) {
  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={submitFunction}
      className="relative border p-8 rounded-lg flex flex-col justify-center 
      gap-y-4 z-20 w-[400px] max-h-[400px] 
      bg-white customShadow text-backgroundBlue
      "
    >
      <p className="text-2xl font-bold text-backgroundBlue">{title}</p>
      <CircleX
        onClick={closeFunc}
        className="absolute right-[10px] top-[10px] cursor-pointer"
      />
      {children}
    </form>
  );
}

export default FormComponent;
