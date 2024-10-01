import { useAuth0 } from "@auth0/auth0-react";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  const { logout } = useAuth0();

  return (
    <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between item-center">
            Track

          </div>
          <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="cursor-pointer hover:text-indigo-500 transition duration-300 text-black"
      >
        Log Out
      </button>

        </nav>
      
      
    </aside>
  );
};

export default Dashboard;