import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GreenTick from "../../assets/Icons/green-tick.webp";

interface WhyChooseFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IndustriesWhyChooseProps {
  title: string;
  subtitle: string;
  features: WhyChooseFeature[];
  backgroundImage?: {
    desktop: string;
    mobile: string;
  };
  backgroundColor?: string;
}

const IndustriesWhyChoose = ({
  title,
  subtitle,
  features,
  backgroundImage,
}: IndustriesWhyChooseProps) => {
  return (
    <section className="md:py-[var(--size-30)] py-10 relative overflow-hidden">
      {/* Background image (desktop) */}
      {backgroundImage?.desktop && (
        <div
          className="absolute inset-0 why-choose-subfooter-desktop"
          style={{
            backgroundImage: `url(${backgroundImage.desktop})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Background image (mobile) */}
      {backgroundImage?.mobile && (
        <div
          className="absolute inset-0 why-choose-subfooter-mobile"
          style={{
            backgroundImage: `url(${backgroundImage.mobile})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <div className="w-[50%] mx-auto relative why-choose-nava-card-content
                max-[1024px]:!container max-[1024px]:!left-0">
        <h2 className="fs-36 font-semibold text-[#FFFFFF] mb-6 text-center">
          {title}
        </h2>
        <p className="text-center fs-18 text-[#FFFFFF] mb-6">{subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white rounded-3xl shadow-card border-0"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex-shrink-0">
                      <img src={GreenTick} className="w-10 h-10 text-accent-blue" alt="Check mark icon" />
                    </div>
                    <div>
                      <h3 className="fs-24 font-medium text-[#000000] mb-3 w-full md:w-full sm:w-full">
                        {feature.title}
                      </h3>
                      <p className="text-[#000000] fs-18">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWhyChoose;
