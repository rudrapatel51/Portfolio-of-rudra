import React from "react"
import { Fade } from "react-reveal"
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "React Developer"],
    loop: {},
    typeSpeed: 120,
  })

  return (
    <section id="intro" className="w-full py-12 md:py-24 lg:py-32 p-16">
      <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <Fade left>
            <h1 className="text-black text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {text}
              <Cursor />
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am very passionate about frontend development and make responsive designs using HTML, CSS, and
              JavaScript. I also work with libraries like React.js and CSS frameworks like Tailwind and Bootstrap to
              create complex components and manage state. I'm experienced with REST APIs, Redux, and various React hooks
              to build robust and efficient web applications.
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
  )
}

export default Intro

