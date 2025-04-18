import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import logo from "../assets/Icon.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";

const Navbar = ({ onSearch }) => {
  const { logout, authUser } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-transparent">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Section: Logo & Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
            <img src={logo} alt="Logo" className="w-12 h-auto rounded-lg" />
          </Link>
          <nav className="hidden md:flex gap-5 text-white font-bold text-lg">
            <Link to="/MainHomePage" className="hover:text-gray-300">Home</Link>
            <Link to="/TVShows" className="hover:text-gray-300">TV Shows</Link>
            <Link to="/movies" className="hover:text-gray-300">Movies</Link>
            <Link to="/subscriptions" className="hover:text-gray-300">Subscriptions</Link>
            {/* <Link to="/mylist" className="hover:text-gray-300">My List</Link> */}
          </nav>
        </div>

        {/* Right Section: Search, Notifications, Profile, Auth Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden sm:flex items-center bg-white px-3 py-1 rounded-full">
            <img src={search_icon} alt="Search" className="w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="ml-2 text-black focus:outline-none"
            />
          </form>

          {/* Icons */}
          <img src={bell_icon} alt="Notifications" className="w-6 h-6" />

          {/* Authenticated User Actions */}
          {authUser ? (
            <div className="flex items-center gap-2">
              <Link to="/profile" className="btn btn-sm gap-2">
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <Link to="/settings" className="btn btn-sm gap-2">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </Link>

              <button className="flex gap-2 items-center text-red-500" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm bg-primary text-white px-4">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
