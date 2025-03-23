import React from "react";
import s from "./FriendList.module.css";
import clsx from "clsx";
import FriendListItem from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend_list}>
      {friends.map(({id, name, avatar, isOnline}) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

export default FriendList;


