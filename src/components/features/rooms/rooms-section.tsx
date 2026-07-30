"use client";

import { motion } from "framer-motion";
import { hotelConfig } from "@/config/hotel.config";
import { SectionTitle } from "@/components/ui/section-title";
import { RoomCard } from "@/components/features/rooms/room-card";
import { fadeUp, staggerContainer } from "@/animations/variants";

export function RoomsSection() {
  return (
    <section id="rooms" className="bg-neutral-light py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Accommodation"
          title="Rooms & Suites"
          description="Each room is designed around comfort first, with details that reveal themselves the longer you stay."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {hotelConfig.rooms.map((room) => (
            <motion.div key={room.id} variants={fadeUp}>
              <RoomCard room={room} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
