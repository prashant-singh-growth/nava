import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureItem {
  id: string;
  title: string | ReactNode;
  description: string;
  isdescription? : boolean;
  isBold?:boolean;
  icon?: LucideIcon;
}

interface ServiceFeatureGridProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  features: FeatureItem[];
  gridCols?: "2x2" | "3x3" | "2x3" | "3x2";
  className?: string;
  isdescription?:boolean;
  isBold?:boolean;
  isTitleSemiBold?:boolean;
}

const ServiceFeatureGrid = ({ 
  title, 
  description, 
  features, 
  gridCols = "2x2",
  className = "", 
  isdescription = true,
  isBold = false,
  isTitleSemiBold = false
}: ServiceFeatureGridProps) => {
  const getGridClass = () => {
    switch (gridCols) {
      case "2x2":
        return "md:grid-cols-2";
      case "3x3":
        return "md:grid-cols-3";
      case "2x3":
        return "md:grid-cols-2 lg:grid-cols-3";
      // case "3x2":
      //   return "md:grid-cols-3 lg:grid-cols-2";  
      default:
        return "md:grid-cols-2";
    }
  };

  return (       

    <section className={`industries-service-section-top bg-page ${className}`}>
      <div className="bg-[url('assets/Images/pink-blue-gradient-bg.webp')] md:bg-contain md:bg-[position:top_center] bg-[position:center] bg-cover bg-no-repeat">
      {title &&
       <div className="mx-auto inner-page-container">      
          <h2 className="fs-36 font-semibold mb-[var(--size-8)] text-[#000000]">
            {title}
          </h2>
          <div>
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              isBold ? 
              <p className="fs-24 font-semibold text-[#222222] md:pb-[var(--size-20)] pb-[15px]">{description}</p>
              :  
              <p className="fs-18 text-[#222222] md:pb-[var(--size-20)] pb-[15px]">{description}</p>
            )}
          </div>
        </div>
        }

      <div className="mx-auto inner-page-container">    
        <div className={`grid gap-8 ${getGridClass()}`}>
          {features.map((feature) => (
            <Card key={feature.id} className="bg-[#ffffff] rounded-3xl border-0">
              <CardContent className="p-7">
                <div className="flex flex-col items-start gap-4">
                  {feature.icon && (
                    <div className="w-12 h-12 rounded-full bg-[#019dfe]/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#019dfe]" />
                    </div>
                  )}
                  <div className="">
                    <span className="text-[#00000088] font-medium fs-24">
                      {feature.id}
                    </span>
                    {isTitleSemiBold ?
                    <h3 className="fs-24 mt-3">
                       <div dangerouslySetInnerHTML={{ __html: feature.title }} ></div>
                    </h3>
                    :
                    <h3 className="fs-24 font-medium mt-3">
                      {feature.title}
                    </h3>
                    }
                  </div>
                  { isdescription &&
                  <div>
                    <p className="fs-18 text-[#222222] max-w-md h-auto">
                      {feature.description}
                    </p>
                  </div>
                  }
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default ServiceFeatureGrid;