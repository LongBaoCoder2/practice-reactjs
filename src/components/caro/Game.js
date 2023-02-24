import React, { useState } from "react";
import Board from "./Board";
import "./BoardStyles.css";

const defaultBoard = Array(9).fill(null);
const Game = () => {
  const [state, setState] = useState({
    board: defaultBoard,
    isXTurn: true,
  });
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (boardCopy[index]) return;
    boardCopy[index] = state.isXTurn ? "X" : "O";
    setState({ ...state, board: boardCopy, isXTurn: !state.isXTurn });
  };

  const handleResetGame = () => {
    setState({
      ...state,
      board: defaultBoard,
      isXTurn: true,
    });
  };

  return (
    <div>
      <Board board={state.board} onClick={handleClick}></Board>
      <button onClick={handleResetGame}>New Game</button>
    </div>
  );
};

export default Game;
