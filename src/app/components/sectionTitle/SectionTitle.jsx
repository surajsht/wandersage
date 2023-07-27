const SectionTitle = ({ title, description }) => {
  return (
    <div className="mb-7 text-center lg:mb-12">
      <h2 className="mb-3 font-secondary text-[28px] font-extrabold leading-[37.5px] lg:text-[36px] lg:leading-[43.2px]">
        {title}
      </h2>
      <p className="mx-auto w-[95%] md:w-[70%]"> {description} </p>
    </div>
  );
};

export default SectionTitle;
