import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d2b] via-[#1a1a3d] to-[#0f0f33] text-white relative overflow-hidden">
      {/* Decor fundal */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        {/* Titlu */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Despre noi
        </h2>
        <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Descoperă povestea din spatele platformei care simplifică primirea bacșișurilor în România.
        </p>

        {/* Secțiune imagine + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">O soluție pentru tine</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              La Tiply, credem că tehnologia ar trebui să fie simplă, rapidă și accesibilă pentru toți. 
              Am creat o soluție inovatoare care permite angajaților din servicii să primească bacșișuri digitale direct pe cardul lor bancar — fără aplicații complexe, fără numerar și fără complicații.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Indiferent dacă ești chelner, frizer, livrator sau orice alt tip de profesionist din domeniul serviciilor, acum poți primi recunoștința meritată într-un mod modern și sigur.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Misiunea noastră este să digitalizăm relația dintre clienți și furnizorii de servicii, oferindu-le acestora un instrument intuitiv bazat pe coduri QR. Simplu ca bună ziua. Rapid ca un click.
            </p>
            <button className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
              Creează-ți contul acum →
            </button>
          </div>

          {/* Imagine / Video */}
          <div className="flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-7d7fbcd6397f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Platforma Tiply"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistici animate */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-20">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">+5000</span>
            <p className="text-sm text-gray-400 mt-2">Utilizatori activi</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">€120K+</span>
            <p className="text-sm text-gray-400 mt-2">Bani transferați lunar</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">98%</span>
            <p className="text-sm text-gray-400 mt-2">Satisfacție utilizatori</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">1 minut</span>
            <p className="text-sm text-gray-400 mt-2">Timp mediu de înscriere</p>
          </div>
        </div>

        {/* Misiune & Viziune */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Misiune */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Misiunea noastră</h3>
            <p className="text-gray-300 leading-relaxed">
              Să transformăm experiența bacșișului într-o interacțiune elegantă, transparentă și instantanee între client și profesionistul de servicii.
            </p>
          </div>
          {/* Viziune */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Viziunea noastră</h3>
            <p className="text-gray-300 leading-relaxed">
              Să fim liderii în soluții de plată digitale pentru micile servicii, în România și apoi la nivel european.
            </p>
          </div>
        </div>

        {/* Valori */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center mb-12">Valorile noastre</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6">
                🔐
              </div>
              <h4 className="text-xl font-bold mb-3">Siguranță & Confidențialitate</h4>
              <p className="text-gray-400 leading-relaxed">
                Toate tranzacțiile sunt criptate, iar datele tale rămân în siguranță. Respectăm confidențialitatea ta.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6">
                ⚡
              </div>
              <h4 className="text-xl font-bold mb-3">Rapid & Fără Bariere</h4>
              <p className="text-gray-400 leading-relaxed">
                Nu ai nevoie decât de un telefon și un cod QR. Clienții plătesc în doar câteva secunde.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6">
                🚀
              </div>
              <h4 className="text-xl font-bold mb-3">Inovație la nivel înalt</h4>
              <p className="text-gray-400 leading-relaxed">
                Suntem în continuă dezvoltare, gândind soluții inteligente pentru a face experiența mai fluidă.
              </p>
            </div>
          </div>
        </div>

        {/* Testimoniale */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center mb-12">Testimoniale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:border-purple-500/40 transition">
              <p className="text-gray-300 italic">„Tiply m-a ajutat să primesc bacșișuri fără bani, fără stres. Oferi un cod și banii vin automat.”</p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold">Andrei</h4>
                  <p className="text-sm text-gray-400">Chelner</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:border-purple-500/40 transition">
              <p className="text-gray-300 italic">„Am primit bacșișuri înainte chiar să termin masa. Uimitor!”</p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold">Ana</h4>
                  <p className="text-sm text-gray-400">Frisoare</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:border-purple-500/40 transition">
              <p className="text-gray-300 italic">„Un sistem ușor de folosit. Recomand tuturor colegilor mei!”</p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold">Radu</h4>
                  <p className="text-sm text-gray-400">Livrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Echipa */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center mb-12">Membrii echipei noastre</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Persoană 1 */}
            <div className="text-center group">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Andrei Popescu"
                className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-white/20 shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/20"
              />
              <h4 className="font-bold">Andrei Popescu</h4>
              <p className="text-sm text-gray-400">CEO & Fondator</p>
            </div>
            {/* Persoană 2 */}
            <div className="text-center group">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Ana Ionescu"
                className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-white/20 shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/20"
              />
              <h4 className="font-bold">Ana Ionescu</h4>
              <p className="text-sm text-gray-400">CTO & Dezvoltare</p>
            </div>
            {/* Persoană 3 */}
            <div className="text-center group">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt="Radu Marinescu"
                className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-white/20 shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/20"
              />
              <h4 className="font-bold">Radu Marinescu</h4>
              <p className="text-sm text-gray-400">Marketing & Strategie</p>
            </div>
            {/* Persoană 4 */}
            <div className="text-center group">
              <img
                src="https://randomuser.me/api/portraits/women/36.jpg"
                alt="Ioana Dumitru"
                className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-white/20 shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/20"
              />
              <h4 className="font-bold">Ioana Dumitru</h4>
              <p className="text-sm text-gray-400">UX/UI Designer</p>
            </div>
          </div>
        </div>

        {/* Citat inspirațional */}
        <div className="mt-24 text-center bg-gradient-to-r from-purple-900/40 to-black/40 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-inner">
          <p className="text-2xl md:text-3xl italic text-gray-300 max-w-3xl mx-auto">
            “Vrem să schimbăm lumea prin simplificarea gesturilor de apreciere.”
          </p>
          <p className="mt-6 text-purple-400 font-medium">— Echipa Tiply</p>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Gata să faci parte din revoluție?</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Creează-ți contul gratuit și pornește azi. Nu mai aștepta să primești aprecieri doar prin zâmbete.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-bold shadow-lg hover:shadow-pink-500/30 hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
            Începe acum →
          </button>
        </div>
      </div>
    </div>
  );
}