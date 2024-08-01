import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import FriendList from './components/FriendList'
import BillBoard from './components/BillBoard';
import AddFriend from './components/AddFriend';
import Button from './components/Button';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends)
  const [addFriend, setAddFriend] = useState(false)
  const [selectedFriendId, setSelectedFriendId] = useState(null)

  function handleAddFriend() {
    setAddFriend(addFriend => !addFriend)
  }

  function handleSelectedFriendId(id) {
    setSelectedFriendId(selectedFriendId => selectedFriendId === id ? null : id)
    setAddFriend(false)
  }

  function handleSetFriends(newFriend) {
    setFriends(friendsList => [...friendsList, newFriend])
    setAddFriend(addFriend => !addFriend)
  }

  function handleBalance(selectedFriendId, newBalance) {
    setFriends(friends => friends.map(friend => selectedFriendId === friend.id 
      ? {...friend, balance: friend.balance + newBalance} 
      : friend
    ))
    setSelectedFriendId(null)
  }

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList friendList={friends} selectedFriendId={selectedFriendId} onSelectFriendId={handleSelectedFriendId}/>
        {addFriend && <AddFriend onAddFriendToList={handleSetFriends}/>}
        <Button onClickElement={handleAddFriend}>{addFriend ? 'close' : 'Add friend'}</Button>
      </div>
      {selectedFriendId && <BillBoard friends={friends} onBalanceChange={handleBalance} selectedFriendId={selectedFriendId}/>}
    </div>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)