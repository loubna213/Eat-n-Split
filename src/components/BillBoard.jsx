import { useState } from "react";
import Button from "./Button";

const BillBoard = ({ friends, selectedFriendId, onBalanceChange }) => {
  const [billForm, setBillForm] = useState({
    billValue: '',
    yourExpense: '',
    select: 'user',
  })
  const paidByFriend = billForm.billValue ? billForm.billValue - billForm.yourExpense : '';

  const friendName = friends.map(friend => selectedFriendId === friend.id ? friend.name : '')

  function handleSubmit(e) {
    e.preventDefault()

    if(!billForm.billValue || !billForm.yourExpense) return;
    onBalanceChange(selectedFriendId,(billForm.select === 'user') ? (paidByFriend) : (-billForm.yourExpense))

    // setBillForm({
    //   billValue: '',
    //   yourExpense: '',
    //   friendExpense: '',
    //   select: 'you',
    // })
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {friendName}</h2>
      <label>💰 Bill value</label>
      <input 
        type="text" 
        value={billForm.billValue} 
        onChange={(e) => setBillForm(form => ({...form, billValue: Number(e.target.value)}))} 
      />

      <label>🧍‍♀️ Your expense</label>
      <input 
        type="text" 
        value={billForm.yourExpense} 
        onChange={(e) => setBillForm(form => ({...form, yourExpense: Number(e.target.value) > billForm.billValue ?
          paidByFriend : Number(e.target.value) }))}
      />

      <label>👫 {friendName}'s expense</label>
      <input 
        type="text" 
        disabled 
        value={paidByFriend} 
      />
      <label>🤑 Who is paying the bill?</label>
      <select value={billForm.select} onChange={(e) => setBillForm(form => ({...form, select: e.target.value}))}>
        <option value="user">You</option>
        <option value="friend">{friendName}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  )
}
  
  export default BillBoard;