"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import ProjectCards from "@/components/ProjectCards";

// Define the type for the GitHub repository data
type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  image?: string; // Optional image field if needed later
};

const Portfolio = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<GitHubRepo[]>([]);

  const getRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GIT_USERNAME}/repos`,
        {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GIT_AUTHKEY}`, // Use the auth key if needed
          },
        }
      );

      const json = await response.json();
      setData(json); // The JSON response will be an array of repositories
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRepos();
  }, []);

  // Pass the isLoading and data states to ProjectCards component
  return <ProjectCards isLoading={isLoading} data={data} />;
};

export default Portfolio;
