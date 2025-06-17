import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function Account() {
  const [user, setUser] = useState(null);
  const [donationGoals, setDonationGoals] = useState([
    { id: 1, amount: 50, title: "Cafea pentru o zi bună", icon: "☕" },
    { id: 2, amount: 200, title: "O bicicletă nouă", icon: "🚴‍♂️" },
    { id: 3, amount: 1000, title: "Laptop nou", icon: "💻" },
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      } catch (err) {
        console.error("Eroare la preluarea datelor utilizatorului:", err);
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const profileLink = user ? `http://localhost:5173/user/${user._id}` : "";

  return (
    <div className="w-full">
      <main className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden mx-auto">
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 p-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Bine ai venit, {user ? user.name : "Utilizator"}!</h1>
            <p className="text-lg text-white/80">{user?.role || "Profesionist"} · {user?.location || "România"}</p>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cod QR și link */}
            <div className="flex flex-col items-center space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 text-center shadow">
              <h2 className="text-lg font-semibold text-white mb-2">Codul tău QR</h2>
              {user && (
                <QRCode
                  value={profileLink}
                  size={128}
                  bgColor="transparent"
                  fgColor="#ffffff"
                  className="rounded-lg"
                />
              )}
              {user && (
                <p className="text-sm text-purple-300 break-all mt-2">
                  <a href={profileLink} className="underline hover:text-purple-400 transition" target="_blank" rel="noreferrer">
                    {profileLink}
                  </a>
                </p>
              )}
            </div>

            {/* Date + statistici */}
            <div className="md:col-span-2 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {donationGoals.reduce((sum, goal) => sum + goal.amount, 0).toLocaleString()} lei
                  </div>
                  <p className="text-sm text-white/60">Total bacșișuri</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-purple-400">4.8</div>
                  <p className="text-sm text-white/60">Rating mediu</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-purple-400">125</div>
                  <p className="text-sm text-white/60">Recenzii primite</p>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Despre tine</h2>
                <p className="text-white/70 leading-relaxed">
                  Salut! Ești {user?.role || "un profesionist"} și oferi servicii excelente clienților tăi.
                  Aici poți gestiona profilul și codul tău QR pentru a primi bacșișuri digitale ușor.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">🎯 Scopuri de bacșișuri</h2>
                  <button
                    onClick={() =>
                      setDonationGoals([
                        ...donationGoals,
                        { id: Date.now(), amount: 0, title: "Obiectiv nou", icon: "✨" },
                      ])
                    }
                    className="text-sm px-4 py-1 bg-purple-700 hover:bg-purple-600 rounded-lg border border-white/10 text-white transition"
                  >
                    Adaugă scop
                  </button>
                </div>
                <div className="space-y-4">
                  {donationGoals.map((goal) => (
                    <div
                      key={goal.id}
                      className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center group hover:border-purple-500/40 transition"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{goal.icon}</span>
                        <div>
                          <h3 className="font-semibold">{goal.title}</h3>
                          <p className="text-purple-400 font-bold">{goal.amount} lei</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setDonationGoals(donationGoals.filter((g) => g.id !== goal.id))}
                        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition"
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 mt-8">
                <h3 className="font-semibold mb-4">Detalii cont</h3>
                {user ? (
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><strong>Nume:</strong> {user.name}</li>
                    <li><strong>Email:</strong> {user.email}</li>
                    <li><strong>Rol:</strong> {user.role || "Nesetat"}</li>
                    <li><strong>Status:</strong> <span className="text-green-400">Activ</span></li>
                    <li><strong>Cont creat:</strong> {new Date(user.createdAt).toLocaleDateString()}</li>
                  </ul>
                ) : (
                  <p>Se încarcă informațiile...</p>
                )}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={handleLogout}
                  className="inline-block px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition duration-300"
                >
                  Deconectează-te
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm mt-16">
        © {new Date().getFullYear()} Tiply • Platformă de bacșișuri digitale
      </footer>
    </div>
  );
}
