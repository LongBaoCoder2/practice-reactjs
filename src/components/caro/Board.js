import React from "react";
import Ceil from "./Ceil";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.board.map((item, index) => (
        <Ceil
          key={index}
          value={item}
          className={props.board[index]}
          onClick={() => props.onClick(index)}
        ></Ceil>
      ))}
    </div>
  );
};

export default Board;
