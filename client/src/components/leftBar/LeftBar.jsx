import "./leftBar.scss"
import userImage from "../../assets/images/passport-new.jpeg";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const LeftBar = () => {

  const {currentUser}=useContext(AuthContext);

  return (
    <div className="leftBar">
        <div className="container">
          <div className="menu">
            <div className="user">
              <Link to={`/profile/${currentUser.id}`} style={{textDecoration:"none", display:"flex", alignItems:"center", gap:"10px"}}>
              <img src={"/upload/"+currentUser.profilePic} alt=""/>
              <span>Profile</span></Link>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=E9xSZj6pKYjG&format=png&color=000000"} alt=""/>
              <span>Friends</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=Xvo1JQO2ujpL&format=png&color=000000"} alt=""/>
              <span>Groups</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=XrEFnp33pJYw&format=png&color=000000"} alt=""/>
              <span>Marketplace</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=uHuD6VI5HlWw&format=png&color=06d001"} alt=""/>
              <span>Explore</span>
            </div>
            {/* <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=85431&format=png&color=000000"} alt=""/>
              <span>Timeline</span>
            </div> */}
          </div>
          <hr/>
          <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=8322&format=png&color=ffdb00"} alt=""/>
              <span>Analytics</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=26063&format=png&color=03aed2"} alt=""/>
              <span>Events</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=0FvHf0Nf8v0t&format=png&color=c40c0c"} alt=""/>
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=114324&format=png&color=000000"} alt=""/>
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=CveXbOlQ8QN9&format=png&color=000000"} alt=""/>
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=J6pBf3G6DZGM&format=png&color=000000"} alt=""/>
              <span>Messages</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=7749&format=png&color=ffc100"} alt=""/>
              <span>Fundraiser</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=jPRHtH0Uc2hu&format=png&color=000000"} alt=""/>
              <span>Courses</span>
            </div> 
          </div>
          {/* <div className="menu">
            <span>Others</span>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=C8jqL9Qr2Rdc&format=png&color=000000"} alt=""/>
              <span>Fundraiser</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=hD16rQicHC1S&format=png&color=000000"} alt=""/>
              <span>Tutorials</span>
            </div>
            <div className="item">
              <img src={"https://img.icons8.com/?size=100&id=jPRHtH0Uc2hu&format=png&color=000000"} alt=""/>
              <span>Courses</span>
            </div>        
          </div> */}
        </div>
    </div>
  )
}

export default LeftBar
