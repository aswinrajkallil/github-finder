import React from 'react';
import { useLocation } from 'react-router-dom';
import './Repositories.css';

const Repositories = () => {
  const location = useLocation();

  const repositories = location.state?.repositories || [];

  return (
    <div className='repo-container'>
      <h2 className='repo-title'>Repositories</h2>

      {repositories.length === 0 ? (
        <p className='repo-empty'>
          No repositories found.
        </p>
      ) : (
        <ul className='repo-list'>
          {repositories.map((repo) => (
            <li key={repo.id} className='repo-item'>

              <a
                href={repo.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='repo-link'
              >
                <h3 className='repo-name'>
                  {repo.name}
                </h3>
              </a>

              <p className='repo-description'>
                {repo.description || 'No description available'}
              </p>

              <div className='repo-info'>

                {repo.language && (
                  <span className='repo-language'>
                    🔤 {repo.language}
                  </span>
                )}

                <span className='repo-stars'>
                  ⭐ {repo.stargazers_count}
                </span>

                <span className='repo-forks'>
                  🍴 {repo.forks_count}
                </span>

              </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Repositories;