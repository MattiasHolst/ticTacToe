const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((cell, cellIndex) => {
                return (
                  <li key={cellIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, cellIndex)}
                      disabled={cell !== null}
                    >
                      {cell}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};
export default GameBoard;
