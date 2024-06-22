import React, { useState , useMemo} from 'react'

const Practice4 = () => {
  const [number,setNumber] = useState(0);
  const [dark,setDark] = useState(0);
  const [btn,setBtn] = useState(true)
  
  const doubleNumber =useMemo(() => {
    return slowFunction(number)
  },[number]) 

  const themeStyle = useMemo(() => {
    return{
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }  },[dark])

  function slowFunction(num){
    for(let i=0;i<10000;i++){}
    return num*2
  }

  return (
    <div>
      <div>This component is create to learn useMeno  =and create a latency in run
        <br/>
        And this is use to run when and any value of number or memo state changes and in other useState run when any value change rather then this function value
      </div>
      <input style={{backgroundColor : "green"}} type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/> 
      {doubleNumber}   
      <button onClick={() => setDark(prevDark => !prevDark)}>Change color</button>
      <div style={themeStyle}>Hello the world is going change because rudra have been start coding </div>
      <button style={{backgroundColor :'red'}} onClick={() => setBtn(!btn)}>{btn ? 'click me plz' : 'okay once again'}</button>

    </div>
  )
}



export default Practice4
