import Navbar from "./components/Navbar/Navbar";
import Offcanvas from "./components/Navbar/Offcanvas";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      <Hero />
    </>
  );
}
