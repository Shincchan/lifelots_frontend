import React from 'react'
import "./share.css"
import {PermMedia ,Label, Room ,EmojiEmotions} from "@mui/icons-material"
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='spic' src="/assets/persons/1_img.jpg" alt="" />
                <input className='shareInput' type="text" placeholder='Enter text to post' />
            </div>
            <hr/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="option">
                        <PermMedia htmlColor='tomato' className='sicon'/>
                        <span className='stext'>photo or video</span>
                    </div>
                    <div className="option">
                        <Label htmlColor='blue' className='sicon'/>
                        <span className='stext'>Tag</span>
                    </div>
                    <div className="option">
                        <Room htmlColor='green' className='sicon'/>
                        <span className='stext'>location</span>
                    </div>
                    <div className="option">
                        <EmojiEmotions htmlColor='yellow' className='sicon'/>
                        <span className='stext'>Reaction</span>
                    </div>

                </div>
                <button className='shareButton' type='submit'>Share</button>
            </div>
        </div>    
    </div>
  )
}
