"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-end space-x-1">
            {/* Logo Image */}
            <div className="w-14 h-14 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="RobEn Logo" 
                width={56} 
                height={56} 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Brand Text */}
            <div className="flex flex-col justify-end pb-0.5">
              <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                RobEn
              </span>
              <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-wide leading-tight">
                Learning Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/tracks" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Tracks
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              My Learning
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/signin" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/tracks" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Tracks
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                My Learning
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <Link href="/signin" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Sign In
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-medium text-center shadow-lg">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
