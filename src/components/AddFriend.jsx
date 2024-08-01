import { useState } from "react";
import Button from "./Button";

const AddFriend = ({ onAddFriendToList }) => {
    const [addFriendForm, setAddFriendForm] = useState({
      name: '',
      image: 'https://i.pravatar.cc/48',
    })

    function handleSubmit(e) {
      e.preventDefault()
      if(!addFriendForm.name || !addFriendForm.image) return;
      const id= Date.now()
      const newFriend = {
        id,
        name: addFriendForm.name,
        image: `${addFriendForm.image}?=${id}`,
        balance: 0,
      }

      onAddFriendToList(newFriend)

      setAddFriendForm({
        name: '',
        image: 'https://i.pravatar.cc/48'
      })
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label>👫 Friend name</label>
          <input 
            type="text" 
            value={addFriendForm.name} 
            onChange={(e) => setAddFriendForm({...addFriendForm, name: e.target.value})}
          />
          <label>🌄 image url</label>
          <input 
            type="text" 
            value={addFriendForm.image}
            onChange={(e) => setAddFriendForm({...addFriendForm, image: e.target.value})}
          />
          <Button>Add</Button>
        </form>
      )
  }
  
  export default AddFriend;