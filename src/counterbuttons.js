import React from "react";
import { dispatch } from './store';

function Inc() {
    dispatch({
        type: 'INC'
    })
};
function Dec() {
    dispatch({
        type: 'DEC'
    })
};

const width = { width: '2rem', fontSize: '1.2rem' };

const CounterButtons= () => (
  <div>
    <button onClick={Inc} style={width} >+</button>
    <button onClick={Dec}  style={width} >-</button>
  </div>
);

export default CounterButtons;