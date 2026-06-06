import React from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
import './SearchBar.css';
import Followers from './Pages/Followers';

function SearchBar() {

const [Username, setUsername] = useState({});
const [Followers, setFollowers] = useState([]);
const [Following, setFollowing] = useState([]);

const searchUser = async (username) => {
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        console.log(userData);
      // 
        const followersResponse = await fetch(userData.followers_url);
        const followersData = await followersResponse.json();
        console.log(followersData);

        const followingResponse = await fetch(userData.following_url.replace('{/other_user}', ''));
        const followingData = await followingResponse.json();
        console.log(followingData);

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
            // followers_url: userData.followers_url,
            following: userData.following,
            // following_url: userData.following_url,
            repos: userData.public_repos,
            profilelink: userData.html_url,
            location: userData.location,
            company: userData.company,
            blog: userData.blog,
            twitter: userData.twitter_username,
            created_at: userData.created_at
        })
        setFollowers(followersData);
        setFollowing(followingData);

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
    <div className='search-bar'>
      <input
        className='search-input'  
        id="search-input" 
        type='text' 
        placeholder='Search...' 
        onChange={
            (e) =>{e.target.value =e.target.value.toLowerCase()}
        }
         onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
          } }
        
    />
      <button className='search-button' onClick={handleSearch}>Search</button>

      <UserCard userdata={{
        image: Username.image,
        name: Username.name,
        bio: Username.bio,
        avatar: Username.avatar,
        followers: Username.followers,
        following: Username.following,
        profilelink: Username.profilelink,
        created_at: Username.created_at,
        location: Username.location,
        company: Username.company,
        blog: Username.blog,
        twitter: Username.twitter
      }}
      Followers={Followers}
      Following={Following}
      />
    </div>
  )
}

export default SearchBar
