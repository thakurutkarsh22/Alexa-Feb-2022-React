import React, { useState } from 'react';
import './Game2048';


const DEFAULT_BOARD = [
    [2,2,4,4],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]];
const DIRECTION = {
    UP: "Up",
    DOWN: "Down",
    LEFT: "Left",
    RIGHT: "Right",
}

function Game2048() {
    const [board, setBoard] = useState(DEFAULT_BOARD);
    const [score, setScore] = useState(0);


    function randomNumber() {
        const choices = [2,4];
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomNumber = choices[randomIndex];
        return randomNumber;
    }

    function getBlankCoordinates(board) {
        let n = board.length;
        const blankCorodinateArr = [];

        for(let row = 0; row < n ; row++) {
            for(let col = 0; col < n; col ++) {
                if(board[row][col] === 0) {
                    blankCorodinateArr.push([row, col]);
                }
            }
        }

        return blankCorodinateArr;
    }

    function placeRandom(board) { // pure function .... 
        // random number
        const number = randomNumber();
        console.log(number, "random Number");

        // random blank spaces in the board
        const blankCoordinates = getBlankCoordinates(board);
        const randomCordIndex = Math.floor(Math.random() * blankCoordinates.length);
        const randomCord = blankCoordinates[randomCordIndex]; // [0,2]
        board[randomCord[0]][randomCord[1]] = number;
        return board;
    }

    function gameInit() {
        const boardCopy = JSON.parse(JSON.stringify(DEFAULT_BOARD)); // deep copy
        let board1 = placeRandom(placeRandom(boardCopy));
        setBoard(board1);
    }

    function move(direction) {
        if(direction === DIRECTION.RIGHT) {
            console.log("right");
            const {newBoard, score} = rightMovementhandler(board);

            // condition /// 
            setBoard(newBoard);
            setScore((oldScore) => oldScore + score);
        } else if(direction === DIRECTION.LEFT) {

        } else if(direction === DIRECTION.UP) {

        } else if(direction === DIRECTION.DOWN) {

        }

    }

    function rightMovementhandler(board) {
        let n = board.length;
        // shift all the numbber to right ..... 
        let newBoard = [];
        let score = 0;

        for(let row = 0; row <n; row++) {
            // logic 
            let row1 = [];
            for(let col = 0; col <n ; col++) {
                const currentNumber = board[row][col];
                if(currentNumber === 0) {
                    row1.unshift(currentNumber);
                } else {
                    row1.push(currentNumber);
                }
            }
            // add this row to board ... 
            newBoard[row] = row1;
        }

        console.log("preAdd", newBoard);

        // combination .. 

        // shifting ...
        for(let row = 0; row <n; row++) {
            for(let col = n-1; col >= 0 ; col--) {
                if(newBoard[row][col] > 0 && newBoard[row][col] === newBoard[row][col-1] ) {
                    newBoard[row][col] = newBoard[row][col] + newBoard[row][col-1];
                    newBoard[row][col-1] = 0;
                    score += newBoard[row][col];
                }
            }
            // adding .... 
            for(let col = n-1; col >= 0 ; col--) {
                if(col > 0 && newBoard[row][col] === 0 && newBoard[row][col-1] !== 0) {
                    newBoard[row][col] = newBoard[row][col-1];
                    newBoard[row][col -1] = 0;
                }
            }

            //  shifting 
            for(let col = n-1; col >= 0 ; col--) {
                if(newBoard[row][col] > 0 && newBoard[row][col] === newBoard[row][col-1] ) {
                    newBoard[row][col] = newBoard[row][col] + newBoard[row][col-1];
                    newBoard[row][col-1] = 0;
                    score += newBoard[row][col];

                }
            }


        }

        console.log("postAdd", newBoard);


        return {newBoard, score};

    }

  return (
    <>
        <div>Game 2048</div>
        <div>Score: {score}</div>
        <button onClick={gameInit}>New Game</button>
        <button onClick={() => move(DIRECTION.LEFT)}>{DIRECTION.LEFT}</button>
        <button onClick={() => move(DIRECTION.RIGHT)}>{DIRECTION.RIGHT}</button>
        <button onClick={() => move(DIRECTION.UP)}>{DIRECTION.UP}</button>
        <button onClick={() => move(DIRECTION.DOWN)}>{DIRECTION.DOWN}</button>
        <table>
            {board.map((row) => {
                return (
                    <>
                        <tr>
                            {row.map((cell) => {
                                return <td>{cell}</td>
                            })}
                        </tr>
                    </>
                )
            })}
        </table>

    </>
  )
}

export default Game2048;