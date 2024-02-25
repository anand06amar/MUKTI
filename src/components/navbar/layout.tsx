import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
    active?: string; // Optional active link for highlighting
  }
  
  const Navbar: React.FC<NavbarProps> = ({ active = '' }) => {
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0); // Update sticky state on scroll
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent shadow-md transition-all duration-300 ease-in-out ${isSticky ? 'bg-opacity-90' : ''}`}
      >
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center">
            {/* Left side navigation */}
            <Link href="/">
              <a className={`font-bold text-xl pr-4 ${active === 'home' ? 'text-blue-500' : ''}`}>Home</a>
            </Link>
            <Link href="/keynotes">
              <a className={`text-md pr-4 ${active === 'keynotes' ? 'text-blue-500' : ''}`}>Keynotes</a>
            </Link>
            <Link href="/events">
              <a className={`text-md ${active === 'events' ? 'text-blue-500' : ''}`}>Events</a>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Right side navigation */}
            <Link href="/sponsors">
              <a className={`text-md pr-4 ${active === 'sponsors' ? 'text-blue-500' : ''}`}>Sponsors</a>
            </Link>
            <Link href="/about">
              <a className={`text-md pr-4 ${active === 'about' ? 'text-blue-500' : ''}`}>About Us</a>
            </Link>
            <Link href="/contact">
              <a className={`text-md ${active === 'contact' ? 'text-blue-500' : ''}`}>Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  