import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { assets } from '../assets/assets';
import LogModal from './LogModal';
import { Settings, LogOut } from 'lucide-react';

function isTokenValid(token) {
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    return exp && Date.now() < exp * 1000;
  } catch {
    return false;
  }
}

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(isTokenValid(token));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] backdrop-blur-xl bg-[#1f1b2e]/80 rounded-full shadow-lg px-6 py-3 flex justify-between items-center text-white">
        
        {/* Logo + nume */}
        <Link to='/'>
          <div className="flex items-center space-x-2">
            <img src={assets.logo} alt="Logo" className="h-7" />
            <span className="text-lg font-semibold">Tiply</span>
          </div>
        </Link>

        {/* Linkuri */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/about" className="hover:text-purple-300 transition">Despre Companie</Link>
          <Link to="/start" className="hover:text-purple-300 transition">Cum Încep</Link>
          <Link to="/personal" className="hover:text-purple-300 transition">Pentru Personal</Link>
        </div>

        {/* Dreapta: Cabinet sau Începe + Setări */}
        <div className="flex items-center gap-4">
          {/* Buton „Cabinet” / „Începe acum” */}
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-teal-500">
            {isLoggedIn ? (
              <Link to="/account" className="bg-[#1f1b2e] text-white px-5 py-2 rounded-full hover:bg-white/10 transition">
                Cabinet Personal
              </Link>
            ) : (
              <button onClick={() => setShowModal(true)} className="bg-[#1f1b2e] text-white px-5 py-2 rounded-full hover:bg-white/10 transition">
                Începe acum
              </button>
            )}
          </div>

          {/* Roată cu dinți */}
          {isLoggedIn && (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 text-white hover:text-purple-400 transition focus:outline-none"
                aria-label="Setări cont"
              >
                <Settings size={22} />
              </button>

              {/* Dropdown Setări */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 z-50 overflow-hidden">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/account/profile"
                        className="block px-4 py-2 text-white hover:bg-white/5 transition"
                        onClick={() => setShowDropdown(false)}
                      >
                        Profilul meu
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
                    <li><hr className="border-white/10 my-2" /></li>
                    <li>
                      <button
                        onClick={handleLogout}
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
          )}
        </div>
      </nav>

      {/* Modal autentificare */}
      <LogModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
