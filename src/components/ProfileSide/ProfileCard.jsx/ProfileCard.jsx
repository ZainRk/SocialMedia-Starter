import React from 'react'
import Cover from '../../../img/cover.jpg'
import Profile from '../../../img/kennncocuk.jpg'
import './ProfileCard.css'


const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Ahmet Kenan ALGÜL</span>
            <span>Junior Back-End Developer</span>
        </div>
    </div>
  )
}

export default ProfileCard