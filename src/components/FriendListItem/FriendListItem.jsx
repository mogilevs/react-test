import css from "./FriendListItem.module.css";
import FriendItemStyle from "../FriendItemStyle/FriendItemStyle";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <FriendItemStyle variant={isOnline ? "online" : "offline"}>
        {isOnline ? "Online" : "Offline"}
      </FriendItemStyle>
    </div>
  );
}
