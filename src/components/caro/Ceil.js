import React from "react";

const Ceil = (props) => {
  return (
    <div className="game-ceil" onClick={props.onClick}>
      <h3 className={props.value}>{props.value}</h3>
    </div>
  );
};

export default Ceil;
