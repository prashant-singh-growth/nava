import LandingLeadForm from "./LandingLeadForm";

interface Props {
  id?: string;
  landingPage: "industrial-safety" | "dock-operations";
  title: string;
  description: string;
  ctaLabel?: string;
}

const LeadCaptureSection = ({ id = "request-demo", landingPage, title, description, ctaLabel }: Props) => {
  return (
    <section id={id} className="industries-service-section-top pb-16 md:pb-24 bg-[#F7FAFE] scroll-mt-24">
      <div className="inner-page-container mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="fs-36 font-semibold mb-4 text-[#000000]">{title}</h2>
            <p className="fs-18 text-[#222222] mb-6">{description}</p>
            <ul className="space-y-3 fs-16 text-[#444444]">
              {[
                "Response from a NAVA Vision AI specialist within 1 business day",
                "Walkthrough on your own CCTV footage if you can share it",
                "No hardware, no rip-and-replace — works with the cameras you already own",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3A6CC9] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-10 border border-[#E6ECF5]">
            <LandingLeadForm landingPage={landingPage} ctaLabel={ctaLabel} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
