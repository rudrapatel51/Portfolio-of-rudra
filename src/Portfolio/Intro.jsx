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
      <section className="w-full py-12 md:py-24 lg:py-32">
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
      <section
        id="projects"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <Fade>
                  Featured Projects
                </Fade>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of Rudra's recent web development projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Fade left>
              <div className="flex flex-col gap-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVW43aNKZkW4COwSYW9oV-7VAlLc-V2VW-A&s"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-fit object-center sm:w-full"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Ecommerce Website</h3>
                  <a href="https://thepropsstore.com">
                    <h3 className="text-2xl font-bold">thepropsstore</h3>
                  </a>
                  <p className="text-muted-foreground">
                    This website frontend was made by me and it is wordpress
                    website and this is created for client requirment and all
                    features like slider,products slider,different pages,etc
                  </p>
                </div>
              </div>
            </Fade>
            <div className="flex flex-col gap-4">
              <Fade right>
                <img
                  src="/images/Untitled design (3).png"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-fit object-center sm:w-full"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Prompt Engineering</h3>
                  <p className="text-muted-foreground">
                    We Created a full stack app for Prompt Engineering Event i
                    that we use Html,css and JavaScript for functional to use the
                    fetch the data from the backend , and in backend we use Flack
                    App for using the api of modernlabs with authorization and
                    bearar token send by backend(Flack) to modernlabs and get the
                    response in return as image address and that image is store in
                    SQL data and after that Html Fetch the data From the backend.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="flex flex-col gap-4">
              <Fade left>
                <img
                  src="/images/Untitled design (2).png"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-fit object-center sm:w-full"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic Blog Page Website</h3>
                  <a href="https://kailashenterprise.w3spaces.com">
                    <h3 className="text-2xl font-bold">Kailashenterprise</h3>
                  </a>
                  <p className="text-muted-foreground">
                    This is my first website made with Html,css and Js and this is
                    a single page website with responsive design that show a blog
                    of company.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="flex flex-col gap-4">
              <Fade right>
                <img
                  src="/images/Screenshot 2024-06-24 202245.png"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-fit object-center sm:w-full"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Effortless Persian Club</h3>
                  <a href="https://ef.webyourvyavsay.com/">
                    <h3 className="text-2xl font-bold"></h3>
                  </a>
                  <p className="text-muted-foreground">
                    This is Dynamic Website made for the client using
                    wordpress(cms) with responsive design and make registration
                    form to contact with clients and it is made by me.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
