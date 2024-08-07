import css from './Profile.module.css'
export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
 
    return (
    <div className={css.card}>
      <div className={css.top}>
        <img className={css.image}
          src={image}
          alt="User avatar"
        />
              <p className={css.nameText}>{name}</p>
              <p className={css.tagText}>{tag}</p>
              <p className={css.tagText}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemTitle}>Followers</span>
                  <span className={css.itemValue}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Views</span>
                  <span className={css.itemValue}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Likes</span>
                  <span className={css.itemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
