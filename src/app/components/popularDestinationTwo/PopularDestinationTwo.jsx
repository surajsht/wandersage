import { PopularDestinationDataTwo } from "@/app/Data";
import SectionTitle from "../sectionTitle/SectionTitle";
import Image from "next/image";

const PopularDestinationTwo = () => {
  return (
    <div className="container mb-12 lg:mb-16">
      <SectionTitle
        title="Popular Destinations"
        description=" Get ready to embark on an extraordinary journey with our selection of popular destinations that are sure to captivate your senses and ignite your wanderlust."
      />

      <div className="grid gap-4">
        {PopularDestinationDataTwo.map((data) => {
          let { id, image, title, icon, rating, date, price } = data;

          return (
            <div key={id}>
              <div className="relative mb-2 h-[258px] w-full">
                <Image
                  src={image}
                  alt={title}
                  fill={true}
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="flex items-center justify-between">
                <h2 className="font-secondary text-base font-semibold leading-[19.2px]">
                  {title}
                </h2>

                <span className="flex items-center gap-2 rounded-md bg-brand px-1 text-white">
                  {icon} {rating}
                </span>
              </div>

              <span> {date} </span>

              <div>
                <span className="font-bold"> ${price} </span> night
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularDestinationTwo;
