"use client";

import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-800 border-b border-gray-200 text-sm py-3 sm:py-0 ">
        <nav
          className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global">
          <div className="flex items-center justify-between">
            <Link
              className="w-full flex-none text-xl text-white font-semibold p-6"
              href="/"
              aria-label="Brand">
              AI-UI-Components-Generator
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
