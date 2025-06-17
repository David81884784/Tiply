import React from "react";

export default function CumIncep() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Efect decorativ fundal */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Titlu */}
        <h2 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Cum începi?
        </h2>
        <p className="text-center text-white/70 mb-16 max-w-xl mx-auto leading-relaxed">
          Îți ia doar câteva minute să pornești. Urmărește pașii de mai jos pentru a începe să primești bacșișuri în timp real.
        </p>

        {/* Pași Numerotați */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {/* Pasul 1 */}
          <div className="group perspective">
            <div className="relative transition-transform duration-500 group-hover:translate-y-[-12px] transform-gpu bg-gray-900/30 p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full text-white font-bold text-xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Creează un cont gratuit</h3>
              <p className="text-white/70 leading-relaxed">
                Completează formularul de înregistrare cu numele tău și adresa de email. Nu ai nevoie decât de 1 minut!
              </p>
            </div>
          </div>

          {/* Pasul 2 */}
          <div className="group perspective">
            <div className="relative transition-transform duration-500 group-hover:translate-y-[-12px] transform-gpu bg-gray-900/30 p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full text-white font-bold text-xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Descarcă codul tău QR</h3>
              <p className="text-white/70 leading-relaxed">
                După ce te înregistrezi, vei primi un cod QR unic. Poți să-l descarci sau să-l afișezi pe telefon.
              </p>
            </div>
          </div>

          {/* Pasul 3 */}
          <div className="group perspective">
            <div className="relative transition-transform duration-500 group-hover:translate-y-[-12px] transform-gpu bg-gray-900/30 p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full text-white font-bold text-xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Primește bacșiș instant</h3>
              <p className="text-white/70 leading-relaxed">
                Clienții scanează codul QR și îți lasă un bacșiș direct în contul tău. Retragerea banilor e simplă și rapidă.
              </p>
            </div>
          </div>
        </div>

        {/* Secțiune QR + Text */}
        <div className="mt-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 bg-gradient-to-br from-gray-900/40 to-black/40 p-10 lg:p-16 rounded-2xl border border-white/10 shadow-2xl">
          {/* Text */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-4xl font-bold leading-tight">Gata să începi?</h3>
            <p className="text-white/70 text-lg">
              Tot ce ai nevoie este un smartphone și un cont activat. Descarcă-ți codul QR personalizat și pune-l oriunde: pe bon, pe masa ta de lucru sau chiar pe rețelele sociale.
            </p>
            <p className="text-white/70 text-lg">
              Oferă clienților tăi o experiență ușoară și elegantă de a lăsa bacșișuri fără numerar — în doar câteva secunde.
            </p>
            <button className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/30 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1">
              Creează-ți contul acum →
            </button>
          </div>

          {/* Imagine / QR Code */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src="https://via.placeholder.com/300x300.png?text=QR+Code"
                alt="Cod QR Exemplu"
                className="w-64 h-64 object-cover rounded-xl shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Secțiune Beneficii Suplimentare */}
        <div className="mt-28">
          <h3 className="text-3xl font-semibold text-center mb-12">De ce să folosești Tiply?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beneficiu 1 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
              <span className="text-2xl text-purple-500 mb-4">⏱️</span>
              <h4 className="text-xl font-bold mb-2">Înregistrare Rapidă</h4>
              <p className="text-white/70">Îți ia doar 1 minut pentru a crea un cont și a obține codul tău QR.</p>
            </div>
            {/* Beneficiu 2 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
              <span className="text-2xl text-purple-500 mb-4">📱</span>
              <h4 className="text-xl font-bold mb-2">Funcționează pe Orice Dispozitiv</h4>
              <p className="text-white/70">Poți afișa codul tău QR pe telefon, imprimată sau pe site-ul tău personal.</p>
            </div>
            {/* Beneficiu 3 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
              <span className="text-2xl text-purple-500 mb-4">💳</span>
              <h4 className="text-xl font-bold mb-2">Retragere Instantanee</h4>
              <p className="text-white/70">Banii sunt transferați direct pe cardul tău bancar, fără întârzieri.</p>
            </div>
          </div>
        </div>

        {/* Secțiune întrebări frecvente */}
        <div className="mt-28">
          <h3 className="text-3xl font-semibold text-center mb-12">Întrebări frecvente</h3>
          <div className="space-y-6">
            {/* Întrebare 1 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition">
              <h4 className="font-bold text-lg">Cât durează crearea contului?</h4>
              <p className="mt-2 text-white/70">Doar 1 minut. Nu ai nevoie de nicio aplicație – doar un email și un telefon.</p>
            </div>
            {/* Întrebare 2 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition">
              <h4 className="font-bold text-lg">Este sigur să primesc bani prin QR?</h4>
              <p className="mt-2 text-white/70">Da! Toate tranzacțiile sunt securizate și monitorizate. Banii ajung direct pe cardul tău.</p>
            </div>
            {/* Întrebare 3 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition">
              <h4 className="font-bold text-lg">Pot folosi QR-ul în orice loc?</h4>
              <p className="mt-2 text-white/70">Desigur! Pe bon, pe masă, în magazin, pe Instagram, TikTok sau Facebook.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-28 text-center">
          <h3 className="text-3xl font-bold mb-4">Ești pregătit să primești bacșișuri digitale?</h3>
          <p className="text-white/70 max-w-xl mx-auto mb-6">
            Nu mai aștepta. Creează-ți contul și pornește azi.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-bold shadow-lg hover:shadow-pink-500/30 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1">
            Creează-ți contul acum →
          </button>
        </div>
      </div>
    </section>
  );
}