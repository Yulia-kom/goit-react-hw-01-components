export default function Profile (props) {
    const {avatar, userName, tag, location, followers, views, likes} = props;

        return (
        <div class="profile">
            <div class="description">
                <img
                src={avatar}
                alt=""
                class="avatar"
                width="180"
                />
                <p class="name">{userName}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                <span class="label">Followers</span>
                <span class="quantity">{followers}</span>
                </li>
                <li>
                <span class="label">Views</span>
                <span class="quantity">{views}</span>
                </li>
                <li>
                <span class="label">Likes</span>
                <span class="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    );
}

