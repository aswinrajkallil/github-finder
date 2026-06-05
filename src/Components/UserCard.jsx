import React from 'react'
import defaultAvatar from '../assets/default-avatar.png';

function UserCard( {userdata} ) {
  return (
    <div>
        <img src={userdata.image || defaultAvatar} alt='User Avatar' />
        <p>{userdata.name}</p>
        <p>{userdata.bio}</p>
        <p>{userdata.followers}</p>
        <p>{userdata.following}</p>
        <p>{userdata.repos}</p>
    </div>
  )
}

export default UserCard
