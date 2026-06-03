interface Props {
  title?: string;
  industries: string[];
}

const IndustryFit = ({ title = "Built for", industries }: Props) => (
  <section className="industries-service-section-top pb-16 md:pb-24 bg-white">
    <div className="inner-page-container mx-auto md:text-center">
      <h2 className="fs-36 font-semibold mb-6 text-[#000000]">{title}</h2>
      <div className="flex flex-wrap gap-3 md:justify-center">
        {industries.map((i) => (
          <span
            key={i}
            className="fs-18 px-5 py-2.5 rounded-full bg-[#F1F5FB] text-[#002467] font-medium border border-[#E6ECF5]"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryFit;
