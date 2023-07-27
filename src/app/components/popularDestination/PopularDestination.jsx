import SectionTitle from "../sectionTitle/SectionTitle";
import { PopularDestinationData } from "@/app/Data";
import Image from "next/image";
import styles from "./popularDestination.module.css";
import { MdLocationOn } from "react-icons/md";

const PopularDestination = () => {
  return (
    <div className="container mb-12 lg:mb-16">
      <SectionTitle
        title="Popular Destinations"
        description=" Get ready to embark on an extraordinary journey with our selection of popular destinations that are sure to captivate your senses and ignite your wanderlust."
      />

      <div className={styles.popularDestination}>
        {PopularDestinationData.map((item) => {
          let { id, image, title } = item;

          return (
            <div key={id} className="relative mb-4 md:mb-0">
              <div className="absolute inset-0 z-10 h-full w-full rounded-3xl bg-gradient-to-t from-black to-transparent"></div>
              <div className={`relative h-60 w-full ${styles.popularImage}`}>
                <Image
                  src={image}
                  fill={true}
                  className="rounded-3xl object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1 rounded-lg bg-white px-6 py-1 text-black">
                <MdLocationOn className="h-5 w-5 text-[#747474]" />
                <h2 className="font-bold">{title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularDestination;
