import SectionTitle from "../sectionTitle/SectionTitle";
import { PopularDestinationData } from "../../Data";
import Image from "next/image";

const PopularDestination = () => {
  return (
    <div className="container">
      <SectionTitle
        title="Popular Destinations"
        description=" Get ready to embark on an extraordinary journey with our selection of popular destinations that are sure to captivate your senses and ignite your wanderlust."
      />

      <div className="">
        {PopularDestinationData.map((item) => {
          let { id, image, title } = item;

          return (
            <div key={id} className="relative mb-4">
              <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
              <div className="relative h-60 w-full">
                <Image src={image} fill={true} className="object-cover" />
              </div>
              <h2 className="absolute bottom-4 left-4 z-20 rounded-lg bg-white px-6 py-1 text-black">
                {title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularDestination;
