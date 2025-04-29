import React from "react";

export default function Feature() {
  return (
    <section id="fitur-utama" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 custom-cursor">
            Semua yang Anda Butuhkan,{" "}
            <span className="text-fuchsia-600 custom-cursor">
              Dalam Satu Platform
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto custom-cursor">
            Dripform menyatukan semua alat penting untuk mengembangkan bisnis
            online Anda, mulai dari mengumpulkan leads hingga mengelola
            pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Form Builder Intuitif
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Buat formulir apa pun dengan mudah—pendaftaran, kontak, survei,
              pemesanan—tanpa perlu coding. Tingkatkan konversi Anda sekarang.
            </p>
          </div>

          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Landing Page Konversi Tinggi
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Desain halaman penjualan atau opt-in yang menarik dengan drag &
              drop editor. Optimalkan dengan tracking pixel dan raih hasil
              maksimal.
            </p>
          </div>

          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Kumpulkan Leads Berkualitas
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Bangun database kontak Anda dengan formulir opt-in yang efektif
              dan terintegrasi langsung dengan sistem follow-up.
            </p>
          </div>

          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Jualan Online Langsung
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Terima pesanan produk fisik atau digital langsung dari formulir
              Anda, lengkap dengan perhitungan ongkir dan pembayaran otomatis.
            </p>
          </div>

          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Notifikasi WhatsApp Otomatis
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Kirim pemberitahuan instan ke admin dan pelanggan melalui WhatsApp
              setiap ada data baru masuk. Tingkatkan responsivitas Anda.
            </p>
          </div>

          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Sistem Afiliasi Terintegrasi
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Kelola program afiliasi Anda dengan mudah. Lacak komisi, referral,
              dan pembayaran dalam satu dasbor terpadu.
            </p>
          </div>

          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Manajemen Kontak (CRM)
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Organisir dan kelola data pelanggan Anda di satu tempat. Lihat
              riwayat interaksi dan segmen kontak Anda dengan mudah.
            </p>
          </div>

          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Penjualan Tiket Event
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Jual tiket acara online atau offline dengan mudah, lengkap dengan
              QR code unik dan sistem verifikasi kehadiran.
            </p>
          </div>

          <div className="group p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-fuchsia-50 transform hover:-translate-y-1">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-cursor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">
              Satu Form, Banyak Fungsi
            </h3>
            <p className="text-gray-600 text-sm custom-cursor">
              Gunakan satu platform form untuk berbagai kebutuhan: jualan
              produk, tiket, donasi, pendaftaran webinar, kuis, dan banyak lagi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
