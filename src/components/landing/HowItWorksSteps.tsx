import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";

export interface HowItWorksStep {
  icon: LucideIcon;
  title: string;
  description: string;
  Preview: () => JSX.Element;
}

interface Props {
  steps: HowItWorksStep[];
  /** Optional emphasis line shown under the steps */
  footerNote?: string;
}

/**
 * Interactive step component modelled on the NAVA Safety Insights
 * landing page — list on the left, mock product preview on the right,
 * auto-advances every 5 seconds and respects manual clicks.
 *
 * Reskinned with NAVA brand tokens (navy + white, deep-blue accents).
 */
const HowItWorksSteps = ({ steps, footerNote }: Props) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % steps.length), 5000);
    return () => clearInterval(t);
  }, [steps.length]);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* LEFT — step list */}
        <ol className="space-y-3">
          {steps.map((step, i) => {
            const isActive = active === i;
            const Icon = step.icon;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-white border-[#3A6CC9] shadow-md"
                      : "bg-[#F7FAFE] border-[#E6ECF5] hover:border-[#3A6CC9]/50"
                  }`}
                  aria-current={isActive ? "step" : undefined}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        isActive ? "bg-[#002467] text-white" : "bg-[#E6ECF5] text-[#002467]"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-5 h-5 ${isActive ? "text-[#3A6CC9]" : "text-[#7C7C7C]"}`} />
                        <h3 className="fs-18 font-semibold text-[#000000]">{step.title}</h3>
                      </div>
                      <p className="fs-16 text-[#444444]">{step.description}</p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>

        {/* RIGHT — sticky product preview */}
        <div className="lg:sticky lg:top-24">
          <div className="rounded-2xl border border-[#E6ECF5] bg-white shadow-md overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#E6ECF5] bg-[#F7FAFE]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-[11px] text-[#7C7C7C] truncate">
                admin.navasoftware.com — NAVA Vision AI Console
              </span>
            </div>
            {steps.map((step, i) => {
              const Preview = step.Preview;
              return (
                <div key={i} className={active === i ? "block" : "hidden"}>
                  <Preview />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {footerNote && (
        <p className="fs-18 text-[#002467] font-semibold text-center mt-10">{footerNote}</p>
      )}
    </div>
  );
};

export default HowItWorksSteps;
