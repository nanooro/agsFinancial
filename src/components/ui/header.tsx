"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  return (
    <motion.header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md px-4 py-2 flex items-center">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/image-20250511194348.jpg"
            alt="AGS Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="flex">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              AGS
            </span>
            <span className="text-xl font-bold text-red-600 dark:text-white">
              KEYS
            </span>{" "}
          </div>
        </div>
      </Link>

      <div className="ml-auto">
        <AnimatePresence mode="wait">
          {isHamMenuOpen ? (
            <CrossIcon key="cross" onClick={() => setIsHamMenuOpen(false)} />
          ) : (
            <HamburgerIcon key="ham" onClick={() => setIsHamMenuOpen(true)} />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isHamMenuOpen && <NavBar onClose={() => setIsHamMenuOpen(false)} />}
      </AnimatePresence>
    </motion.header>
  );
}

function HamburgerIcon({ onClick }: { onClick: () => void }) {
  return (
    <motion.button onClick={onClick} className="p-2" aria-label="Open menu">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.button>
  );
}

function CrossIcon({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="p-2"
      aria-label="Close menu"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M6 6l12 12M6 18L18 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.button>
  );
}

function NavBar({ onClose }: { onClose: () => void }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-3 z-40 shadow-lg"
    >
      <Link href="/" onClick={onClose}>
        <button className="w-full text-left text-blue-600 dark:text-blue-400 font-semibold hover:underline">
          Home
        </button>
      </Link>
      <Link href="/learn-more" onClick={onClose}>
        <button className="w-full text-left text-blue-600 dark:text-blue-400 font-semibold hover:underline">
          learn-more
        </button>
      </Link>
    </motion.nav>
  );
}
