import React from 'react'
import { useLocation } from 'react-router-dom';
import './Following.css';

const Following = () => {
 const location = useLocation();

  const following = location.state?.following || [];

  const handleFollowingClick = (login) => {
    window.open(`https://github.com/${login}`, '_blank');
  };

  return (
    <div className='following-container' id='content-section'>
      <h2 className='following-title'>Following</h2>

      {following.length === 0 ? (
        <p className='no-data-message'>No following data available</p>
      ) : (
        <ul className='following-list'>
          {following.map((user) => (
            <li 
              key={user.id} 
              className='following-item'
              onClick={() => handleFollowingClick(user.login)}
              role='button'
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleFollowingClick(user.login)}
            >
              <img
                className='following-avatar'
                src={user.avatar_url}
                alt={user.login}
                width="80"
              />
              <span className='following-login'>{user.login}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Following
