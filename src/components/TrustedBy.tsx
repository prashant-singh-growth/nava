import { useMemo } from "react";
import noyLogo from "@//assets/logos/noy.webp";
import cloudElementLogo from "@/assets/logos/cloud-elements.webp";
import zymoLogo from "@/assets/logos/zymo.webp";
import afterLogo from "@//assets/logos/after.webp";
import uipathLogo from "@/assets/logos/uipath.webp";
import svgLogo from "@/assets/logos/dcg.svg";
import nexiloLogo from "../assets/logos/nexillo.webp";
import domesticLogo from "../assets/logos/domestic.webp";
import tricitiLogo from "../assets/logos/triciti.webp";

const TrustedBy = () => {
  const clients = useMemo(
    () => [
      { name: "Noy", logo: noyLogo },
      { name: "Cloud Elements", logo: cloudElementLogo },
      { name: "Zymo Research", logo: zymoLogo },
      { name: "After", logo: afterLogo },
      { name: "UiPath", logo: uipathLogo },
      { name: "DCG", logo: svgLogo },
      { name: "Nexillo", logo: nexiloLogo },
      { name: "Domestic & General", logo: domesticLogo },
      { name: "Triciti Bank", logo: tricitiLogo },
    ],
    []
  );

  // Repeat clients twice for seamless looping
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="section-top bg-page">
      <div className="text-center mb-8">
        <h2 className="fs-24 font-medium">Trusted by global businesses</h2>
      </div>

      <div className="line mb-8"></div>

      <div className="overflow-hidden relative">
        <div className="flex gap-20 animate-marquee">
          {repeatedClients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src={client.logo}
                alt={client.name}
                className="marquee-img w-auto object-contain md:!h-[var(--size-55)] !h-[37px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-line mt-8"></div>
    </section>
  );
};

export default TrustedBy;
