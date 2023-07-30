import Image from "next/image";
import SectionTitle from "../sectionTitle/SectionTitle";
import { TestimonialData } from "@/app/Data";

const Testimonial = () => {
  return (
    <div className="container mb-12 lg:mb-16">
      <SectionTitle
        title="What Our Clients Says"
        description="Our clients' testimonials speak volumes about the dedication and commitment we pour into every travel itinerary. "
      />

      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {TestimonialData.map((data) => {
          let { id, star, description, image, name, jobTitle } = data;

          return (
            <div
              key={id}
              className="space-y-4 p-6 shadow-[0_3px_14px_3px_rgba(0,0,0,.2)]"
            >
              <div className="flex items-center gap-1 text-[#F3BD58]">
                {star}
              </div>

              <p>{description}</p>

              <div className="flex items-center">
                <div className="relative mr-2 h-12 w-12">
                  <Image
                    src={image}
                    alt={`testimonial-image${id}`}
                    fill={true}
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="font-secondary font-semibold leading-[19.2px]">
                    {name}
                  </h2>
                  <span className="text-sm"> {jobTitle} </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
