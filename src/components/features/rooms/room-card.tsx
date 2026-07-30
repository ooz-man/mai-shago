"use client";

import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";
import type { RoomType } from "@/types/hotel";
import { ButtonLink } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { cardHover, imageZoom } from "@/animations/variants";

export function RoomCard({ room }: { room: RoomType }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
      className="group overflow-hidden rounded-2xl bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          variants={imageZoom}
          src={room.images[0]}
          alt={room.name}
          className="h-full w-full object-cover"
        />
        {room.rating && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
            <Star size={12} className="fill-secondary text-secondary" />
            {room.rating}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-xl text-foreground">{room.name}</h3>
          <span className="flex items-center gap-1 text-xs text-foreground/50">
            <Users size={12} /> {room.maxGuests}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-foreground/60">{room.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-neutral-soft/40 px-2.5 py-0.5 text-[11px] text-foreground/60"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="font-heading text-lg text-primary">
            {formatPrice(room.pricePerNight, room.currency)}
            <span className="ml-1 text-xs font-body font-normal text-foreground/50">/ night</span>
          </p>
          <ButtonLink href={room.ctaHref} variant="primary" size="sm">
            Book
          </ButtonLink>
        </div>
      </div>
    </motion.article>
  );
}
