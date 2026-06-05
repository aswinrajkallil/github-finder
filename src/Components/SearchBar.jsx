import React from 'react'
import { useState } from 'react';
import UserCard from './UserCard';

function SearchBar() {

const [Username, setUsername] = useState({});

const searchUser = async (username) => {
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        console.log(userData);

        if(userData.message === 'Not Found'){
            alert('User not found!');
            return;
        }
        setUsername({
            image: userData.avatar_url,
            name: userData.name,
            bio: userData.bio,
            avatar: userData.avatar_url,
            followers: userData.followers,
            following: userData.following,
            repos: userData.public_repos   
        })
    }
    catch(error){
        console.error('Error fetching user data:', error);
    }
}

const handleSearch = () => {
    console.log('Search button clicked');
    const username = document.getElementById('search-input').value;
    searchUser(username);
}


  return (
    <div>
      <p>sdufhgudfg</p>
      <input  
        id="search-input" 
        type='text' 
        placeholder='Search...' 
        onChange={
            (e) =>{e.target.value =e.target.value.toLowerCase()}
        }
    />
      <button onClick={handleSearch}>Search</button>

      <UserCard userdata={{
        image: Username.image,
        name: Username.name,
        bio: Username.bio,
        avatar: Username.avatar,
        followers: Username.followers,
        following: Username.following,
        repos: Username.repos
      }}/>
    </div>
  )
}

export default SearchBar
