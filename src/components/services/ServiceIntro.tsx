import py16 from '../../config/commonConfig';
interface ServiceIntroProps {
  title: string;
  description: React.ReactNode;
  className?: string;
}

const ServiceIntro = ({ title, description, className = "" }: ServiceIntroProps) => {
  return (
    <section className="industries-service-section-top md:pb-[var(--size-20)] pb-[15px] bg-[#E4E9FC]">
        <div className="mx-auto inner-page-container">
          <h2 className="fs-36 text-[#000000] font-semibold mb-[var(--size-10)]">
            {title}
          </h2>
          <p className="fs-18 text-[#000000]">{description}</p>
        </div>
    </section>
  );
};

export default ServiceIntro;