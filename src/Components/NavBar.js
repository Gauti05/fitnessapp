import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="flex bg-gradient-to-r from-pink-400 via-yellow-200 to-yellow-300 px-8 py-4 rounded-t-3xl shadow-lg mb-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "mx-3 px-5 py-2 bg-blue-300 text-blue-900 rounded-full font-semibold"
            : "mx-3 px-5 py-2 text-blue-900 font-semibold hover:text-blue-700 transition"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "mx-3 px-5 py-2 bg-blue-300 text-blue-900 rounded-full font-semibold"
            : "mx-3 px-5 py-2 text-blue-900 font-semibold hover:text-blue-700 transition"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/progress"
        className={({ isActive }) =>
          isActive
            ? "mx-3 px-5 py-2 bg-blue-300 text-blue-900 rounded-full font-semibold"
            : "mx-3 px-5 py-2 text-blue-900 font-semibold hover:text-blue-700 transition"
        }
      >
        Progress
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) =>
          isActive
            ? "mx-3 px-5 py-2 bg-blue-300 text-blue-900 rounded-full font-semibold"
            : "mx-3 px-5 py-2 text-blue-900 font-semibold hover:text-blue-700 transition"
        }
      >
        Chat
      </NavLink>
    </nav>
  )
}

export default NavBar
