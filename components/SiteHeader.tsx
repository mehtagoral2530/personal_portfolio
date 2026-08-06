"use client";

import { useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Experience", "#experience"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Goral Bhatt home">
          <span className="brand-name">Goral Bhatt</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Contact
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      {menuOpen ? (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>{label}</span>
            </a>
          ))}
          <a href="#contact" onClick={closeMenu}>
            <span>Contact</span>
          </a>
        </nav>
      ) : null}
    </>
  );
}
