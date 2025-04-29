/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-purple-50 to-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-fuchsia-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-100 rounded-full opacity-40 blur-3xl animate-pulse-slow delay-500"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-fuchsia-700 uppercase bg-fuchsia-100 rounded-full custom-cursor">
              Platform All-in-One Anda
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 custom-cursor">
              Dripform: Lebih Dari Sekadar{" "}
              <span className="text-fuchsia-600 custom-cursor">
                Form Builder
              </span>{" "}
              Biasa.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 custom-cursor">
              Solusi lengkap untuk formulir online, landing page konversi
              tinggi, notifikasi WhatsApp otomatis, manajemen afiliasi, hingga
              CRM sederhana. Semua dalam satu platform yang mudah digunakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#harga"
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-fuchsia-600 rounded-lg shadow-lg hover:bg-fuchsia-700 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 custom-cursor"
              >
                Lihat Paket Harga
              </a>
              <a
                href="#fitur"
                className="inline-block px-8 py-4 text-lg font-semibold text-fuchsia-700 bg-white border border-fuchsia-200 rounded-lg shadow-sm hover:bg-fuchsia-50 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 custom-cursor"
              >
                Pelajari Fitur
              </a>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0 mx-auto lg:mx-0 w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-300 to-purple-300 rounded-lg transform -rotate-3 blur-xl opacity-50"></div>
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg"
              alt="Preview Antarmuka Dripform"
              className="relative rounded-lg shadow-2xl w-full h-auto z-10 custom-cursor"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg z-20 flex items-center justify-center p-2 animate-bounce-slow">
              <svg
                className="w-12 h-12 text-fuchsia-500 custom-cursor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(-10%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
}
