import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <>
      <div className="ProfileCard">
        <div className="ProfileImages">
          <img src={Cover} alt="" />
          <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
          <span>Zendaya MJ</span>
          <span>Senior UI/UX Designer</span>
        </div>

        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>6,890</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>1225</span>
              <span>Followers</span>
            </div>

            <span className="myProfile">My Profile</span>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
