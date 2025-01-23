import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { Bounce } from "react-reveal";

const Skills = () => {
  const skills = [
    {
      icon: <CodepenIcon className="h-12 w-12" />,
      name: "React",
      description: "Experienced in building complex, scalable, and performance-optimized React applications."
    },
    {
      icon: <EclipseIcon className="h-12 w-12" />,
      name: "JavaScript",
      description: "Proficient in modern JavaScript, including ES6+ features and best practices."
    },
    {
      icon: <IoLogoCss3 size={50} />,
      name: "CSS",
      description: "Skilled in CSS, including SCSS and Tailwind CSS, Bootstrap CSS to create visually appealing and responsive designs."
    },
    {
      icon: <SiHtml5 size={50} />,
      name: "HTML",
      description: "Skilled in HTML to create websites and use different tags effectively."
    },
    {
      icon: <BiLogoPostgresql size={50} />,
      name: "SQL",
      description: "Skilled in SQL, connecting with databases and learning more about different queries and features of RDBMS."
    }
  ];

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Rudra is proficient in the following technologies:
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {skills.map((skill, index) => (
            <Bounce top duration={1000} key={index}>
              <div className="flex flex-col gap-2 items-center hover:bg-gray-200 rounded-xl p-4">
                {skill.icon}
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <p className="text-muted-foreground text-center">{skill.description}</p>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  );
};

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function EclipseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  );
}

export default Skills;
