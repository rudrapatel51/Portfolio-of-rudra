import React from 'react'
import { useTypewriter,Cursor } from "react-simple-typewriter";

const Name = () => {
    const [text] = useTypewriter({
        words: ['Hello','I am Rudra Patel'],
        loop:{},
        typeSpeed:120,
      })
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center text-white text-9xl font-bold'>
        {/* <div className='flex items-center justify-center'> */}
    {text} 
    {/* </div> */}
    </div>
  )
}

export default Name
