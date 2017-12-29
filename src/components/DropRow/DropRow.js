import React from 'react';

import classes from './DropRow.css';
import Square from '../Square/Square.js';

const dropRow = (props) => {
  return (
    <div className={classes.DropRow}>
      <Square
      clicked={props.clicked}
      player={props.player}
      column="0"/>
      <Square
      clicked={props.clicked}
      player={props.player}
      column="1"/>
      <Square
      clicked={props.clicked}
      player={props.player}
      column="2"/>
      <Square
      clicked={props.clicked}
      player={props.player}
      column="3"/>
      <Square
      clicked={props.clicked}
      player={props.player}
      column="4"/>
      <Square
      clicked={props.clicked}
      player={props.player}
      column="5"/>
      <Square
      clicked={props.clicked}
      player={props.player}
      column="6"/>
    </div>
  );
}

export default dropRow;
