import React from 'react';
import defaultAvatar from '../assets/default-avatar.png';
import './UserCard.css';
import { Link } from 'react-router-dom';

function UserCard({ userdata, Followers, Following, Repositories }) {
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
          className='user-stats'
          to="/repositories"
          state={{ repositories: Repositories }}
        >
          📁 {userdata.repos || 0} Repositories
        </Link>

        <Link
          className='user-stats'
          to="/followers"
          state={{ followers: Followers }}
        >
          👥 {userdata.followers || 0} Followers
        </Link>

        <Link
          className='user-stats'
          to="/following"
          state={{ following: Following }}
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