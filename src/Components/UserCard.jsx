import React from 'react'
import defaultAvatar from '../assets/default-avatar.png';
import './UserCard.css';
import { Link } from 'react-router-dom';

function UserCard( {userdata, Followers, Following} ) {
  return (
    <div className='user-card'>
       <a className='user-name' href={userdata.profilelink} target='_blank' rel='noopener noreferrer'>
            <img className='user-avatar' src={userdata.image || defaultAvatar} alt='User Avatar' />
        </a>
        <a className='user-name' href={userdata.profilelink} target='_blank' rel='noopener noreferrer'>
            {userdata.name }
        </a>        
        <p className='user-location'>{userdata.location}</p>
        <p className='user-company'>{userdata.company}</p>
        <p className='user-blog'>{userdata.blog}</p>
        <p className='user-twitter'>{userdata.twitter}</p>
        <p className='user-bio'>{userdata.bio}</p>
        
        <Link
          className='user-stats'
          to="/followers"
          state={{ followers: Followers }}>
          {userdata.followers} View Followers
        </Link>
        <Link
          className='user-stats'
          to="/following"
          state={{ following: Following }}>
          {userdata.following} View Following
        </Link>
        <p className='user-stats'>{userdata.repos} public repositories</p>

        <p className='user-created-at'>Member since: {new Date(userdata.created_at).toLocaleDateString()}</p>


    </div>
  )
}

export default UserCard
