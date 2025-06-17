import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');     // șterge tokenul
    navigate('/');                        // redirecționează la Acasă
    window.location.reload();             // reîncarcă aplicația (pt. Navbar)
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-transparent text-white px-6 py-2 rounded-full hover:bg-white/10 transition"
    >
      Ieși din cont
    </button>
  );
}
