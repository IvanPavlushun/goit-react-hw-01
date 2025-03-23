import React from "react";
import s from "./Profile.module.css"

export const Profile = ({ user }) => {
  return (
    <div className={s.box}>
      
        <img
          className={s.avatar}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={s.username}>{user.username}</p>
        <p className={s.tag}> @{user.tag} </p>
        <p className={s.location}> {user.location} </p>
        <ul className={s.list}>
          <li className={s.stats}>
            <span>Followers</span>
            <span className={s.stat}> {user.stats.followers} </span>
          </li>
          <li className={s.stats}>
            <span>Views</span>
            <span className={s.stat}> {user.stats.views} </span>
          </li>
          <li className={s.stats}>
            <span>Likes</span>
            <span className={s.stat}> {user.stats.likes} </span>
          </li>
        </ul>
      
    </div>
  );
};

export default Profile;
