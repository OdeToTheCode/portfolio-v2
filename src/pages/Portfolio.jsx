import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/OdeToTheCode/repos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .slice(0, 6);
        setRepos(filteredRepos);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
    fetchRepos();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row">
        {repos.slice(0, 3).map(repo => (
          <div className="col-4" key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img
                className="repo-img"
                src={`https://raw.githubusercontent.com/OdeToTheCode/${repo.name}/main/preview.png`}
                alt={repo.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';
                }}
              />
              <div className="repo-name">{repo.name}</div>
            </a>
          </div>
        ))}
      </div>
      <div className="row">
        {repos.slice(3, 6).map(repo => (
          <div className="col-4" key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img
                className="repo-img"
                src={`https://raw.githubusercontent.com/OdeToTheCode/${repo.name}/main/preview.png`}
                alt={repo.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';
                }}
              />
              <div className="repo-name">{repo.name}</div>
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .repo-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          position: relative;
        }
        .repo-name {
          text-align: center;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
