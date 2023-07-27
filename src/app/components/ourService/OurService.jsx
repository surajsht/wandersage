import SectionTitle from "../sectionTitle/SectionTitle";
import { OurServiceData } from "@/app/Data";

const OurService = () => {
  return (
    <div className="container mb-12 lg:mb-16">
      <SectionTitle
        title="Our Services"
        description="Welcome to Our Travel Agency! We take immense pride in offering a comprehensive array of services that cater to all your travel needs. "
      />

      <div className="grid gap-7 md:grid-cols-2 md:gap-9 lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-[52px]">
        {OurServiceData.map((data) => {
          let { id, title, description, icon } = data;

          return (
            <div key={id} className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E9ECF5]">
                {icon}
              </div>
              <h2 className="font-secondary text-xl font-semibold leading-[24px]">
                {title}
              </h2>
              <p> {description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
