import React from 'react'
import { useLocation } from 'react-router-dom';
import './Following.css';

const Following = () => {
 const location = useLocation();

  const following = location.state?.following || [];

  return (
    <div className='following-container'>
      <h2 className='following-title'>Following</h2>

      <ul className='following-list'>
      {following.map((user) => (
          <li key={user.id} className='following-item'>
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
  </div>
  );
}

export default Following
