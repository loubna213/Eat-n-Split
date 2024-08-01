import Button from "./Button";

const friend = ({id, name, image, balance, onSelectFriendId, selectedFriendId }) => {
    return (
      <li className={selectedFriendId === id ? 'selected' : ''}>
        <img src={image} alt="profile image" />
        <div>
            <h3>{name}</h3>
            {
                balance < 0 ? <p className="red">{`You owe ${name} ${-balance} £`}</p>
                : balance > 0 ? <p className="green">{` ${name} owes you ${balance} £`}</p> 
                : <p>{` you and ${name} are even`}</p>
            }
        </div>
        <Button onClickElement={() => onSelectFriendId(id)}>{selectedFriendId === id ? 'Close' : 'Select'}</Button>
      </li>
    )
  }
  
  export default friend;