import "./profile.css";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useEffect,useState}from "react";
import axios from "axios";

export default function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const[user,setUser]=useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=bhavani`);
      setUser(res.data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="bhavani"/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}