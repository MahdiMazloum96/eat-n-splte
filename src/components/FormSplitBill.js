import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, submitHandler }) {
  const [billValue, setBillValue] = useState("");
  const [yourBillValue, setYourBillValue] = useState("");
  const friendExpense = billValue - yourBillValue;
  const [whoPayBill, setHwoPayBill] = useState("user");
  function splitBillHandler(e) {
    e.preventDefault();
    if (!billValue || !yourBillValue) return;
    submitHandler(whoPayBill === "user" ? friendExpense : -yourBillValue);
  }

  return (
    <form className="form-split-bill" onSubmit={splitBillHandler}>
      <h2>`split bill with ${selectedFriend.name}` </h2>
      <label>😊bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label>😊your expense</label>
      <input
        type="text"
        value={yourBillValue}
        onChange={(e) =>
          setYourBillValue(
            Number(e.target.value) > billValue
              ? yourBillValue
              : Number(e.target.value)
          )
        }
      />

      <label>`😊${selectedFriend.name} expense `</label>
      <input type="text" disabled value={friendExpense} />
      <label> 😊who is paying the bill</label>
      <select
        value={whoPayBill}
        onChange={(e) => setHwoPayBill(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>split bill</Button>
    </form>
  );
}

export default FormSplitBill;
