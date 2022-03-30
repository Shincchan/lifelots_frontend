import React from 'react'
import './profile.css'
import Feed from '../../components/feed/Feed'
import Navbar from '../../components/navbar/Navbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Profile() {
  return (
    <>
        <Navbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
          <div className="rightTop">
              <div className="profileCover">
                    <img className='coverImage' src="/assets/persons/1_img.jpg" alt="" />
                    <img className='userImage' src="/assets/persons/1_img.jpg" alt="" />
              </div>

            <div className="profileInfo">
                <div className='profileName'>Udit rai</div>
                <span className="profileDescription">hello my friends</span>

            </div> 

          </div>
          <div className="rightBottom">
          <Feed/>
          <Rightbar/>
          </div>
          </div>
          
        </div>
    </>
  )
}
