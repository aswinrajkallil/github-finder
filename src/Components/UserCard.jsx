import React from 'react'
import defaultAvatar from '../assets/default-avatar.png';
import './UserCard.css';

function UserCard( {userdata, followers, following, repos} ) {
  console.log(followers);
  console.log(following);
  console.log(repos);
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

        <a className='user-stats' href={followers} target='_blank' rel='noopener noreferrer'>
            {userdata.followers} followers
        </a>
                <p className=''>{userdata.followers} </p>
        <p className='user-stats'>{userdata.following} following</p>
        <p className='user-stats'>{userdata.repos} public repositories</p>

        <p className='user-created-at'>Member since: {new Date(userdata.created_at).toLocaleDateString()}</p>

    </div>
  )
}

export default UserCard
