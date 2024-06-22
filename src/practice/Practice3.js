import React, { useState,useRef } from 'react'
import Practice4 from './Practice4';

export default function Practice3() {
  const [isPlaying ,setIsPlaying] = useState(false);
  const ref = useRef(null);
  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying)

    if(nextIsPlaying){
      ref.current.play();
    }else{
      ref.current.pause()
    }
  }
  return (
    <div>
      <button onClick={handleClick}>{isPlaying?'pause' : 'play'}</button>
      <video 
      ref={ref}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      >
      <source  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"/>
          </video>
          <Practice4/>
    </div>
  )
}


