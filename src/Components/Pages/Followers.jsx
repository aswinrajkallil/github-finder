import React from 'react';
import { useLocation } from 'react-router-dom';

const Followers = () => {
  const location = useLocation();

  const followers = location.state?.followers || [];

  return (
    <div>
      <h2>Followers</h2>

      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <img
              src={follower.avatar_url}
              alt={follower.login}
              width="50"
            />
            <span>{follower.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;