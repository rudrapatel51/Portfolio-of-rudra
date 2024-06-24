import React from 'react'

const Practice7 = () => {
    function reducer(state,action) {
        switch (action.type){
            case 'increment' :
                return {count : state.count + 1}
            case 'decrement' :
                return {count : state.count - 1}
            default :
            return state
        }
    }
  return (
    <div>
       <button onLC></button>
    </div>
  )
}

export default Practice7
