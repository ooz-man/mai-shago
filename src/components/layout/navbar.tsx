"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { hotelConfig } from "@/config/hotel.config";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Sticky, blurred navbar. Shrinks vertically and gains a shadow once the
 * page is scrolled. Nav links are sourced entirely from hotelConfig —
 * never edit this file to add a link for one hotel.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border border-white/20 bg-white/70 px-5 backdrop-blur-xl transition-all duration-300 dark:bg-black/40",
            scrolled ? "h-14 shadow-lg" : "h-16"
          )}
        >
          <a href="/" className="font-heading text-lg font-semibold tracking-tight text-primary">
            {hotelConfig.name}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {hotelConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ButtonLink href="#contact" variant="gold" size="sm">
              Book Now
            </ButtonLink>
          </div>

          <button
            className="md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-xl md:hidden">
            {hotelConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="#contact" variant="gold" size="sm" className="mt-2">
              Book Now
            </ButtonLink>
          </div>
        )}
      </div>
    </header>
  );
}
