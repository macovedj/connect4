import React from 'react';

import classes from './BoardMember.css';

const boardMember = (props) => {
  let crclClass = classes.circle
  if (props.filled === 'blue') {
    crclClass = classes.circleblue
  } else if (props.filled === 'red') {
    crclClass = classes.circlered
  }
  return (
    <div className={classes.BoardMember}>
      <div className={crclClass} />
    </div>)
}

export default boardMember;
