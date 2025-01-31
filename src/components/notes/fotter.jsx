import React, { useContext } from "react";
import Logincontext from "../../utilities/LoginContext";

function Fotter() {
  const {user}=useContext(Logincontext)
  return (
    <div className=" fotter">
      <p className="text-center">Welcome {user}</p>
    </div>
  );
}
export default Fotter;
