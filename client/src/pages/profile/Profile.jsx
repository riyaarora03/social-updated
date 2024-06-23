import "./profile.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import mehek from "../../assets/images/mehek.jpeg";
import { More } from "@mui/icons-material";
import Posts from "../../components/posts/Posts";
import { useQuery,useQueryClient,useMutation } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";
import { useState } from "react";

const Profile = () => {

  const [openUpdate, setOpenUpdate] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const userId=parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      makeRequest.get("/users/find/"+userId).then(res => {
        return res.data;
    }), 
  });

  const { isLoading : rIsLoading, data: relationshipData } = useQuery({
    queryKey: ['relationship'],
    queryFn: () =>
      makeRequest.get("/relationships?followedUserId="+userId).then(res => {
        return res.data;
    }), 
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (following) => {
      if (following) return makeRequest.delete("/relationships?userId="+userId);
      return makeRequest.post("/relationships", {userId}); 
    },
    onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['relationship'] }); 
    },
  });

  const handleFollow= () =>{
    mutation.mutate(relationshipData.includes(currentUser.id))
  }

  console.log(typeof(userId));


  return (
    <div className="profile">
      {isLoading? "Loading..." : <><div className="images">
      {data && (
          <>
            <img src={"/upload/"+data.coverPic} className="cover"/>
            <img src={"/upload/"+data.profilePic} className="profilePic"/>
          </>
        )}
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href={data.facebook}>
              <FacebookIcon fontSize="large"/>
            </a>
            <a href={data.linkedin}>
              <LinkedInIcon fontSize="large"/>
            </a>
            <a href={data.instagram}>
              <InstagramIcon fontSize="large"/>
            </a>
            <a href={data.twitter}>
              <TwitterIcon fontSize="large"/>
            </a>
            <a href={data.pinterest}>
              <PinterestIcon fontSize="large"/>
            </a>
          </div>
          <div className="center">
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize="small"/>
                <span>{data.city}</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize="small"/>
                <span>{data.language}</span>
              </div>
            </div>
            {rIsLoading ? "Loading..." : userId === currentUser.id ? <button onClick={()=>setOpenUpdate(true)}>Update</button> : <button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>}
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts userId={userId}/>
      </div>
      </>}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  )
}

export default Profile
