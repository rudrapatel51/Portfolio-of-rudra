// import React, { useState, useRef, useEffect } from "react";
// import Practice2 from "./Practice2";
// import Practice3 from "./Practice3";

// export default function Practice ({getItem}) {
//   const [count, setCount] = useState(4);
//   const themeRef = useRef();

//   function decrementCount() {
//     setCount(count - 1);
//   }
//   function incrementCount() {
//     setCount(count + 1);
//   }
//   function handleInput(event) {
//     alert("A name was submitted: " + themeRef.current.value);
//     event.preventDefault();
//   }
//   const [item,setItem] = useState([]);
//   useEffect(() => {
//     // console.log(getItem)
//     setItem(getItem(1))
//   },[getItem])
//   return item.map(item=> <div key={item}>{item}</div>)
//   // return (
//   //   <div>
//   //     <form onSubmit={handleInput}>
//   //       <input type="text" ref={themeRef} />
//   //       <br />

//   //       <button type="submit">submit</button>
//   //       <br />
//   //     </form>
//   //     <button onClick={decrementCount}>decrease</button>
//   //     <span>{count}</span>
//   //     <button onClick={incrementCount}>increase</button>
//   //     {/* <Practice2 /> */}
//   //     <Practice3/>
//   //   </div>
//   // );
// };

