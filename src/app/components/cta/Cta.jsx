const Cta = () => {
  return (
    <div className="container mb-12 flex flex-col items-center justify-center bg-brand py-6 text-center sm:max-w-[544px] sm:rounded-lg md:max-w-[736px] md:px-6 lg:mb-16 lg:max-w-[991px] lg:rounded-2xl lg:py-16 xl:max-w-[1240px]">
      <h2 className="md:leading[57.4px] mb-6 font-secondary text-[32px] font-bold leading-[44.8px] text-white md:text-[41px] xl:text-[51px] xl:leading-[71.4px]">
        Subscribe newsletter & get latest news and updates
      </h2>

      <div className="flex items-center gap-2">
        <input
          type="text"
          className="rounded-sm p-2 md:w-[280px] xl:h-[58px] xl:w-[360px] xl:rounded-lg"
        />
        <button className="flex items-center justify-center rounded-sm bg-white p-2 px-4 text-base font-semibold leading-[22.4px] xl:h-[58px] xl:rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Cta;
