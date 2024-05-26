import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";
import initialFriends from "./assets/StaticData";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const [friendsId, setFriendsId] = useState(initialFriends);

  function addHandler(friend) {
    setFriendsId((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function toggleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function onSelectHandler(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function billCalculate(value) {
    setFriendsId((friendsId) =>
      friendsId.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initialLIst={friendsId}
          onselect={onSelectHandler}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onSubmit={addHandler} />}
        <Button onclick={toggleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          submitHandler={billCalculate}
        />
      )}
    </div>
  );
}

export default App;
