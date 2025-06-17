import React from 'react';

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <header className="bg-black/60 backdrop-blur-md border-b border-white/10 py-6 px-6 md:px-12">
        <h1 className="text-3xl font-bold">Profilul Tău</h1>
        <p className="text-sm text-gray-400 mt-1">Gestionează-ți contul și codul tău QR.</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        {/* Profil Info & QR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Stânga - Informații Profil */}
          <div className="lg:col-span-1 space-y-6">
            {/* Imagine Profil */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Poza profil"
                  className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-purple-500/40"
                />
                <h2 className="text-xl font-semibold">Andrei Popescu</h2>
                <p className="text-sm text-gray-400">Chelner · Restaurant Luxor</p>
                <button className="mt-4 text-sm underline hover:text-purple-400 transition">
                  Schimbă poza
                </button>
              </div>
            </div>

            {/* Detalii Cont */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="font-semibold mb-4">Detalii cont</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><strong>Email:</strong> andrei.popescu@example.com</li>
                <li><strong>Telefon:</strong> +407xx xxx xxx</li>
                <li><strong>Cont activ din:</strong> 12 martie 2024</li>
                <li><strong>Status:</strong> <span className="text-green-400">Activ</span></li>
              </ul>
            </div>

            {/* Feedback mediu */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="font-semibold mb-4">Feedback mediu</h3>
              <div className="flex items-center">
                <span className="text-4xl font-bold text-yellow-400">4.8</span>
                <div className="ml-4">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <p className="text-xs text-gray-400 mt-1">pe baza a 125 recenzii</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dreapta - Cod QR + Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cod QR */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Codul tău QR</h2>
              <p className="text-gray-400 mb-6">
                Acesta este codul tău unic care permite clienților să îți lase bacșișuri ușor.
              </p>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 flex justify-center">
                  <img
                    src="https://via.placeholder.com/150x150.png?text=QR+Code"
                    alt="Cod QR"
                    className="w-40 h-40 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-4">
                  <button className="block w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    Descarcă codul QR
                  </button>
                  <p className="text-sm text-gray-400 mt-2">
                    Poți afișa acest cod pe telefon, bon sau chiar pe masa ta de lucru.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistici */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <h4 className="text-sm uppercase text-gray-500">Total Bacșișuri</h4>
                <p className="text-2xl font-bold mt-1">€1,230</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <h4 className="text-sm uppercase text-gray-500">Număr Scanări</h4>
                <p className="text-2xl font-bold mt-1">1,452</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <h4 className="text-sm uppercase text-gray-500">Ultima activitate</h4>
                <p className="text-2xl font-bold mt-1">Azi</p>
              </div>
            </div>

            {/* Recenzii / Feedback */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Recenzii recente</h2>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Maria I.</h3>
                      <div className="flex text-yellow-400 text-sm">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-2">
                    „Un chelner extraordinar! Am lăsat un bacșiș digital și a fost super simplu.”
                  </p>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://randomuser.me/api/portraits/men/22.jpg"
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ion M.</h3>
                      <div className="flex text-yellow-400 text-sm">★★★★☆</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-2">
                    „Foarte rapidă retragerea banilor. Excelentă idee pentru profesioniștii din domeniul serviciilor!”
                  </p>
                </div>

                <div className="pb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://randomuser.me/api/portraits/women/36.jpg"
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Elena D.</h3>
                      <div className="flex text-yellow-400 text-sm">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-2">
                    „Am folosit codul meu în restaurantul unde lucrez. Banii vin imediat în cont. Superb!”
                  </p>
                </div>
              </div>
            </div>

            {/* Setări */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Setări cont</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nume afișat</label>
                  <input
                    type="text"
                    defaultValue="Andrei Popescu"
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="andrei.popescu@example.com"
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Card asociat</label>
                  <input
                    type="text"
                    placeholder="ROBTRL...XXXXXX"
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <button className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  Salvează modificările
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Tiply • Platformă de bacșișuri digitale
      </footer>
    </div>
  );
}