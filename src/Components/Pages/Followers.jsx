import React from 'react';
import { useLocation } from 'react-router-dom';
import './Followers.css';

const Followers = () => {
  const location = useLocation();

  const followers = location.state?.followers || [];

  const handleFollowerClick = (login) => {
    window.open(`https://github.com/${login}`, '_blank');
  };

  return (
    <div className='followers-container' id='content-section'>
      <h2 className='followers-title'>Followers</h2>

      {followers.length === 0 ? (
        <p className='no-data-message'>No followers data available</p>
      ) : (
        <ul className='followers-list'>
          {followers.map((follower) => (
            <li 
              key={follower.id} 
              className='followers-item'
              onClick={() => handleFollowerClick(follower.login)}
              role='button'
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleFollowerClick(follower.login)}
            >
              <img
                className='followers-avatar'
                src={follower.avatar_url}
                alt={follower.login}
                width="80"
              />
              <span className='followers-login'>{follower.login}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}
export default Followers;