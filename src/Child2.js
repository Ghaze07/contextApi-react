import React, { useReducer } from 'react';
//import ValueContext from './ValueContext'
import numberReducer from './numberReducer';


function Child2() {
    
    let [ state, dispatch ] = useReducer(numberReducer, 52);
    
  return (
    <div>
      Child2 {state}
      <br />
      <button onClick={() =>{ dispatch({type:"INCREMENT", val :67})}}>Increment</button>
      <button onClick={() =>{ dispatch({type:"DECREMENT", val: 34})}}>Decrement</button>
    </div>
  );
}

export default Child2;

