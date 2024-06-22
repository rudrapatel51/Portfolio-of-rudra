import React from 'react'
import { Fade } from 'react-reveal';

const Practice3 = () => {
    
  return (
    <div>
        {/* <Fade right>
        <img src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D'/>
      </Fade>
      <Fade left>
        <img src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D'/>
      </Fade>
      <Fade bottom>
        <Box color=" chocolate"/>
      </Fade>
      <Fade top>
        <Box color="chartreuse" />
      </Fade>
      <Fade left>
        <Box color="#61dafbaa" />
      </Fade> */}
      <Fade cascade damping={0.1}>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade>
      
    </div>
  )
}

export default Practice3
