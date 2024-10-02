import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";

const Logout = ({ isDisabled }) => { // Accept a prop to control the logout functionality
  const { logout } = useAuth0();

  const handleLogout = () => {
    if (!isDisabled) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    }
  };

  return (
    <div className="flex flex-row">
      <button 
        onClick={handleLogout} // Call the handleLogout function
        className={`cursor-pointer hover:text-indigo-500 transition duration-300 text-black flex items-center 
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}>
        <CiLogout  /> 
      </button>
    </div>
  );
}

export default Logout;