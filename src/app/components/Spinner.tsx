import { LoaderCircle } from "lucide-react";
import * as React from "react";
function Spinner() {
  return (
    <div className="animate-spin w-full flex justify-center">
      <LoaderCircle />
    </div>
  );
}

export default Spinner;
