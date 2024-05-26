import initialFriends from "../assets/StaticData";
import Friend from "./Friend";

function FriendsList({ initialLIst, onselect, selectedFriend }) {
  return (
    <div>
      {initialLIst.map((friend) => (
        <Friend
          friend={friend}
          key={friend.name}
          onselect={onselect}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
}

export default FriendsList;
