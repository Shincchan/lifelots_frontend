import React from 'react'
import "./post.css"
import { Favorite, MoreVert, ThumbUp} from "@mui/icons-material"

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="topLeft">
                    <img src="/assets/persons/1_img.jpg" className='poster' alt="" />
                    <span className='username'>Udit</span>
                    <span className='postDate'>5 min ago</span>

                </div>
                <div className="topRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className='postText'>Hey its my first post</span>
                <img src="/assets/persons/1_img.jpg" className='postImage' alt="" />
            </div>
            <div className="postBottom">
                <div className="bottomLeft">
                   <Favorite className='bIcon' htmlColor='red'/>
                   <ThumbUp className='bIcon' htmlColor='Blue'/>
                   <span className='bCounter'>0 people like it</span>

                </div>
                <div className="bottomRight">
                    <span className='commentText'>9 Comments</span>
                </div>
            </div>

        </div>
    </div>
  )
}
