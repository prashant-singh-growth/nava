import safetyculture from "@/assets/logos/ehs/safetyculture.png";
import intelex from "@/assets/logos/ehs/intelex.png";
import velocityehs from "@/assets/logos/ehs/velocityehs.png";
import cority from "@/assets/logos/ehs/cority.png";
import ehsInsight from "@/assets/logos/ehs/ehs-insight.png";
import enablon from "@/assets/logos/ehs/enablon.png";
import sphera from "@/assets/logos/ehs/sphera.png";
import evotix from "@/assets/logos/ehs/evotix.png";
import sapEhs from "@/assets/logos/ehs/sap-ehs.png";
import origami from "@/assets/logos/ehs/origami-risk.png";
import kpa from "@/assets/logos/ehs/kpa-ehs.png";
import benchmark from "@/assets/logos/ehs/benchmark-gensuite.png";

interface Platform {
  name: string;
  logo: string;
}

const EHS_PLATFORMS: Platform[] = [
  { name: "SafetyCulture", logo: safetyculture },
  { name: "Intelex", logo: intelex },
  { name: "VelocityEHS", logo: velocityehs },
  { name: "Cority", logo: cority },
  { name: "EHS Insight", logo: ehsInsight },
  { name: "Enablon", logo: enablon },
  { name: "Sphera", logo: sphera },
  { name: "Evotix", logo: evotix },
  { name: "SAP EHS", logo: sapEhs },
  { name: "Origami Risk", logo: origami },
  { name: "KPA EHS", logo: kpa },
  { name: "Benchmark Gensuite", logo: benchmark },
];

const WMS_YMS_PLATFORMS: Platform[] = [
  { name: "SAP EWM", logo: sapEhs },
  // Reuse the existing logo set as visual stand-ins; WMS/YMS section
  // emphasises the integration story rather than specific vendor logos.
];

interface Props {
  variant?: "ehs" | "wms";
  title?: string;
  subtitle?: string;
}

const EhsPlatformGrid = ({
  variant = "ehs",
  title = "Connect the EHS, compliance & ERP systems you already use",
  subtitle = "We push incidents, evidence, and corrective actions directly into your existing platform — your team keeps working in the tools they already trust.",
}: Props) => {
  const platforms = variant === "wms" ? WMS_YMS_PLATFORMS : EHS_PLATFORMS;

  return (
    <section className="industries-service-section-top pb-16 md:pb-24 bg-page">
      <div className="inner-page-container mx-auto">
        <div className="md:text-center">
          <h2 className="fs-36 font-semibold mb-3 text-[#000000]">{title}</h2>
          <p className="fs-18 text-[#222222] md:max-w-3xl md:mx-auto mb-10">{subtitle}</p>
        </div>

        {variant === "ehs" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center text-center border border-[#E6ECF5] hover:border-[#3A6CC9] transition-colors"
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain mb-3"
                />
                <span className="fs-16 text-[#222222] font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E6ECF5]">
            <p className="fs-18 text-[#222222] mb-6 md:text-center">
              Push dock and trailer events directly into your <strong>WMS, YMS, TMS or ERP</strong>:
            </p>
            <div className="flex flex-wrap gap-3 md:justify-center">
              {[
                "SAP EWM / TM",
                "Oracle WMS",
                "Manhattan Active",
                "Blue Yonder",
                "Körber",
                "HighJump",
                "Microsoft Dynamics",
                "Custom REST / Webhooks",
              ].map((label) => (
                <span
                  key={label}
                  className="fs-16 px-4 py-2 rounded-full bg-[#F1F5FB] text-[#002467] font-medium border border-[#E6ECF5]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EhsPlatformGrid;
