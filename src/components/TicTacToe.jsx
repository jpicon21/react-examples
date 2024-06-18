import React, { useState } from 'react';

const TicTacToe = () => {

	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const sqrStyle = {
		background: "white",
		border: "1px solid darkblue",
		fontSize: "30px",
		fontWeight: "800",
		cursor: "pointer",
		outline: "none",
	};

	const brdStyle = {
		border: "4px solid darkblue",
		borderRadius: "10px",
		width: "250px",
		height: "250px",
		margin: "0 auto",
		display: "grid",
		gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
	};

	const handleClick = (i) => {
		const boardCopy = [...board];
		// If user click an occupied square or if game is won, return
		if (winner || boardCopy[i]) return;
		// Put an X or an O in the clicked square
		boardCopy[i] = xIsNext ? "X" : "O";
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	};

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	};

	const Square = ({ value, onClick }) => (
		<button style={sqrStyle} onClick={onClick}>
			{value}
		</button>
	);
	
	const Board = ({ squares, onClick }) => (
		<div style={brdStyle}>
			{squares.map((square, i) => (
				<Square key={i} value={square} onClick={() => onClick(i)} />
			))}
		</div>
	);

	const restart = () => {
		setBoard(Array(9).fill(null));
		setXisNext(true);
	}

  return (
		<>
			<Board squares={board} onClick={handleClick} />
			<div className="ttt-details">
				<p>
					{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
				</p>
				<button className="restart-button" onClick={restart}>Restart Game</button>
			</div>
		</>
  );
};

export default TicTacToe;