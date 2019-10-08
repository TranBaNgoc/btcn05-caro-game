import React from 'react';
import '../App.css';

const Square = (props) => {
    const {onClick, id, background, value} = props;
    return (
      <button type="button" className="square" onClick={onClick} id={id} style={{ background, color: value === 'X' ? 'red' : 'blue'}}>
        {value}
      </button>
    );
  }

export default Square;