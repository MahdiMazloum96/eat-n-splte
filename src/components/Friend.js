import Button from "./Button";
function Friend({ friend, onselect, selectedFriend }) {
  const selectedOne = friend.id === selectedFriend?.id;
  return (
    <div>
      <li className={selectedOne ? "selected" : ""}>
        <img src="{friend.image}" alt="{friend.name" />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            you ouw {friend.name}
            {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name}ows you
            {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && (
          <p>
            you and {friend.name}
            are even
          </p>
        )}
        <Button onclick={() => onselect(friend)}>
          {selectedOne ? "close" : "click"}
        </Button>
      </li>
    </div>
  );
}

export default Friend;
