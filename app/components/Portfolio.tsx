"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";

// Define the type for a single project
type myProjectsProps = {
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectLanguage: string;
  projectImage: string;
  sourceURL: string;
};

// Portfolio component to render the list of projects
const Portfolio = () => {
  const [projects, setProjects] = useState<myProjectsProps[]>([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/projects/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="bg-white">
      <h2 className="text-3xl font-bold mb-4 text-black">Portfolio Projects</h2>
      <ul className="grid grid-cols-3 p-5 mb-5 gap-y-6 gap-x-4">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <li
              key={index}
              className="w-96  bg-slate-100 rounded-b-lg rounded-t-lg mb-5"
            >
              <div className="flex justify-center">
                <img
                  src={project.projectImage}
                  alt={`${project.projectName} logo`}
                  className="w-96 mb-5 rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-black text-wrap flex flex-grow-0">
                  {project.projectName}
                </h3>
                <p className="mt-1 text-black">{project.projectType}</p>
                <p className="mt-2 text-black">{project.projectDescription}</p>
                <p className="mt-1 text-sm text-black">
                  Language: {project.projectLanguage}
                </p>
                <a
                  href={project.sourceURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mb-5 inline-block"
                >
                  View Source
                </a>
              </div>
            </li>
          ))
        ) : (
          <p>Loading projects...</p> // Display loading text while data is being fetched
        )}
      </ul>
    </div>
  );
};

export default Portfolio;
