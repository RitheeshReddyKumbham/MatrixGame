import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill('white')));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (row, col) => {
    if (clickOrder.length === 8 && matrix[row][col] === 'white') {
      let updatedMatrix = [...matrix];
      clickOrder.forEach(({ r, c }, index) => {
        setTimeout(() => {
          updatedMatrix[r][c] = 'orange';
          setMatrix([...updatedMatrix]);
        }, index * 500);
      });
      return;
    }

    const newMatrix = matrix.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? 'green' : cell))
    );

    setClickOrder([...clickOrder, { r: row, c: col }]);
    setMatrix(newMatrix);
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleClick(rowIndex, colIndex)}
            className="box"
            style={{ backgroundColor: color }}
          ></div>
        ))
      )}
    </div>
  );
};

export default App;
