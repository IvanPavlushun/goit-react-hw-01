import React from "react";
import s from "./FriendList.module.css";
import clsx from "clsx";

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend_list}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.box}>
          <img src={friend.avatar} alt="Avatar" width="64" />
          <p>{friend.name}</p>
          <p className={clsx(s.status, friend.isOnline ? s.green : s.red)}>
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;


