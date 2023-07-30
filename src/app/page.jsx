import Navbar from "./components/Navbar/Navbar";
import Offcanvas from "./components/Navbar/Offcanvas";
import Blog from "./components/blog/Blog";
import Cta from "./components/cta/Cta";
import Hero from "./components/hero/Hero";
import OurService from "./components/ourService/OurService";
import PopularDestination from "./components/popularDestination/PopularDestination";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      <Hero />
      <PopularDestination />
      <OurService />
      <Blog />
      <Testimonial />
      <Cta />
    </>
  );
}
