import Friends from './Friends'


const FriendList = ({ friendList, onSelectFriendId, selectedFriendId }) => {

    const friendElement = friendList.map(friend => (
        <Friends key={friend.id} {...friend} selectedFriendId={selectedFriendId} onSelectFriendId={onSelectFriendId}/>
    ))


  return (
    <ul>
        {friendElement}
    </ul>
  )
}

export default FriendList;