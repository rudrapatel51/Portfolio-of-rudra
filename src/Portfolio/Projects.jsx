import React from "react"
import { Fade } from "react-reveal"

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Website",
      link: "https://thepropsstore.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVW43aNKZkW4COwSYW9oV-7VAlLc-V2VW-A&s",
      description:
        "This website frontend was made by me and it is a WordPress website created for client requirements with features like slider, product slider, different pages, etc.",
    },
    {
      title: "Prompt Engineering",
      image: "/images/Untitled design (3).png",
      description:
        "We created a full stack app for a Prompt Engineering Event using HTML, CSS, JavaScript for the frontend, and Flask for the backend. It uses the ModernLabs API with authorization and bearer token.",
    },
    {
      title: "Basic Blog Page Website",
      link: "https://kailashenterprise.w3spaces.com",
      image: "/images/Untitled design (2).png",
      description:
        "This is my first website made with HTML, CSS, and JS. It's a single page website with responsive design that shows a company blog.",
    },
    {
      title: "Effortless Persian Club",
      link: "https://ef.webyourvyavsay.com/",
      image: "/images/Screenshot 2024-06-24 202245.png",
      description:
        "This is a dynamic website made for a client using WordPress (CMS) with responsive design and a registration form to contact clients.",
    },
    {
      title: "Travel Website",
      link: "https://travel-with-us-rudrapatel51s-projects.vercel.app/",
      image: "/images/travel.png",
      description:
        "This website is made for a travel company to showcase their most visited places and all tour plans that the company offers, including ongoing discounts.",
    },
    {
      title: "College Orientation",
      link: "https://orientation-gu.vercel.app/",
      image: "/images/image.png",
      description:
        "This website is made to collect data of students who have been present. It generates a QR code by entering details, and when a student comes with the QR code, the faculty can scan to check if the student exists.",
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <Fade>Featured Projects</Fade>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of Rudra's recent web development projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <Fade key={index} left={index % 2 === 0} right={index % 2 !== 0}>
              <div className="flex flex-col gap-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  width="550"
                  height="310"
                  alt={project.title}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-blue-500 hover:underline">
                      View Project
                    </a>
                  )}
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

