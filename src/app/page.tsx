import { Hero } from "@/components/features/hero/hero";
import { RoomsSection } from "@/components/features/rooms/rooms-section";
import { AmenitiesSection } from "@/components/features/amenities/amenities-section";
import { Gallery } from "@/components/features/gallery/gallery";
import { RestaurantSection } from "@/components/features/restaurant/restaurant-section";
import { ConferenceSection } from "@/components/features/conference/conference-section";
import { TestimonialCarousel } from "@/components/features/testimonials/testimonial-carousel";
import { MapSection } from "@/components/features/map/map-section";
import { ContactForm } from "@/components/features/contact/contact-form";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RoomsSection />
      <AmenitiesSection />
      <Gallery />
      <RestaurantSection />
      <ConferenceSection />
      <TestimonialCarousel />
      <MapSection />
      <ContactForm />
    </>
  );
}
