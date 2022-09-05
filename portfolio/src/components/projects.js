import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-projectsTemporaryBack w-screen h-screen bg-cover flex justify-center items-center"
    >
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-stone-300 text-7xl font-medium">
          <span className="mix-blend-difference">Nothing here... </span>
          <span className="font-semibold text-8xl text-transparent bg-gradient-to-tl from-red-600 to-red-400 bg-clip-text drop-shadow-projectsTemporaryShadow">
            Yet!
          </span>
        </h1>
      </div>
    </section>
  );
}
