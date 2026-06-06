import React from 'react'
import SearchBar from './Components//SearchBar'
import { Routes, Route } from 'react-router-dom'
import Followers from './Components/Pages/Followers'
import Following from './Components/Pages/Following'
import Repositories from './Components/Pages/Repositories'

function App() {
  return (
      <div>
        <SearchBar/>
        <Routes>
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following />} />
          <Route path="/repositories" element={<Repositories />} />
        </Routes>
      </div>
  )
}

export default App
