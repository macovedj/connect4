import React, { Component } from 'react';

import classes from './Connect4.css';
import Board from '../../components/Board/Board';
import DropRow from '../../components/DropRow/DropRow';

class Connect4 extends Component {
  state = {
    turn: 0,
    playerOne: true,
    board:[[null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null]]
    }

  // checkForDiagonalWin(row,column) {
  //   // checks if bottom left token was placed
  //   if (column < 4 && row < 4 && this.state.board[column][row - 1] === this.state.board[column + 1][row]) {
  //     if (this.state.board[column][row] === this.state.board[column + 1][row]
  //       && this.state.board[column + 1][row] === this.state.board[column + 2][row]
  //       && this.state.board[column + 2][row] === this.state.board[column + 3][row])
  // }

  checkForHorizontalWin(row, column) {
    // checks if furthest left was placed
    if (column < 4 && this.state.board[column][row] === this.state.board[column + 1][row]) {
      if (this.state.board[column][row] === this.state.board[column + 1][row]
        && this.state.board[column + 1][row] === this.state.board[column + 2][row]
        && this.state.board[column + 2][row] === this.state.board[column + 3][row]) {
          alert('You won!');

      }
    }
    // checks if furthest right was placed
    if (column > 2 && this.state.board[column][row] === this.state.board[column - 1][row]) {
      if (this.state.board[column][row] === this.state.board[column - 1][row]
        && this.state.board[column - 1][row] === this.state.board[column - 2][row]
        && this.state.board[column - 2][row] === this.state.board[column - 3][row]) {
          alert('You won!');
      }
    }
    // checks if second from right was placed
    if (column > 1 && column < 6 && this.state.board[column][row] === this.state.board[column - 1][row]) {
      if (this.state.board[column + 1][row] === this.state.board[column][row]
        && this.state.board[column][row] === this.state.board[column - 1][row]
        && this.state.board[column - 1][row] === this.state.board[column - 2][row]) {
          alert('You won!');
      }
    }
    // checks if second from left was placed
    if (column > 0 && column < 5 && this.state.board[column][row] === this.state.board[column - 1][row]) {
      if (this.state.board[column + 1][row] === this.state.board[column][row]
        && this.state.board[column + 2][row] === this.state.board[column][row]
        && this.state.board[column - 1][row] === this.state.board[column][row]) {
          alert('You won!');
        }
  }
}


  checkForVerticalWin(row, column) {
    if (row < 4) {
      let columnArray = [row - 1, row, row + 1, row + 2];
      let isWin = columnArray.filter(item => this.state.board[column][item] === this.state.board[column][row - 1]);
      if (isWin.length === 4) {
        alert('You won!');
      };
      // if (this.state.board[column][row - 1] === this.state.board[column][row]
      //   && this.state.board[column][row] === this.state.board[column][row + 1]
      //   && this.state.board[column][row + 1] === this.state.board[column][row + 2]) {
      //     alert('You won!');
      //   }
    }
  }

  dropTokenHandler = (columnID) => {
    let turn = this.state.turn;
    turn += 1;
    this.setState({turn: turn});
    turn % 2 === 0 ? this.setState({playerOne: true}) : this.setState({playerOne: false});
    let numberVacant = 0;
    for (let i = 0; i < 6; i++) {
      if (this.state.board[columnID][i] === null) {
        numberVacant += 1
      }
    }
    if (this.state.playerOne) {
      let newBoard = this.state.board;
      newBoard[columnID][numberVacant - 1] = 'blue';
      this.setState({board: newBoard});
    } else {
      let newBoard = this.state.board;
      newBoard[columnID][numberVacant - 1] = 'red';
      this.setState({board: newBoard});
    }
    this.checkForVerticalWin(numberVacant, columnID);
    this.checkForHorizontalWin(numberVacant - 1, Number(columnID));
  }

  resetGameHandler = () => {
    this.setState({turn: 0})
    this.setState({playerOne: true})
    this.setState({board:[[null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null],
           [null, null, null, null, null, null]]})
  }

    render() {
      return (
        <div className={classes.Container}>
          <DropRow clicked={this.dropTokenHandler} player={this.state.playerOne}/>
          <Board filled={this.state.board}/>
          <button onClick={this.resetGameHandler}>Reset</button>
        </div>
      );
    }
}

export default Connect4;
