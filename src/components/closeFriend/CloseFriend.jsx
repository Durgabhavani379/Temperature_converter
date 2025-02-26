import "./closefriend.css";

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
       <li className="sidebarFriend">
            <img src={PF+user.profilePicture} className="sidebarFriendImg" alt="pho" />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
    </div>
  )
}
