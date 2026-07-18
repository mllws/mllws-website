"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, siteLogo } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={siteLogo}
            alt="MLLWS"
            width={160}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-accent"
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 fill-current">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full w-56 rounded-md border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-accent"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-brand-dark px-4 pb-4 md:hidden">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="py-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-sm font-semibold uppercase text-white"
                  onClick={() => setMobileSubOpen((v) => !v)}
                >
                  {item.label}
                  <span>{mobileSubOpen ? "−" : "+"}</span>
                </button>
                {mobileSubOpen && (
                  <div className="ml-3 flex flex-col border-l border-white/20 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2 text-sm text-gray-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-semibold uppercase text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
