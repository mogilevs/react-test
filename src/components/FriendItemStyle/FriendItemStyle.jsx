import "./FriendItemStyle.css";

export default function FriendItemStyle({ variant, children }) {
  const styles = ["status", variant];
  return <p className={styles.join(" ")}>{children}</p>;
}
