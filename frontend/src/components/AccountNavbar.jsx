import React, { useState } from "react";
import { LogOut, Settings, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavbar({ onLogout }) {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { label: "Cabinetul personal", path: "/account" },
    { label: "Tranzacții", path: "/account/transactions" },
    { label: "Transferuri", path: "/account/transfers" },
    { label: "Pentru imprimare", path: "/account/print" },
    
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1400px] backdrop-blur-xl bg-[#1f1b2e]/80 rounded-full shadow-lg px-8 py-3 flex items-center justify-between text-white">
      
      {/* Buton Acasă */}
      <Link
        to="/"
        className={`flex items-center gap-2 hover:text-purple-400 transition ${
          location.pathname === "/" ? "font-bold text-purple-400" : ""
        }`}
        title="Pagina principală"
      >
        <Home size={20} />
        <span className="text-sm">Acasă</span>
      </Link>

      {/* Meniu navigare */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-pink-400 transition relative group ${
              location.pathname === item.path
                ? "text-purple-400 font-semibold"
                : "text-white/80"
            }`}
          >
            {item.label}
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
        ))}
      </div>

      {/* Setări + dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 hover:text-purple-400 transition focus:outline-none"
          aria-label="Setări cont"
        >
          <Settings size={22} />
        </button>

        {/* Meniu dropdown */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 z-50 overflow-hidden">
            <ul className="py-2">
              <li>
                <Link
                  to="/account/profile"
                  className="block px-4 py-2 text-white hover:bg-white/5 transition"
                  onClick={() => setShowDropdown(false)}
                >
                  Profil
                </Link>
              </li>
              <li>
                <Link
                  to="/account/settings"
                  className="block px-4 py-2 text-white hover:bg-white/5 transition"
                  onClick={() => setShowDropdown(false)}
                >
                  Setări
                </Link>
              </li>
              <li>
                <hr className="border-white/10 my-2" />
              </li>
              <li>
                <button
                  onClick={onLogout}
                  className="w-full text-left block px-4 py-2 text-white hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-2">
                    <LogOut size={18} />
                    <span>Ieșire</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
