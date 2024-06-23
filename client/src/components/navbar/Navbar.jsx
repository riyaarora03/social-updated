import "./navbar.scss"
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import WindowIcon from '@mui/icons-material/Window';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import userImage from "../../assets/images/passport-new.jpeg";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const {toggle,darkMode}=useContext(DarkModeContext);
  const {currentUser}=useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="left">
          <Link to ="/" style={{textDecoration:"none"}}>
          <span>ConnectSphere</span>
          </Link>
          <Link
            to="/"
            style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "inherit" // Ensures the link and icon color remain consistent
            }}>
            <HomeIcon style={{ color: "inherit" }} />
          </Link>
          {darkMode ? <LightModeIcon onClick={toggle}/> : <DarkModeIcon onClick={toggle}/>}
          <WindowIcon/>
          <div className="search">
          <SearchRoundedIcon/>
          <input type="text" placeholder="Search..."/>
          </div>
        </div>
        <div className="right">
        <SettingsIcon/>
          <LocalPostOfficeIcon/>
          <NotificationsIcon/>
          <div className="user">
            {currentUser && (
              <>
              <Link to={`/profile/${currentUser.id}`} style={{textDecoration:"none", display:"flex", alignItems:"center", gap:"10px",color: "inherit"}}>
              
              <img src={"/upload/"+currentUser.profilePic} alt=""/>
              <span>{currentUser.name}</span></Link>
              </>
            )}
          </div>
        </div>
    </div>
  );
};

export default Navbar;
