'use client';
import React from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

export default function Header() {
  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    toast('Coming soon');
  };

  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-slate-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        {/* Logo / Title */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              JW Nexus
            </span>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          <Link href="/" className="text-gray-200 hover:text-blue-400 transition font-medium">
            Home
          </Link>
          <a
            onClick={handleComingSoon}
            className="text-gray-200 hover:text-purple-400 transition font-medium cursor-pointer"
          >
            Features
          </a>
          <a
            onClick={handleComingSoon}
            className="text-gray-200 hover:text-pink-400 transition font-medium cursor-pointer"
          >
            Profile
          </a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button type="button" className="text-gray-200 focus:outline-none" aria-label="Open menu">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile nav (hidden by default, show on menu open) */}
      <div className="md:hidden px-4 pb-4">
        <Link href="/" className="block py-2 text-gray-200 hover:text-blue-400 font-medium">
          Home
        </Link>
        <a
          onClick={handleComingSoon}
          className="block py-2 text-gray-200 hover:text-purple-400 font-medium cursor-pointer"
        >
          Features
        </a>
        <a
          onClick={handleComingSoon}
          className="block py-2 text-gray-200 hover:text-pink-400 font-medium cursor-pointer"
        >
          Profile
        </a>
      </div>
    </header>
  );
}
