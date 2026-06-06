import React, { useState } from 'react';
import UserCard from './UserCard';
import './SearchBar.css';

function SearchBar({ children }) {
  const [Username, setUsername] = useState({});
  const [Followers, setFollowers] = useState([]);
  const [Following, setFollowing] = useState([]);
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async () => {
    const inputElement = document.getElementById('search-input');
    const username = inputElement.value;

    if (!username) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('User not found');
      const userData = await response.json();

      setUsername(userData);

      // Fetch followers
      const followersRes = await fetch(userData.followers_url);
      const followersData = await followersRes.json();
      setFollowers(followersData);

      // Fetch following
      const followingRes = await fetch(`https://api.github.com/users/${username}/following`);
      const followingData = await followingRes.json();
      setFollowing(followingData);

      // Fetch repositories
      const reposRes = await fetch(userData.repos_url);
      const reposData = await reposRes.json();
      setRepositories(reposData);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUsername({});
      setFollowers([]);
      setFollowing([]);
      setRepositories([]);
    }
  };

  return (
    <div className='search-bar'>
      <div className='search-input-container'>
        <input
          className='search-input'
          id="search-input"
          type='text'
          placeholder='Search GitHub username...'
          onChange={(e) => {
            e.target.value = e.target.value.toLowerCase();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          className='search-button'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className='dashboard'>

        <UserCard
          userdata={{
            image: Username.avatar_url,
            name: Username.name,
            bio: Username.bio,
            avatar: Username.avatar_url,
            followers: Username.followers,
            following: Username.following,
            profilelink: Username.html_url,
            created_at: Username.created_at,
            location: Username.location,
            company: Username.company,
            blog: Username.blog,
            twitter: Username.twitter_username,
            repos: Username.public_repos,
          }}
          Followers={Followers}
          Following={Following}
          Repositories={repositories}
        />

        <div className='result-section'>
          {children || (
            <>
              <h2>Choose an option from the profile</h2>
              <p>
                Click on Followers, Following, or Repositories to view details.
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default SearchBar;