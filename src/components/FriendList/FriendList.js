import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList ({friends}){
    return (
    <ul className="friend-list" >
        {friends.map(({id, avatar, name, isOnline}) => {
            return (
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
              /> 
            );

        })}
    </ul>
    )}


FriendListItem.PropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
      ),
}


