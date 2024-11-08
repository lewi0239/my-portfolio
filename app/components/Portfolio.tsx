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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Portfolio Projects</h2>
      <ul className="space-y-4 grid grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <li key={index} className="block max-w-sm p-6 ">
              <h3 className="text-xl font-semibold">{project.projectName}</h3>
              <p className="mt-1 text-gray-700">{project.projectType}</p>
              <p className="mt-2">{project.projectDescription}</p>
              <p className="mt-1 text-sm text-gray-600">
                Language: {project.projectLanguage}
              </p>
              <img
                src={project.projectImage}
                alt={`${project.projectName} logo`}
                className="w-20 h-20 mt-4"
              />
              <a
                href={project.sourceURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Source
              </a>
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
