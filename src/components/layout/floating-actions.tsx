import { Phone, MessageCircle, Navigation, CalendarCheck } from "lucide-react";
import { hotelConfig } from "@/config/hotel.config";

/** Always-visible mobile action bar. Hidden on md+ where the navbar CTA suffices. */
export function FloatingActions() {
  const { contact } = hotelConfig;

  const actions = [
    { icon: Phone, label: "Call", href: `tel:${contact.phone}` },
    ...(contact.whatsapp
      ? [{ icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` }]
      : []),
    ...(contact.latitude && contact.longitude
      ? [
          {
            icon: Navigation,
            label: "Directions",
            href: `https://maps.google.com/?q=${contact.latitude},${contact.longitude}`,
          },
        ]
      : []),
    { icon: CalendarCheck, label: "Book Now", href: "#contact" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-primary/95 backdrop-blur-xl md:hidden">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          className="flex flex-1 flex-col items-center gap-1 py-3 text-neutral-light/90"
        >
          <action.icon size={18} />
          <span className="text-[10px] font-medium">{action.label}</span>
        </a>
      ))}
    </div>
  );
}
