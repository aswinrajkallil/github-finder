import React from 'react';
import defaultAvatar from '../assets/default-avatar.png';
import './UserCard.css';
import { Link, useLocation } from 'react-router-dom';

function UserCard({ userdata, Followers, Following, Repositories, onSectionChange, activeSection }) {
  const location = useLocation();

  // Determine active section based on current route
  const getActiveSection = () => {
    if (location.pathname === '/followers') return 'followers';
    if (location.pathname === '/following') return 'following';
    if (location.pathname === '/repositories') return 'repositories';
    return null;
  };

  const currentActive = activeSection || getActiveSection();

  const handleClick = (section) => {
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  return (
    <div className='user-card'>

      <a
        href={userdata.profilelink}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='user-avatar'
          src={userdata.image || defaultAvatar}
          alt='User Avatar'
        />
      </a>

      <a
        className='user-name'
        href={userdata.profilelink}
        target='_blank'
        rel='noopener noreferrer'
      >
        {userdata.name || 'GitHub User'}
      </a>

      <p className='user-bio'>
        {userdata.bio || 'No bio available'}
      </p>

      {userdata.location && (
        <p className='user-location'>{userdata.location}</p>
      )}

      {userdata.company && (
        <p className='user-company'>{userdata.company}</p>
      )}

      {userdata.blog && (
        <p className='user-blog'>{userdata.blog}</p>
      )}

      {userdata.twitter && (
        <p className='user-twitter'>@{userdata.twitter}</p>
      )}

      <div className='user-links'>

        <Link
          className={`user-stats ${currentActive === 'repositories' ? 'active' : ''}`}
          to="/repositories"
          state={{ repositories: Repositories }}
          onClick={() => handleClick('repositories')}
        >
          📁 {userdata.repos || 0} Repositories
        </Link>

        <Link
          className={`user-stats ${currentActive === 'followers' ? 'active' : ''}`}
          to="/followers"
          state={{ followers: Followers }}
          onClick={() => handleClick('followers')}
        >
          👥 {userdata.followers || 0} Followers
        </Link>

        <Link
          className={`user-stats ${currentActive === 'following' ? 'active' : ''}`}
          to="/following"
          state={{ following: Following }}
          onClick={() => handleClick('following')}
        >
          ➕ {userdata.following || 0} Following
        </Link>

      </div>

      {userdata.created_at && (
        <p className='user-created-at'>
          Member since:{' '}
          {new Date(userdata.created_at).toLocaleDateString()}
        </p>
      )}

    </div>
  );
}

export default UserCard;