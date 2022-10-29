import React from 'react'
import ProfileSide from '../../components/ProfileSide/profileSide'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <div className="postSide">Posts</div>
        <div className="RightSide">Rightside</div>


    </div>
  )
}

export default Home