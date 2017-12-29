import React from 'react';

import classes from './Square.css';

const square = (props) => {
  let crclClass = classes.circleblue
  if (!props.player) {
    crclClass = classes.circlered
  }
  return (
    <div className={classes.Square} onClick={() => props.clicked(props.column)}>
      <div className={crclClass}/>
    </div>);
}

export default square;
