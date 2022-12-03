import React from 'react'
import './Post.css'
import Comment from '../../../src/img/comment.png'
import Share from '../../../src/img/share.png'
import Heart from '../../../src/img/like.png'
import NotLike from '../../../src/img/notlike.png'


const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />

        <div className="postReact">
            <img src={data.liked?Heart: NotLike}
             alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>


        <span style={{color:"var(--gray)",fontSize: '12px'}}>{data.likes} Likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post