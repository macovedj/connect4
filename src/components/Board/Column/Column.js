import React from 'react';

import classes from './Column.css'
import BoardMember from './BoardMember/BoardMember';

const column = (props) => {
  return(
  <div className={classes.Column} >
    <BoardMember filled={props.filled[0]}/>
    <BoardMember filled={props.filled[1]}/>
    <BoardMember filled={props.filled[2]}/>
    <BoardMember filled={props.filled[3]}/>
    <BoardMember filled={props.filled[4]}/>
    <BoardMember filled={props.filled[5]}/>
  </div>
  );
}

export default column;
