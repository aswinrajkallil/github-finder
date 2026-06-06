import React from 'react'
import { useLocation } from 'react-router-dom';

const Following = () => {
 const location = useLocation();

  const following = location.state?.following || [];

  return (
    <div>
      <h2>Following</h2>

      <ul>
        {following.map((user) => (
          <li key={user.id}>
            <img
              src={user.avatar_url}
              alt={user.login}
              width="50"
            />
            <span>{user.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Following
