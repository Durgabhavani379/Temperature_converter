import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom";

export default function TopBar() {

  return (
    <div className="topBarContainer">
       <div className="topBarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Picconnect<small>&</small>Snapverse</span>
        </Link>
       </div>
       <div className="topBarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input type="text" className="searchInput" placeholder="Seacrh for friend,post or video"/>
        </div>
       </div>
       <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIcon">
            <PersonIcon/>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIcon">
            <ChatIcon/>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIcon">
            <NotificationsIcon/>
            <span className="topBarIconBadge">1</span>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topBarImg" />
        </div>
       </div>
      
    </div>
  )
}
