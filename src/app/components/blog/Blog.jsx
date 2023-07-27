import { BlogData } from "@/app/Data";
import SectionTitle from "../sectionTitle/SectionTitle";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container mb-12 lg:mb-16">
      <SectionTitle
        title="Our Latest Blog"
        description="Embark on a captivating journey through our travel blog, where wanderlust meets adventure. "
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          {BlogData.map((data, dataIdx) => {
            let { id, title, description, image } = data;

            if (dataIdx === 0) {
              return (
                <>
                  <div className="relative mb-3 h-[328px] w-full" key={id}>
                    <Image
                      src={image}
                      alt="blog-image-1"
                      fill={true}
                      className="object-cover"
                    />
                  </div>

                  <h2 className="mb-2 font-secondary text-[32px] font-bold leading-[44.8px]">
                    {title}
                  </h2>
                  <p> {description} </p>
                </>
              );
            }
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {BlogData.map((data, dataIdx) => {
            let { id, title, image } = data;

            if (dataIdx > 0) {
              return (
                <div key={id}>
                  <div className="relative mb-2 h-[200px] w-full">
                    <Image
                      src={image}
                      alt={`blog-image-${dataIdx + 1}`}
                      fill={true}
                      className="object-cover"
                    />
                  </div>

                  <h2 className="font-secondary text-lg font-semibold leading-[25.2px]">
                    {title}
                  </h2>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
