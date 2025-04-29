import React from 'react'

export default function Manfaat() {
  return (
    <section id="manfaat-tambahan" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 custom-cursor">Lebih dari Sekedar Form Builder Biasa</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto custom-cursor">Dapatkan nilai tambah maksimal untuk bisnis Anda dengan fitur ekstra yang powerful dan menghemat biaya operasional.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 text-fuchsia-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-cursor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10m16-10v10M4 17h16M4 7a2 2 0 012-2h12a2 2 0 012 2m-2 10a2 2 0 01-2 2H6a2 2 0 01-2-2"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h8m-4 4h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">Unlimited Leads</h3>
            <p className="text-gray-600 custom-cursor">Kumpulkan data pelanggan sebanyak-banyaknya tanpa batasan. Fokus pada pertumbuhan bisnis Anda.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 text-fuchsia-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-cursor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">Cek Ongkir Otomatis</h3>
            <p className="text-gray-600 custom-cursor">Mudahkan pelanggan Anda dengan perhitungan ongkos kirim instan ke seluruh Indonesia langsung di form.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 text-fuchsia-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-cursor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">Pembayaran Otomatis</h3>
            <p className="text-gray-600 custom-cursor">Terima pembayaran langsung via QRIS, Virtual Account, E-Wallet, dll. Konfirmasi otomatis, tanpa cek manual.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 text-fuchsia-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-cursor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">Free Hosting</h3>
            <p className="text-gray-600 custom-cursor">Landing page dan form Anda dihosting gratis di server kami. Tidak perlu pusing biaya hosting tambahan.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 text-fuchsia-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-cursor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">Free Subdomain</h3>
            <p className="text-gray-600 custom-cursor">Dapatkan subdomain gratis (namaanda.dripform.id) atau hubungkan domain kustom Anda sendiri.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 text-fuchsia-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-cursor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 custom-cursor">Integrasi Lengkap</h3>
            <p className="text-gray-600 custom-cursor">Hubungkan Dripform dengan tools favorit Anda lainnya melalui webhook atau integrasi pihak ketiga.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
