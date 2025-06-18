import React, { useState } from 'react';

export default function LogModal({ isOpen, onClose }) {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [nume, setNume] = useState('');
  const [confirmParola, setConfirmParola] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, parola }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Autentificat cu succes!');
        onClose();
        window.location.reload();
      } else {
        alert(data.message || 'Eroare la autentificare');
      }
    } catch {
      alert('A apărut o eroare. Încearcă din nou.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (parola !== confirmParola) {
      alert('Parolele nu coincid.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nume, email, parola }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Înregistrare reușită! Poți să te autentifici acum.');
        setIsLogin(true);
      } else {
        alert(data.message || 'Eroare la înregistrare');
      }
    } catch {
      alert('A apărut o eroare. Încearcă din nou.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              {isLogin ? 'Autentificare' : 'Înregistrare'}
            </h3>

            <p className="text-gray-300 mb-6 text-center">
              {isLogin
                ? 'Conectează-te cu datele tale pentru a accesa contul.'
                : 'Creează un cont nou pentru a începe să folosești platforma.'}
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => (isLogin ? handleLogin(e) : handleRegister(e))}
            >
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Nume complet"
                  value={nume}
                  onChange={(e) => setNume(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="password"
                placeholder="Parolă"
                value={parola}
                onChange={(e) => setParola(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirmă parola"
                  value={confirmParola}
                  onChange={(e) => setConfirmParola(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 disabled:opacity-50"
              >
                {loading
                  ? isLogin
                    ? 'Se autentifică...'
                    : 'Se înregistrează...'
                  : isLogin
                  ? 'Autentificare'
                  : 'Creează cont'}
              </button>
            </form>

            <p className="text-center text-gray-400 mt-4">
              {isLogin ? 'Nu ai cont?' : 'Ai deja cont?'}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-cyan-400 hover:underline"
              >
                {isLogin ? 'Înregistrează-te' : 'Autentifică-te'}
              </button>
            </p>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
