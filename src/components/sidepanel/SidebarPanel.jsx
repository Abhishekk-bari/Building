// src/components/SidebarPanel.jsx
import { Link, useNavigate  } from 'react-router-dom';
import man from "/src/assets/man.png";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5"; 
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0

export default function SidebarPanel() {
  const [expanded, setExpanded] = useState(true);
  const { logout } = useAuth0(); // Destructure logout from useAuth0
  const navigate = useNavigate(); // Initialize navigate

  const handleCreateClick = () => {
    navigate('/Create'); // Navigate to Create page
  };

  return (
    <aside className="h-screen w-40">
      <nav className="h-full flex flex-col bg-white shadow-sm">
        <div className="p-4 pb-20 flex items-center">
          <h1 className={`font-bold overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>Track</h1>
          <button onClick={() => setExpanded((curr) => !curr)} className="rounded-lg p-1.5 bg-gray-50 hover:bg-gray-200">
            {expanded ? <CiCircleChevRight /> : <CiCircleChevLeft />}
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-2 flex-grow">
          {/* Navigate to Create page */}
          <button 
            onClick={handleCreateClick} 
            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          >
            <IoAdd className="mr-2" />
            <span className={`ml-2 transition-all ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>Create</span>
          </button>

          {/* Navigate to Dashboard page */}
          <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <IoAdd className="mr-2" />
            <span className={`ml-2 transition-all ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>Dashboard</span>
          </Link>

          {/* Navigate to Settings page */}
          <Link to="/settings" className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline className="mr-2" />
            <span className={`ml-2 transition-all ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>Settings</span>
          </Link>

          {/* Logout Link */}
          <button
            onClick={() => logout({ returnTo: window.location.origin })} // Call logout with returnTo
            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          >
            <span className={`ml-2 transition-all ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>Logout</span>
          </button>
        </div>

        <div className="border-t flex p-3 items-center mt-auto">
          <img src={man} className="w-10 h-10 rounded-md" alt="User Avatar" />
          <div className={`ml-3 overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
            <h4>John Deo</h4>
            <span className="text-xs text-gray-700">John@gmail.com</span>
          </div>
        </div>
      </nav>
    </aside>
  );
}