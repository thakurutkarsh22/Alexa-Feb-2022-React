import React, { useState } from 'react';
import './Game2048';


const DEFAULT_BOARD = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]]

// const DEFAULT_BOARD = [
//     [2,4,8,16],
//     [512,128,64,32],
//     [2,4,8,16],
//     [512,128,64,32],
// ]
const DIRECTION = {
    UP: "Up",
    DOWN: "Down",
    LEFT: "Left",
    RIGHT: "Right",
}

function Game2048() {
    const [board, setBoard] = useState(DEFAULT_BOARD);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);


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
        const boardCopy = JSON.parse(JSON.stringify(board));


        // random blank spaces in the board
        const blankCoordinates = getBlankCoordinates(board);
        const randomCordIndex = Math.floor(Math.random() * blankCoordinates.length);
        const randomCord = blankCoordinates[randomCordIndex]; // [0,2]
        if(!randomCord) {
            return board;
        }
        boardCopy[randomCord[0]][randomCord[1]] = number;
        return boardCopy;
    }

    function gameInit() {
        // const test = checkIfLost(DEFAULT_BOARD);
        setGameOver(false);
        const boardCopy = JSON.parse(JSON.stringify(DEFAULT_BOARD)); // deep copy
        let board1 = placeRandom(placeRandom(boardCopy));
        setBoard(board1);
    }

    function move(direction) {
        if(direction === DIRECTION.RIGHT) {
            console.log("right");
            const {newBoard, score} = rightMovementhandler(board);

            // condition /// 

            console.log(hasBoardMoved(board, newBoard), "check condition", board , newBoard);
            if(!hasBoardMoved(board, newBoard)) {
                let randomBaord = placeRandom(newBoard);
                // adding new random value to the board .... 
                console.log("randomBaord", randomBaord);
                //
                if(checkIfLost(randomBaord)) {
                    setGameOver(true);
                }
                setBoard(randomBaord);
                setScore((oldScore) => oldScore + score);
            }



        } else if(direction === DIRECTION.LEFT) {
            const {newBoard, score} = leftMovementHandler(board);

            console.log(newBoard, "left");

            // condition .... 
            setBoard(newBoard);
            setScore((oldScore) => oldScore + score);
        } else if(direction === DIRECTION.UP) {
            const {newBoard, score} =  upMovementhandler(board);
            // condition /// 
            setBoard(newBoard);
            setScore((oldScore) => oldScore + score);

        } else if(direction === DIRECTION.DOWN) {
            const {newBoard, score} =  downMovementhandler(board);
            // condition /// 
            setBoard(newBoard);
            setScore((oldScore) => oldScore + score);
        }

    }
// TODO: 2nd pass should not add when space ... 
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
            //  TODO: culprit .. 
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

    function leftMovementHandler(board) {
        const rotatedBoard = rotateRight(rotateRight(JSON.parse(JSON.stringify(board))));

        // call rightMovementhandler();
        let {newBoard, score} = rightMovementhandler(rotatedBoard);

        // rotate left ... 
        newBoard = rotateLeft(rotateLeft(JSON.parse(JSON.stringify(newBoard))));

        return { newBoard , score}

    }

    function upMovementhandler(board) {
        // rotate right ... 
        const rotatedBoard = rotateRight(JSON.parse(JSON.stringify(board)));

        // call rightMovementhandler();
        let {newBoard, score} = rightMovementhandler(rotatedBoard);

        // rotate left ... 
        newBoard = rotateLeft(JSON.parse(JSON.stringify(newBoard)));

        return { newBoard , score}
    }

    function downMovementhandler(board) {
        // rotate right ... 
        const rotatedBoard = rotateLeft(JSON.parse(JSON.stringify(board)));

        // call rightMovementhandler();
        let {newBoard, score} = rightMovementhandler(rotatedBoard);

        // rotate left ... 
        newBoard = rotateRight(JSON.parse(JSON.stringify(newBoard)));

        return { newBoard , score}
    }

    function rotateRight(board) { 
        let n = board.length;
        let newBoard = [];
        for(let col = n-1 ; col >=0 ; col--) {
            let newRow = [];
            for(let row = n-1; row >= 0; row--) {
                newRow.push(board[row][col]);
            }
            newBoard.unshift(newRow);
        }
        return newBoard;
    }

    function rotateLeft(board) {
        let n = board.length;
        let newBoard = [];
        for(let col = n-1 ; col >=0 ; col--) {
            let newRow = [];
            for(let row = n-1; row >= 0; row--) {
                newRow.unshift(board[row][col]);
            }
            newBoard.push(newRow);
        }
        return newBoard;  
    }

    // comparisio.... 
    function hasBoardMoved(originalBoard, updateDBoard) {
        return JSON.stringify(originalBoard) === JSON.stringify(updateDBoard);
    }

    function checkIfLost(board) {
        // check if in all directioin i can add or move my boards ... 

        // has my board moved for up key 
        const up = hasBoardMoved(board, upMovementhandler(board).newBoard);

        //  has my board moved for down key 
        const down = hasBoardMoved(board, downMovementhandler(board).newBoard);


        //  has my board moved for left key 
        const left = hasBoardMoved(board, leftMovementHandler(board).newBoard);


        // has myu board moved for right key 
        const right = hasBoardMoved(board, rightMovementhandler(board).newBoard);

        return up&&down&&left&&right;


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
        {gameOver ? "Game over try again!!!" : ""}

    </>
  )
}

export default Game2048;