import React from 'react'

const Logout = () => {
  return (
    <div className="flex flex-row">
      <button
          onClick={() =>
            Logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="cursor-pointer hover:text-indigo-500 transition duration-300 text-black p-4 pb-2 "
        >
          Log Out
        </button>
    </div>
  )
}

export default Logout
