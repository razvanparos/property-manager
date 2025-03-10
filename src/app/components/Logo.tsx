import * as React from "react";
import { Building2 } from "lucide-react";
function Logo() {
  return (
    <div className="flex gap-x-4 items-center text-white">
      <Building2 />
      <h1 className="text-md lg:text-xl">Property Manager</h1>
    </div>
  );
}

export default Logo;
