// src/App.jsx
import PersonalPage from './pages/PersonalPage';
  import { Routes, Route, useLocation } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Home from './pages/Home';
  import About from './pages/About';
  import CumIncep from './pages/CumIncep';
  import Account from './pages/Account';
  import LogModal from './components/LogModal';
  import ProfilePage from './pages/ProfilePage';
  import Transactions from './pages/Transactions';
  import Transfers from './pages/Transfers';
  import Print from './pages/Print';
  import ProfileSettings from './pages/ProfileSettings';
  import AccountLayout from './layouts/AccountLayout';

  function App() {
    const location = useLocation();

    const isUserProfile = location.pathname.startsWith('/user/');

    return (
<div className="w-full min-h-screen m-0 p-0 overflow-x-hidden border-none outline-none ring-0 shadow-none bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white">

          
        
        {!isUserProfile && !location.pathname.startsWith('/account') && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/start" element={<CumIncep />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/login" element={<LogModal />} />
          <Route path="/user/:id" element={<ProfilePage />} />

          {/* Rute imbricate pentru /account */}
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<Account />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="transfers" element={<Transfers />} />
            <Route path="print" element={<Print />} />
            <Route path="profile" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    );
  }

  export default App;
