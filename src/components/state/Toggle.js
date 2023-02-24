import React, { useState } from "react";
import "./ToggleStyle.css";

const Toggle = () => {
  const [on, setOn] = useState(false);
  console.log(on);
  return (
    <div className={`Toggle ${on ? "active" : ""}`} onClick={() => setOn(!on)}>
      <div className={`spinner ${on ? "active" : ""}`}></div>
    </div>
  );
};

export default Toggle;
