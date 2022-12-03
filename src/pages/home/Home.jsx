import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/profileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>


    </div>
  )
}

export default Home