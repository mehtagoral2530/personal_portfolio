"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/site-paths";

const navItems = [
  ["About", "#about"],
  ["Research", "#work"],
  ["Career", "#experience"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 70rem)");
    const closeOnDesktop = () => {
      if (desktopBreakpoint.matches) setMenuOpen(false);
    };

    closeOnDesktop();
    desktopBreakpoint.addEventListener("change", closeOnDesktop);
    return () => desktopBreakpoint.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const firstLink = mobileNavRef.current?.querySelector<HTMLAnchorElement>("a");
    const focusFrame = window.requestAnimationFrame(() => firstLink?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !mobileNavRef.current) return;
      const focusable = Array.from(mobileNavRef.current.querySelectorAll<HTMLAnchorElement>("a[href]"));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Goral Bhatt home">
          <span className="brand-mark" aria-hidden="true">GB</span>
          <span className="brand-copy">
            <span className="brand-name">Goral Bhatt</span>
            <span className="brand-practice">Intelligence portfolio</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="nav-resume" href={assetPath("/Goral-Bhatt-Resume.pdf")} download>
            Résumé
          </a>
        </nav>

        <button
          ref={menuButtonRef}
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
        <nav ref={mobileNavRef} className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a href={assetPath("/Goral-Bhatt-Resume.pdf")} download onClick={closeMenu}>
            Download résumé
          </a>
        </nav>
      ) : null}
    </>
  );
}
