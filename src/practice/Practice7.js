import React from 'react'
import { useReducer } from 'react';

    const   initialState = 0;
    const reducer = (state,action) => {
        if(action.type === "INCREMENT"){
        return state + 1
        }
        if(action.type === "DECREMENT"){
        return state - 1
        }
        return state
    }

    const UseReducer =() => {
       const [state,dispatch] =  useReducer(reducer,initialState)
    
  return (
    <div>
        <hr/>
        <div>This is practice of useReducer hooks in react that can use when we have to define may useState in function we can use useReducer and can return the multipe value when we nedded in react like if we use useState can return one value only and in useReducer by use type.action andd can return multiple value</div>
      {state}
        <button onClick={() => dispatch({type : "INCREMENT"})}>one plus</button>      
        <button onClick={() => dispatch({type : "DECREMENT"})}>one minus</button>      

    </div>
  )
}

export default UseReducer
