import React from 'react'
import "./sidebar.css"
import { Bookmark, Group, HelpOutline, RssFeed, School, WorkOutline ,Event, Chat} from '@mui/icons-material'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                

                <li className="listItems">
                    <RssFeed className='icon'/>
                    <span className='item'>Feed</span>
                </li>
                <li className="listItems">
                    <Group className='icon'/>
                    <span className='item'>Groups</span>
                </li>
                <li className="listItems">
                    <Chat className='icon'/>
                    <span className='item'>Chat</span>
                </li>
                
                <li className="listItems">
                    <School className='icon'/>
                    <span className='item'>Courses</span>
                </li>
                <li className="listItems">
                    <Bookmark className='icon'/>
                    <span className='item'>Bookmark</span>
                </li>
                <li className="listItems">
                    <HelpOutline className='icon'/>
                    <span className='item'>Questions</span>
                </li>
                <li className="listItems">
                    <WorkOutline className='icon'/>
                    <span className='item'>Jobs</span>
                </li>
                <li className="listItems">
                    <Event className='icon'/>
                    <span className='item'>Events</span>
                </li>
                <li className="listItems">
                    <School className='icon'/>
                    <span className='item'>Courses</span>
                </li>

            </ul>
            <button type="button" className='button'>Show more</button>
            <hr/>
            <ul className="sidebarFriendList">
                <li className="friend">
                    <img className='fimage' src="/assets/persons/1_img.jpg" alt="" />
                    <span className='name'>udit</span>
                </li>
                <li className="friend">
                    <img className='fimage' src="/assets/persons/1_img.jpg" alt="" />
                    <span className='name'>udit</span>
                </li>
                <li className="friend">
                    <img className='fimage' src="/assets/persons/1_img.jpg" alt="" />
                    <span className='name'>udit</span>
                </li>
                <li className="friend">
                    <img className='fimage' src="/assets/persons/1_img.jpg" alt="" />
                    <span className='name'>udit</span>
                </li>
                <li className="friend">
                    <img className='fimage' src="/assets/persons/1_img.jpg" alt="" />
                    <span className='name'>udit</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
