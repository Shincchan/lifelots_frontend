import React from 'react'
import "./rightbar.css"

export default function Rightbar({profile}) {
  
  const HomeRightbar=()=>{
    return (
      <>
        <div className="birthdayContainer">
              <img className='birthdayImage' src="/assets/persons/1_img.jpg" alt="" />
              <span className='birthdayText'><b>Udit</b> and <b>3 others</b> have a birthday today</span>


            </div>
            <hr/>
            <h4 className='rightbarTitle'><b>Online friends</b></h4>
            <ul className="onlineFriends">
              <li className="friend">
                <div className="imageContainer">
                  <img src="/assets/persons/1_img.jpg" className='fImage' alt="" />
                  <span className='iBadge'></span>
                </div>
                <span className='fName' >tera cacha</span>
              </li>
            </ul>
      </>
    )
  }
  
  const ProfileRightbar= ()=>{
    return(
      <>
        <div className='rightbarTitle'>User Information</div>
        <div className='rightbarInfo'>
          <div className="infoItem">city:Bhopal</div>
          <div className="infoItem">From:Bhopal</div>
          <div className="infoItem">Relationship:single</div>
        </div>
        <hr/>
        <div className="rightbarTitle">User's Friends</div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className='followingImage' src="/assets/persons/1_img.jpg" alt="" />
            <span className='followingName'>Aryan</span>
          </div>
          <div className="rightbarFollowing">
            <img className='followingImage' src="/assets/persons/1_img.jpg" alt="" />
            <span className='followingName'>Aryan</span>
          </div>
          <div className="rightbarFollowing">
            <img className='followingImage' src="/assets/persons/1_img.jpg" alt="" />
            <span className='followingName'>Aryan</span>
          </div>
          <div className="rightbarFollowing">
            <img className='followingImage' src="/assets/persons/1_img.jpg" alt="" />
            <span className='followingName'>Aryan</span>
          </div>
          <div className="rightbarFollowing">
            <img className='followingImage' src="/assets/persons/1_img.jpg" alt="" />
            <span className='followingName'>Aryan</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
           {profile? <ProfileRightbar/>:<HomeRightbar/>}
        </div>
    </div>
  )
}
