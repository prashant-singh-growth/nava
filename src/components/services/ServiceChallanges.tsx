import { ReactNode } from "react";

interface ServiceIntroProps {
  title: string | ReactNode;
  description: string | string[];
  className?: string;
}

const ServiceChallanges = ({ title, description, className = "" }: ServiceIntroProps) => {
  return (
    <section className={`py-5 bg-page`}>
        <div className="mx-auto inner-page-container">
          <h2 className="fs-36 font-semibold my-8">
            {title}
          </h2>
          <div>
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p className="fs-18 text-[#222222] py-4">{description}</p>
            )}
          </div>
        </div>
    </section>
  );
};

export default ServiceChallanges;