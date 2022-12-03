import React from 'react'
import ProfileCard from '../../../../src/components/ProfileCard/ProfileCard.jsx'
import ProfileLeft from '../../../../src/components/ProfileLeft/ProfileLeft'
import PostSide from '../../../../src/components/PostSide/PostSide.jsx'
import './Profile.css'
import RightSide from '../../../../src/components/RightSide/RightSide.jsx'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
          <ProfileCard/>
          <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile