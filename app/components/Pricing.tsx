import React from "react";

export default function Pricing() {
  return (
    <section id="harga" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 custom-cursor">
            Pilih Paket Terbaik untuk Kebutuhanmu
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto custom-cursor">
            Fleksibilitas berlangganan sesuai kebutuhan. Dapatkan akses premium
            dengan harga terjangkau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {/* Paket 1 Bulan */}
          <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 border border-gray-100 transform transition duration-300 hover:scale-[1.01]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 custom-cursor">
                1 Bulan
              </h3>
              <p className="text-gray-600 custom-cursor">
                Ideal untuk mencoba semua fitur.
              </p>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900 custom-cursor">
                  Rp 99.000
                </span>
                <span className="text-xl text-gray-500 custom-cursor">
                  /bulan
                </span>
              </div>
            </div>
            <ul className="space-y-2 mb-6 custom-cursor">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Akses Semua Fitur Inti
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Unlimited Forms & Landing Pages
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Unlimited Leads Collected
                </span>
              </li>
            </ul>
            <a
              href="https://portal.dripform.id/checkout"
              className="block w-full text-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-fuchsia-400/50 custom-cursor"
            >
              Beli Sekarang
            </a>
          </div>

          {/* Paket 3 Bulan */}
          <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 border border-gray-100 transform transition duration-300 hover:scale-[1.01]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 custom-cursor">
                3 Bulan
              </h3>
              <p className="text-gray-600 custom-cursor">
                Hemat dengan berlangganan lebih lama.
              </p>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900 custom-cursor">
                  Rp 299.000
                </span>
                <span className="text-xl text-gray-500 custom-cursor">
                  /3 bulan
                </span>
              </div>
            </div>
            <ul className="space-y-2 mb-6 custom-cursor">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Akses Semua Fitur Inti
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Unlimited Forms & Landing Pages
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Unlimited Leads Collected
                </span>
              </li>
            </ul>
            <a
              href="https://portal.dripform.id/checkout"
              className="block w-full text-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-fuchsia-400/50 custom-cursor"
            >
              Beli Sekarang
            </a>
          </div>

          {/* Paket 6 Bulan */}
          <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 border border-gray-100 transform transition duration-300 hover:scale-[1.01]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 custom-cursor">
                6 Bulan
              </h3>
              <p className="text-gray-600 custom-cursor">
                Investasi terbaik untuk pertumbuhan bisnis.
              </p>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900 custom-cursor">
                  Rp 499.000
                </span>
                <span className="text-xl text-gray-500 custom-cursor">
                  /6 bulan
                </span>
              </div>
            </div>
            <ul className="space-y-2 mb-6 custom-cursor">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Akses Semua Fitur Inti
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Unlimited Forms & Landing Pages
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Unlimited Leads Collected
                </span>
              </li>
            </ul>
            <a
              href="https://portal.dripform.id/checkout"
              className="block w-full text-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-fuchsia-400/50 custom-cursor"
            >
              Beli Sekarang
            </a>
          </div>

          {/* Paket 1 Tahun (Affiliate) */}
          <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 border border-fuchsia-300 transform transition duration-300 hover:scale-[1.01]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 custom-cursor">
                1 Tahun (Diskon Affiliate)
              </h3>
              <p className="text-fuchsia-600 font-semibold text-md mb-2 custom-cursor">
                Khusus Pembelian Lewat Program Affiliate!
              </p>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900 custom-cursor">
                  Rp 600.000
                </span>
                <span className="text-xl text-gray-500 custom-cursor">
                  /tahun
                </span>
                <p className="text-sm text-green-600 custom-cursor">
                  (Diskon 50%)
                </p>
              </div>
            </div>
            <ul className="space-y-2 mb-6 custom-cursor">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Akses Semua Fitur Inti
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Unlimited Forms & Landing Pages
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-fuchsia-500 mr-2 flex-shrink-0 custom-cursor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 custom-cursor">
                  Unlimited Leads Collected
                </span>
              </li>
            </ul>
            <a
              href="https://portal.dripform.id/checkout"
              className="block w-full text-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-fuchsia-400/50 custom-cursor"
            >
              Beli Sekarang (Affiliate)
            </a>
            <p className="text-center text-gray-500 text-sm mt-2 custom-cursor">
              * Hanya berlaku melalui link affiliate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
