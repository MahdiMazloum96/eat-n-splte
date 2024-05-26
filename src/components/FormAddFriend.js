import Button from "./Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function FormAddFriend({ onSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  function addFriendHandler(e) {
    e.preventDefault();
    if (name === "" || image === "") return;
    const newFriend = { name, image, id: uuid(), balance: 0 };

    onSubmit(newFriend);
    setName("");
    setImage("");
  }
  return (
    <form className="form-add-friend" onSubmit={addFriendHandler}>
      <label>😊friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>😊image URl</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>add</Button>
    </form>
  );
}

export default FormAddFriend;
