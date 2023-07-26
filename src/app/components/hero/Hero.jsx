import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="container mb-12 lg:mb-16 lg:flex lg:h-[712px] lg:items-center lg:gap-6 xl:h-[980px]">
      <div className="mb-10 lg:w-1/2">
        <h2 className="mb-4 font-secondary text-[36px] font-semibold leading-[50.4px] lg:mb-6 lg:text-[41px] lg:leading-[57.4px] xl:text-[51px] xl:leading-[71.4px]">
          Discover the World with Unforgettable Journeys
        </h2>
        <p className="mb-6 lg:mb-8">
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

      <div className="lg:w-1/2">
        <div className="sm:flex sm:gap-4">
          <div className="relative mb-4 h-[260px] sm:h-[400px] sm:w-1/2 xl:h-[628px] xl:w-4/6">
            <Image
              src="/hero-1.jpg"
              fill={true}
              className="rounded-[24px] object-cover xl:rounded-[214px]"
            />
          </div>

          <div className="sm:w-1/2 xl:w-2/6">
            <div className="relative mb-4 h-[126px] sm:h-[192px] xl:h-[302px]">
              <Image
                src="/hero-2.jpg"
                fill={true}
                className="rounded-[24px] object-cover xl:rounded-[214px]"
              />
            </div>

            <div className="relative h-[126px] sm:h-[192px] xl:h-[302px]">
              <Image
                src="/hero-3.jpg"
                fill={true}
                className="rounded-[24px] object-cover xl:rounded-[214px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
