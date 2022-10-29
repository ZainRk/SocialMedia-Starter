import React from 'react'
import LogoSearch from './LogoSearch/LogoSearch'
import ProfileCard from './ProfileCard.jsx/ProfileCard'

const profileSide = () => {
  return (
    <div className="profileSide">
        <LogoSearch/>
        <ProfileCard/>
    </div>
  )
}

export default profileSide