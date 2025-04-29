import React from "react";

export default function Anchor() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 custom-cursor">
            Lelah Menggunakan{" "}
            <span className="text-fuchsia-600 custom-cursor">Banyak Alat</span>{" "}
            Terpisah?
          </h2>
          <p className="text-lg text-gray-600 mb-12 custom-cursor">
            Mengelola form builder, landing page, autoresponder email/WA, sistem
            afiliasi, dan CRM secara terpisah itu{" "}
            <span className="font-semibold custom-cursor">
              merepotkan, mahal, dan seringkali sulit terintegrasi
            </span>
            . Waktu Anda habis untuk setup teknis, bukan fokus mengembangkan
            bisnis.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              className="w-16 h-16 text-fuchsia-500 transform rotate-90 md:rotate-0 custom-cursor"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center md:text-left custom-cursor">
                ❌ Cara Lama yang Rumit
              </h3>
              <ul className="space-y-2 text-gray-600 list-disc list-inside custom-cursor">
                <li>
                  Langganan banyak tools ={" "}
                  <span className="font-medium custom-cursor">
                    Biaya Bengkak
                  </span>
                </li>
                <li>
                  Integrasi manual antar platform ={" "}
                  <span className="font-medium custom-cursor">
                    Rentan Error
                  </span>
                </li>
                <li>
                  Data tersebar di mana-mana ={" "}
                  <span className="font-medium custom-cursor">
                    Sulit Dianalisis
                  </span>
                </li>
                <li>Kurva belajar curam untuk tiap alat</li>
                <li>Membuang waktu & energi berharga</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200 shadow-md ring-2 ring-fuchsia-100">
              <h3 className="text-xl font-semibold text-fuchsia-800 mb-3 text-center md:text-left custom-cursor">
                ✅ Solusi Dripform Terintegrasi
              </h3>
              <ul className="space-y-2 text-fuchsia-700 list-disc list-inside custom-cursor">
                <li>
                  Semua kebutuhan dalam{" "}
                  <span className="font-medium custom-cursor">
                    Satu Platform
                  </span>
                </li>
                <li>
                  Integrasi mulus & otomatis ={" "}
                  <span className="font-medium custom-cursor">Hemat Waktu</span>
                </li>
                <li>
                  Data terpusat ={" "}
                  <span className="font-medium custom-cursor">
                    Insight Lebih Baik
                  </span>
                </li>
                <li>Antarmuka intuitif & mudah digunakan</li>
                <li>
                  Fokus pada{" "}
                  <span className="font-medium custom-cursor">
                    Pertumbuhan Bisnis Anda
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-lg text-gray-700 max-w-3xl mx-auto custom-cursor">
          Dripform hadir untuk{" "}
          <span className="font-semibold text-gray-900 custom-cursor">
            menyederhanakan alur kerja Anda
          </span>
          , menghemat biaya, dan memberikan semua alat yang Anda butuhkan untuk
          sukses secara online dalam satu tempat yang powerfull.
        </p>
      </div>
    </section>
  );
}
