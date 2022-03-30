import React from 'react'
import "./navbar.css";
import { Person, Search, Chat, Notifications } from '@mui/icons-material';

export default function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className="navbarLeft">
        <span className='webName'>LifeLots</span>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <Search className='searchIcon' />
          <input type="text" placeholder='search friends post' className='searchInput' />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Home</span>
          <span className="navbarLink">posts</span>
        </div>
        <div className="navbarIcons">
          <div className="item">
            <Person />
            <span className="badge">1</span>

          </div>
          <div className="item">
            <Chat />
            <span className="badge">1</span>

          </div>
          <div className="item">
            <Notifications />
            <span className="badge">1</span>
          </div>
        </div>
        <img src="/assets/persons/1_img.jpg" alt=" " className='navImage'></img>
      </div>

    </div>
  )
}
