import { Card, CardContent } from "@/components/ui/card";

interface FeatureItem {
  id: string;
  title: string;
  description: {text: string}[];
}

interface ServiceApproachGridProps {
  title: string;
  description?: {text: string}[];
  features: FeatureItem[];
  gridCols?: "2x2" | "3x3" | "2x3" | "3x2";
  className?: string;
}

const ServiceApproachGrid = ({ 
  title, 
  description, 
  features, 
  gridCols = "2x2",
  className = ""
}: ServiceApproachGridProps) => {
  const getGridClass = () => {
    switch (gridCols) {
      case "2x2":
        return "md:grid-cols-2";
      case "3x3":
        return "md:grid-cols-3";
      case "2x3":
        return "md:grid-cols-2 lg:grid-cols-3";
      case "3x2":
        return "md:grid-cols-3 lg:grid-cols-2";  
      default:
        return "md:grid-cols-2";
    }
  };

  return (
    <section className={`industries-service-section-top md:pb-[var(--size-20)] pb-[15px] bg-page ${className}`}>
      <div className="bg-[url('assets/Images/pink-blue-gradient-bg.webp')] md:bg-contain md:bg-[position:top_var(--size-35)_center] bg-center bg-cover bg-no-repeat">
        <div className="mx-auto inner-page-container">    
          <div className={`grid gap-8 max-w-6xl mx-auto ${getGridClass()}`}>
            {features.map((feature) => (
              <Card key={feature.id} className="bg-[#ffffff] rounded-3xl border-0">
                <CardContent className="p-5">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-5">
                      <span className="text-[#000000] bg-[#E4E9FC] rounded-3xl px-7 py-6 font-medium fs-24">
                        {feature.id}
                      </span>
                      <h3 className="fs-24 text-[#000000] font-medium w-68">
                        {feature.title}
                      </h3>
                    </div>
                    <div>
                      {/* <p className="fs-18 text-[#222222] max-w-md h-36">
                        {feature.description}
                      </p> */}
                      <ul className="space-y-4 pt-2 pb-7 pl-2">
                        {feature.description.map((item, index) => (
                          <li key={index} className="flex gap-3 items-start">
                            <span className="w-2 h-2 xl:w-[10px] xl:h-[10px] bg-[#0D2F6F] rounded-full flex-shrink-0 lg:mt-[var(--size-7)] mt-[6px]"></span>
                            <span className="fs-18">
                            {item.text}
                        </span>
                        </li>
                        ))}
                      </ul>
                    </div>
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

export default ServiceApproachGrid;