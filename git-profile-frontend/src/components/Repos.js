import React from "react";

const Repos = ({ repos, theme }) => {
  return (
    <div className="repos" style={{ backgroundColor: theme.cardBackground }}>
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            : {repo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;