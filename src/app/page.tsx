// pages/index.js or Home.js
import AboutHome from "@/components/HomePageComponents/AboutHome";
import Banner from "@/components/HomePageComponents/Banner";
import TestimonialSection from "@/components/HomePageComponents/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <TestimonialSection />
      <AboutHome />
    </>
  );
}
