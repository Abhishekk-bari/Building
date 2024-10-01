import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ scrollToSection, homeRef, aboutRef, contactRef }) => {
  const { logout, loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate(); // Change here

  // Redirect to the dashboard after login
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard"); // Change here
    }
  }, [isAuthenticated, navigate]); // Add dependencies

  // Check if the current route is not the dashboard
  const shouldRenderNavbar = location.pathname !== "/dashboard";

  return (
    shouldRenderNavbar && (
      <nav className="md:flex-row flex justify-center items-center mx-4 px-8 py-3 bg-opacity-30 backdrop-filter backdrop-blur-lg bg-gray-500 rounded-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="text-2xl font-bold text-black">
          Tr<span className="text-black cursor-pointer">ack</span>
        </div>

        <ul className="flex space-x-8 text-lg text-gray-800 ml-20">
          {!isAuthenticated && (
            <>
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection(homeRef)}
                  className="cursor-pointer hover:text-indigo-500 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="cursor-pointer hover:text-indigo-500 transition duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="cursor-pointer hover:text-indigo-500 transition duration-300"
                >
                  Contact
                </button>
              </li>
            </>
          )}

          {isAuthenticated && (
            <li>
              <Link
                to="/dashboard"
                className="cursor-pointer hover:text-indigo-200 transition duration-300"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        <div className="ml-8">
          {isAuthenticated && <p className="text-white"> {user.name} </p>}
        </div>

        <div className="ml-5 text-lg">
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="cursor-pointer hover:text-indigo-500 transition duration-300 text-white"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="cursor-pointer  hover:text-gray-900 transition duration-300 text-white"
            >
              Log In
            </button>
          )}
        </div>
      </nav>
    )
  );
};

export default Navbar;
