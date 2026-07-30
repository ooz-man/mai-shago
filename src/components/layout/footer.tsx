import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { hotelConfig } from "@/config/hotel.config";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
} as const;

export function Footer() {
  const { name, tagline, navLinks, contact, socials } = hotelConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-neutral-light">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-heading text-2xl">{name}</p>
            <p className="mt-3 max-w-sm text-sm text-neutral-light/70">{tagline}</p>
            <div className="mt-6 flex gap-4">
              {(Object.keys(socials) as Array<keyof typeof socials>)
                .filter((key) => key in socialIcons)
                .map((key) => {
                  const Icon = socialIcons[key as keyof typeof socialIcons];
                  const href = socials[key];
                  if (!href || !Icon) return null;
                  return (
                    <a
                      key={key}
                      href={href}
                      className="rounded-full border border-white/20 p-2 transition-colors hover:border-secondary hover:text-secondary"
                      aria-label={key}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm text-neutral-light/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-secondary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-neutral-light/70">
              <li className="flex items-center gap-2">
                <Phone size={14} /> {contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> {contact.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" /> {contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-light/50 md:flex-row">
          <p>
            © {year} {name}. All rights reserved.
          </p>
          <p>Built on CMR Hospitality Studio</p>
        </div>
      </div>
    </footer>
  );
}
