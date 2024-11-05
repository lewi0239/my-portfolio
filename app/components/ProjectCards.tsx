import React from "react";

// Define the type for props
type ProjectCardsProps = {
  isLoading: boolean;
  data: {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    image?: string; // Optional image field if needed later
  }[];
};

const ProjectCards: React.FC<ProjectCardsProps> = ({ isLoading, data }) => {
  return (
    <div style={{ padding: "2rem" }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : // Check if data is an array before mapping
      Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((repo) => (
            <li key={repo.id} style={{ paddingBottom: "1.6rem" }}>
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
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
};

export default ProjectCards;
