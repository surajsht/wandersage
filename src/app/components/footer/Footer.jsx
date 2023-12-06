import { FooterDetail } from "@/app/Data";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FooterDetail.map((data) => {
          let { id, title, images, description, items } = data;

          return (
            <div key={id}>
              <h2 className="mb-4 font-secondary text-2xl font-medium leading-[28.8px]">
                {title}
              </h2>

              {description && <p> {description} </p>}

              {images && (
                <div className="grid grid-cols-2 gap-4">
                  {images.map((data) => {
                    let { id, image } = data;

                    return (
                      <div key={id} className="relative h-24">
                        <Image
                          src={image}
                          alt={`gallery-image-${id}`}
                          fill={true}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {items && (
                <ul className="space-y-2">
                  {items.map((data) => {
                    let { id, link } = data;

                    return <li key={id}> {link} </li>;
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
