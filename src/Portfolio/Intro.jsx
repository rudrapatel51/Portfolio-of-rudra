import React from "react";
import { Fade } from 'react-reveal';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'React Developer'],
    loop: {},
    typeSpeed: 120,
  })
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 p-16">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <Fade left>
              <h1 className="text-black text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {text}<span><Cursor /></span>
              </h1>
              <h2 className="text-blue-700 text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                {/* {text}<span><Cursor/></span> */}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am very passionate in frontend development and make responsive design using html,css and javascript and also working with libraries of js like React.js and libraries of css like tailwind and bootstrap and make complex components and state managers and use different types of hook in react.js and know Rest api to fetch in react.js to see data in frontend and use redux ,reducer,usecontext api in react.js functionality.
              </p>
            </Fade>
          </div>
          <Fade right>
            <img
              src="./rudra.jpeg"
              width="550"
              height="550"
              alt="Rudra"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Intro;
