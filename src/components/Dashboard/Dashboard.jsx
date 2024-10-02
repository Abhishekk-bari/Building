import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logout from "../../pages/logout/Logout";
import man from "/src/assets/man.png";
import Create from './../../pages/Create/Create';
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5"; // Importing the settings icon
import { useState } from 'react';
import Setting from '../../pages/setting/Setting';

export default function Dashboard() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen w-40"> {/* Set height to full screen, and width to 60px */}
      <nav className="h-full flex flex-col bg-white shadow-sm">
        <div className="p-4 pb-20 flex items-center">
          <h1 className={`font-bold overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>Track</h1>

          <button onClick={() => setExpanded((curr) => !curr)} className="rounded-lg p-1.5 bg-gray-50 hover:bg-gray-200">
            {expanded ? <CiCircleChevRight /> : <CiCircleChevLeft />}
          </button>
        </div>

        {/* Each nav item in a row (icon + text) */}
        <div className="flex flex-col space-y-4 p-2 flex-grow"> {/* Added flex-grow to take available space */}

          <Link to="/create" className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"> {/* Use Link for navigation */}
            <IoAdd className="mr-2" /> 
            <span className={`ml-2 transition-all ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>Create</span>
          </Link>

          <Link to="/settings" className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"> {/* Use Link for navigation */}
            <Setting />
            <IoSettingsOutline className="mr-2" /> 
            <span className={`ml-2 transition-all ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>Settings</span>
          </Link>

          <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <Logout />
            <span className={`ml-2 transition-all ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>Logout</span>
          </div>
        </div>

        {/* Avatar section pushed to the bottom */}
        <div className="border-t flex p-3 items-center mt-auto"> {/* Added mt-auto to push this div down */}
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