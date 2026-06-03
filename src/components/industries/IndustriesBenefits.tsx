import { Card, CardContent } from "@/components/ui/card";

interface Benefit {
  title: string;
  description: string;
  image : string;
}

interface IndustriesBenefitsProps {
  title: string;
  description: string;
  benefits: Benefit[];
}

const IndustriesBenefits = ({ title, description, benefits }: IndustriesBenefitsProps) => {
  return (
    <section className="industries-service-section-top">
      <div className="bg-[url('assets/Images/pink-blue-gradient-bg.webp')] md:bg-contain md:bg-[position:top_center] bg-[position:center] bg-cover bg-no-repeat">
      <div className="inner-page-container mx-auto ">
        <div className="mx-auto mb-[var(--size-35)]">
          <h2 className="fs-36 font-semibold text-[#222222] mb-[var(--size-10)]">
            {title}
          </h2>
          <p className="text-[#222222] fs-18">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 relative flex-col">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white rounded-3xl shadow-card border-0">
              <CardContent className="p-0 pl-6 pr-2 py-8 text-center">
                <img src={benefit.image} className="mb-0" alt={`${benefit.title} icon`} />
                <h3 className="fs-24 font-medium mt-4 mb-4 md:mt-5 md:mb-4 lg:mt-6 lg:mb-5 xl:mt-8 xl:mb-4 lg:h-8 xl:h-10 text-start">
                  {benefit.title}
                </h3>
                <p className="fs-18 text-start pr-12 lg:h-16 xl:h-20">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default IndustriesBenefits;