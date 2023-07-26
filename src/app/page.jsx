import Navbar from "./components/Navbar/Navbar";
import Offcanvas from "./components/Navbar/Offcanvas";
import Hero from "./components/hero/Hero";
import PopularDestination from "./components/popularDestination/PopularDestination";

export default function Home() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      <Hero />
      <PopularDestination />
    </>
  );
}
