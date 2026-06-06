import React from 'react';
import { useLocation } from 'react-router-dom';
import './Followers.css';

const Followers = () => {
  const location = useLocation();

  const followers = location.state?.followers || [];

  return (
    <div className='followers-container'>
      <h2 className='followers-title'>Followers</h2>

      <ul  className='followers-list'>
        {followers.map((follower) => (
          <li key={follower.id} className='followers-item'>
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
    </div>
  );

}
export default Followers;