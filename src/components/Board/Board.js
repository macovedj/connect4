import React from 'react';

import classes from './Board.css';
import Column from './Column/Column';

const board = (props) => {
  return(
    <div className={classes.Board}>
      <Column filled={props.filled[0]}/>
      <Column filled={props.filled[1]}/>
      <Column filled={props.filled[2]}/>
      <Column filled={props.filled[3]}/>
      <Column filled={props.filled[4]}/>
      <Column filled={props.filled[5]}/>
      <Column filled={props.filled[6]}/>
    </div>
  );
}

export default board;
