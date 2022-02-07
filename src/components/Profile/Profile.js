import PropTypes from "prop-types";
import styles from "./Profile.module.css";

export default function Profile(props) {
    const {
        avatar,
        userName,
        tag,
        location,
        stats: { followers = 0, views = 0, likes = 0 },
    } = props;

    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    className={styles.avatar}
                    src={avatar}
                    alt="User avatar"

                />
                <p className={styles.name}>{userName}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.stat}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li className={styles.stat}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li className={styles.stat}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}

