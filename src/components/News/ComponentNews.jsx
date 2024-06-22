import React, { useState } from "react";

import Navbar from "../../Portfolio/Navbar";
import Intro from "../../Portfolio/Intro";
import Skills from "../../Portfolio/Skills";
import Form from "../../Portfolio/Form";
import Practice3 from "../../practice/Practice3"

export default function ComponentNews() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Intro />
        <Skills />
        <Form />
      </main>
      {/* <Practice3/> */}
      <footer className="w-full bg-gray-800 py-6">
        <div className="container px-4 text-center md:px-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Rudra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// function CodeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="16 18 22 12 16 6" />
//       <polyline points="8 6 2 12 8 18" />
//     </svg>
//   );
// }

// function CodepenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
//       <line x1="12" x2="12" y1="22" y2="15.5" />
//       <polyline points="22 8.5 12 15.5 2 8.5" />
//       <polyline points="2 15.5 12 8.5 22 15.5" />
//       <line x1="12" x2="12" y1="2" y2="8.5" />
//     </svg>
//   );
// }

// function EclipseIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="M12 2a7 7 0 1 0 10 10" />
//     </svg>
//   );
// }
