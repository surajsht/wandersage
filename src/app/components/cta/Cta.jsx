const Cta = () => {
  return (
    <div className="container mb-12 flex flex-col items-center justify-center bg-brand py-6 text-center lg:mb-16">
      <h2 className="mb-6 font-secondary text-[32px] leading-[44.8px] text-white">
        Subscribe newsletter & get latest news
      </h2>

      <div className="flex items-center gap-2">
        <input type="text" className="rounded-sm p-2" />
        <button className="flex items-center justify-center rounded-sm bg-white p-2 px-4 text-base font-semibold leading-[22.4px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Cta;
