import React ,{useRef,useEffect,  useState}from 'react'

const Practice5 = () => {
    const [count,setCount] = useState(0);
    const [startTime,setStartTime] = useState(null);
    const [now,setNow] =useState(null);
    const intervalRef = useRef(null)
    
    function handleStartClick(){
      setStartTime(Date.now());
      setNow(Date.now())

      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setNow(Date.now())
      },10)
    }
    function handleStopClick(){
      clearInterval(intervalRef.current)
    }

    let secondsPassed = 0;
    if(startTime!= null && now !=null){
      secondsPassed =(now - startTime)/1000
    }

    const inputRef = useRef(null);
    function ClickType(){
      inputRef.current.focus()
      console.log(inputRef.current.focus)
    }

    // const a = useRef(0);
    // const btnref = useRef(0)
    // useEffect(() => {
    //     btnref.current.style.backgroundColor = "Green"
    // },[])

  // useEffect(() => {
  //   a.current = a.current+ 1;
  //   console.log(`THE Count value is ${a.current}`)
  // })
  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={ClickType}>Click for alert</button>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStartClick}>Click on Start</button>
      <button onClick={handleStopClick}>Click on Stop</button>
      {/* <button ref={btnref} onClick={() => setCount((count) =>count+1) }>
        Click on me</button>
        {count}
        <br/>
        <button onClick={() => {btnref.current.style.backgroundColor="red"}}>change color</button> */}
    </div>
  )
}

export default Practice5
