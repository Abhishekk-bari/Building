import { useAuth0 } from "@auth0/auth0-react";
import Setting from "../../pages/Setting";
import Logout from "../../pages/logout/Logout";

const Dashboard = () => {
  const { logout } = useAuth0();

  return (
    <aside className="h-screen flex-row flex ">
      <nav className="">
        <div className="p-4 pb-2 ">Track</div>

        <Logout />
        <Setting />
      </nav>

      
    </aside>
  );
};

export default Dashboard;
