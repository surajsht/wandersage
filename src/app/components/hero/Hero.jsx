import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="container flex h-screen items-center space-x-[24px]">
      <div className="w-1/2">
        <h2 className="mb-6 font-secondary text-[51px] font-semibold leading-[71.4px]">
          Discover the World with Unforgettable Journeys
        </h2>
        <p className="mb-10">
          Embark on a journey of a lifetime with our expertly crafted travel
          experiences. Explore breathtaking destinations, immerse yourself in
          vibrant cultures, and create unforgettable memories. Let us be your
          guide as we unlock the wonders of the world together.
        </p>
        <button className="flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 text-white">
          Start Your Adventure Now!
          <MdOutlineKeyboardArrowRight className="h-6 w-6" />
        </button>
      </div>

      <div className="w-1/2">
        <div className="flex gap-6">
          <div className="relative h-[628px] w-[397px]">
            <Image
              src="/hero-1.jpg"
              fill={true}
              className="rounded-[213px] object-cover"
            />
          </div>

          <div>
            <div className="relative mb-6 h-[302px] w-[187px]">
              <Image
                src="/hero-2.jpg"
                fill={true}
                className="rounded-[213px] object-cover"
              />
            </div>

            <div className="relative h-[302px] w-[187px]">
              <Image
                src="/hero-3.jpg"
                fill={true}
                className="rounded-[213px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
