interface IndustriesIntroProps {
  title: string;
  content: string[];
}

const IndustriesIntro = ({ title, content }: IndustriesIntroProps) => {
  return (
    <section className="industries-service-section-top md:pb-[var(--size-20)] pb-[15px] bg-[#ffffff]">
      <div className="mx-auto inner-page-container">
        {/* <div className="max-w-6xl mx-auto"> */}
          <h2 className="fs-36 font-semibold text-[#222222] mb-[var(--size-15)]">
            {title}
          </h2>
          <div>
            {content.map((paragraph, index) => (
              <p className="fs-18 text-[#222222]" key={index}>{paragraph}</p>
            ))}
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default IndustriesIntro;