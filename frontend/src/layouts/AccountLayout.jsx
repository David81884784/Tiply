// src/layouts/AccountLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountNavbar from '../components/AccountNavbar';

const AccountLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white">
      <AccountNavbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
