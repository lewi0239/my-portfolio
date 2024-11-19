"use client"; // Ensure this is a client component
import Image from "next/image";
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
      <h2 className="flex justify-center text-3xl font-bold mb-4 text-black">
        Portfolio Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-6">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <li
              key={index}
              className="bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">
                <Image
                  src={project.projectImage}
                  alt={`${project.projectName} logo`}
                  width={96}
                  height={96}
                  className="w-full h-auto rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black truncate">
                  {project.projectName}
                </h3>
                <p className="mt-1 text-black">
                  Project Type: {project.projectType}
                </p>
                <p className="mt-2 text-sm text-black strong">
                  Language: {project.projectLanguage}
                </p>
                <p className="mt-2 text-black text-sm">
                  {project.projectDescription}
                </p>
                <a
                  href={project.sourceURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-4 inline-block"
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
