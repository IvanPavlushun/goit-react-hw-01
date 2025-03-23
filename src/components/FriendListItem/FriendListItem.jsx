import React from 'react'
import s from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={s.box}>
      <img src={avatar} alt="Avatar" width="64" />
      <p>{name}</p>
      <p className={clsx(s.status, isOnline ? s.green : s.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}

export default FriendListItem;