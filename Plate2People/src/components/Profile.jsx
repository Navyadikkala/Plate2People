import React from 'react';
import "../CSS/ProfileBox.css";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Profile = () => {
  
  const navigate = useNavigate();

  const Profilepage = () => {
    navigate("/"); 
  };

  return (
    <div className="profile-box">
      <div className="profile-details">
        {/* <h1>{getData ? See You later ${getData} : "User not found"}</h1> */}
      </div>
      <button className='btn-2' onClick={Profilepage}>
        <FaSignOutAlt />
      </button>
     
    </div>
    
  );
};

export default Profile;