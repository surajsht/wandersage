import Navbar from "./components/Navbar/Navbar";
import Offcanvas from "./components/Navbar/Offcanvas";
import Blog from "./components/blog/Blog";
import Hero from "./components/hero/Hero";
import OurService from "./components/ourService/OurService";
import PopularDestination from "./components/popularDestination/PopularDestination";

export default function Home() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      <Hero />
      <PopularDestination />
      <OurService />
      <Blog />
    </>
  );
}
