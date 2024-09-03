import React, { useState } from 'react'
import { Fade } from 'react-reveal';

const Education = () => {
  const [show,setShow] = useState([false,false]);
  const handleClick =(index) => {
    const newShow = [...show];
    newShow[index] = !newShow[index]
    setShow(newShow)
  }
  return (
    <>
    <h1 className='text-center font-bold text-3xl'>Education</h1>
    <p className='text-center font-sans text-xl p-3'>Click on Qualifications to see more details</p>
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col gap-2 items-center hover:bg-gray-200 rounded-xl">
            <h3 onClick={() => 
                handleClick(0)
                } className="text-xl font-bold">10th Class</h3>
                <Fade>
                {show[0] && (
              <p className="text-muted-foreground text-center">
                St thomas english meduim school,surat.
                <br/>
                2021
                <br/>
                64%
              </p>
                )}
                </Fade>
            </div>
            <div className="flex flex-col gap-2 items-center hover:bg-gray-200 rounded-xl">
              <h3 onClick={() => handleClick(1)} className="text-xl font-bold">12th Class</h3>
              <Fade>
              {show[1] && (
              <p className="text-muted-foreground text-center">
              St thomas english meduim school,surat.
              <br/>
                2023
              <br/>
                74%
              </p>
              )}
              </Fade>
            </div>
            <div className="flex flex-col gap-2 items-center hover:bg-gray-200 rounded-xl">
              <h3 onClick={() => handleClick(2)} className="text-xl font-bold">BSC.IT</h3>
              <Fade>
              {show[2] && (
              <p className="text-muted-foreground">
                Gandhinagar University
                <br/>
                2023-2026
                <br/>
                Second Year(pursuing)
              </p>
              )}
              </Fade>
            </div>
            
          </div>
    </>
  )
}

export default Education
