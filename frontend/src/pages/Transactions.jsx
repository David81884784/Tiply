import React from 'react';

export default function Transactions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Navbar */}
      <nav className="w-full bg-black/30 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-lg">
        {/* Buton Acasă */}
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold text-white">Tranzacții</span>
        </div>

        {/* Meniu Navigare - Centrat */}
        <div className="flex gap-8">
          <span className="text-sm text-white/80">Cabinetul personal</span>
          <span className="text-sm text-white/80">Transferuri</span>
          <span className="text-sm text-white/80">Pentru imprimare</span>
          <span className="text-sm text-white/80">Profil</span>
        </div>

        {/* Dropdown Setări + Ieșire */}
        <div className="relative">
          <button
            className="flex items-center gap-2 text-white hover:text-purple-400 transition focus:outline-none"
            aria-label="Setări cont"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2a5 5 0 015 5h.001c0 5.523-4.477 10-10 10S2 12.523 2 7 6.477 2 12 2zm0 18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Conținut principal */}
      <main className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        {/* Titlu Pagină */}
        <h1 className="text-3xl font-bold mb-6 text-center">Istoric tranzacții</h1>

        {/* Lista Tranzacții */}
        <div className="space-y-4">
          {/* Simulăm câteva tranzacții */}
          {[1, 2, 3, 4, 5].map((tx) => (
            <div
              key={tx}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex items-center justify-between hover:border-purple-500/30 transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2a5 5 0 015 5h.001c0 5.523-4.477 10-10 10S2 12.523 2 7 6.477 2 12 2zm0 18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Client {tx}</p>
                  <p className="text-sm text-white/70">12 martie 2024</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-purple-400">€{tx * 10}</p>
                <p className="text-sm flex items-center justify-end gap-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                    <path d="M12 2a5 5 0 015 5h.001c0 5.523-4.477 10-10 10S2 12.523 2 7 6.477 2 12 2zm0 18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
                  </svg>
                  Completat
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tiply • Platformă de bacșișuri digitale
        </footer>
      </main>

      {/* Efecte fundal animat */}
      <div
        className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl z-0"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "moveBackground 10s infinite alternate ease-in-out",
        }}
      ></div>
      <div
        className="absolute right-0 top-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl z-0"
        style={{
          animation: "scaleBackground 8s infinite alternate ease-in-out",
        }}
      ></div>
    </div>
  );
}