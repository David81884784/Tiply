import React from "react";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
      {/* Efect de Blur */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          width: "925px",
          height: "670px",
          top: "-101.3px",
          left: "-527.05px",
          transform: "rotate(30deg)",
          background:
            "linear-gradient(330.85deg, rgba(236, 42, 239, 0.8) 16.08%, rgba(215, 20, 130, 0.8) 46.17%, rgba(135, 24, 137, 0.8) 83.88%)",
          filter: "blur(300px)",
          zIndex: 0,
        }}
      ></div>

      {/* Hero Section */}
      <section className="max-w-screen-lg mx-auto p-8 md:p-16 mt-[150px] ml-[120px] relative z-10">
        <div className="w-full">
          <h2 className="text-5xl font-bold leading-tight mb-4">
            Oferă Tips Ușor, <br />
            Rapid și Transparent
          </h2>
          <p className="text-lg text-white mb-8">
            Cu Tiply, lași un bacșiș în doar câteva secunde. <br />
            Fără numerar, fără confuzii – doar apreciere <br />
            sinceră pentru serviciul excelent.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              style={{
                width: "202px",
                height: "54px",
                borderRadius: "15px",
                padding: "16px 32px",
                background: "linear-gradient(90deg, #228DAF 0%, #7A67BB 94.23%)",
              }}
              className="text-white font-bold text-lg shadow-lg hover:opacity-80 transition whitespace-nowrap"
            >
              Vezi Mai Multe
            </button>

            <button
              style={{
                width: "275px",
                height: "56px",
                borderRadius: "15px",
                padding: "16px 32px",
                background: "#5C489F4D",
                border: "2px solid transparent",
                borderImageSource:
                  "linear-gradient(90deg, #5C489F 0%, #62308F 100%)",
              }}
              className="text-white font-bold text-lg shadow-lg hover:border hover:border-gradient-to-r hover:border-[#5C489F] transition whitespace-nowrap"
            >
              Lasă un Tips Acum →
            </button>
          </div>
        </div>
      </section>

      {/* Cum funcționează Tiply */}
      <section className="relative z-10 mt-32 px-8 md:px-16 text-center">
        <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-20 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="relative w-[320px] h-[220px] flex items-end group transition-transform duration-300 hover:scale-[1.03]">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none animate-pulse-slow"
              style={{
                background: `radial-gradient(circle at center, #D26BFF 0%, transparent 80%)`,
                filter: "blur(100px)",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full rounded-[30px] z-10 pointer-events-none"
              style={{
                boxShadow: `0 0 80px 10px #D26BFF66`,
              }}
            />
            <div
              className="relative z-20 p-6 text-white w-full h-full flex flex-col justify-center"
              style={{
                background: "rgba(176, 102, 255, 0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-3">Creezi contul tău gratuit</h3>
              <p className="text-sm text-white/80 leading-snug">
                Îți ia doar 1 minut să te înregistrezi și să primești un cod QR personalizat.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-[320px] h-[220px] flex items-end group transition-transform duration-300 hover:scale-[1.03]">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none animate-pulse-slow"
              style={{
                background: `radial-gradient(circle at center, #2C73D2 0%, transparent 80%)`,
                filter: "blur(100px)",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full rounded-[30px] z-10 pointer-events-none"
              style={{
                boxShadow: `0 0 80px 10px #2C73D266`,
              }}
            />
            <div
              className="relative z-20 p-6 text-white w-full h-full flex flex-col justify-center"
              style={{
                background: "rgba(176, 102, 255, 0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-3">Primești bacșiș prin QR</h3>
              <p className="text-sm text-white/80 leading-snug">
                Afișezi codul tău pe telefon, bon sau alte materiale și clienții îl scanează.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-[320px] h-[220px] flex items-end group transition-transform duration-300 hover:scale-[1.03]">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none animate-pulse-slow"
              style={{
                background: `radial-gradient(circle at center, #FFD700 0%, transparent 80%)`,
                filter: "blur(100px)",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full rounded-[30px] z-10 pointer-events-none"
              style={{
                boxShadow: `0 0 80px 10px #FFD70066`,
              }}
            />
            <div
              className="relative z-20 p-6 text-white w-full h-full flex flex-col justify-center"
              style={{
                background: "rgba(176, 102, 255, 0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-3">Retragi banii instant</h3>
              <p className="text-sm text-white/80 leading-snug">
                Bacșișurile intră în contul tău și le poți retrage oricând, simplu și sigur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noua secțiune cu instructiuni din imagine */}
      <section className="max-w-screen-lg mx-auto p-8 md:p-16 mt-40 mb-20 text-center">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Instrucțiuni numerotate */}
          <div className="w-full md:w-1/2">
            <ol className="list-decimal list-inside space-y-8">
              <li className="flex items-start text-2xl">
                <span className="mr-4 bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  1
                </span>
                Activează contul și descarcă codul tău QR.
              </li>
              <li className="flex items-start text-2xl">
                <span className="mr-4 bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  2
                </span>
                Tipărește-l sau salvează-l în telefon.
              </li>
              <li className="flex items-start text-2xl">
                <span className="mr-4 bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  3
                </span>
                Primește bani direct pe cardul tău bancar.
              </li>
            </ol>
          </div>

          {/* Text explicativ */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Primește bacșiș fără numerar, simplu și elegant</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              O soluție modernă pentru profesioniști din domeniul serviciilor – rapid, sigur și fără comisioane ascunse.
            </p>
          </div>
        </div>
      </section>

      {/* Secțiunea cu cod QR */}
      <section className="max-w-screen-lg mx-auto p-8 md:p-16 mt-20 bg-gradient-to-br from-purple-900 to-gray-900 text-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center p-6">
          {/* Instrucțiuni numerotate */}
          <div className="w-full md:w-1/2">
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-xl">
                Tipărește materialele tale QR
              </li>
              <li className="text-xl">
                Creează autocolante
              </li>
              <li className="text-xl">
                insigne sau carduri cu codul tău personalizat.
              </li>
            </ol>
          </div>

          {/* Cod QR */}
          <div className="w-full md:w-1/2 text-right">
            <img
              src="https://via.placeholder.com/150"  // Înlocuiți cu calea reală a imaginii QR
              alt="Cod QR Personalizat"
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </div>
        </div>
      </section>

            {/* Secțiunea cu forme rotunde */}
      <section className="max-w-screen-lg mx-auto p-8 md:p-16 mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Beneficii principale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Formele rotunde */}
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-3 flex items-center space-x-4"
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Timp economisit</span>
          </div>

          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-3 flex items-center space-x-4"
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span>Plăți rapide</span>
          </div>

          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-3 flex items-center space-x-4"
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Istoric tranzacții</span>
          </div>

          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-3 flex items-center space-x-4"
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Confirmări automate</span>
          </div>

          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-3 flex items-center space-x-4"
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Confirmări automate</span>
          </div>

          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-3 flex items-center space-x-4"
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Setări personalizate</span>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="bg-black text-white p-8 mt-20 text-center">
          <div className="max-w-screen-lg mx-auto">
            <img src="/logo.png" alt="Logo" className="w-32 h-32 mx-auto mb-4" /> {/* Adaugă calea corectă a imaginii */}
            <p className="text-lg mb-4">
              Copyright © {new Date().getFullYear()} Tiply. Toate drepturile rezervate.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-white hover:text-gray-300">
                Termeni de utilizare
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Politica de confidențialitate
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Home;