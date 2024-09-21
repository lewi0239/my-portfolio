"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";

// Define the type for the GitHub repository data
type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
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
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((repo) => (
            <li key={repo.id} style={{ paddingBottom: "10px" }}>
              <h2>{repo.name}</h2>
              <p>
                {repo.description
                  ? repo.description
                  : "No description available."}
              </p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Repo
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Portfolio;
