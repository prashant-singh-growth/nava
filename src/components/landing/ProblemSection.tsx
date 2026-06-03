import { useState } from "react";
import type { LucideIcon } from "lucide-react";

export interface ProblemCard {
  icon: LucideIcon;
  title: string;
  description: string;
  /** One-line "How Vision AI changes this" payoff */
  payoff: string;
}

export interface ProblemGroup {
  label: string;
  /** e.g. "Regulatory & Compliance pressure" */
  heading: string;
  cards: ProblemCard[];
}

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  groups: ProblemGroup[];
}

/**
 * Compact tab-pill driven problem section.
 * Categories collapse into pills; only the active category's cards render,
 * cutting vertical footprint by ~60% vs. the previous stacked layout.
 */
const ProblemSection = ({ eyebrow, title, description, groups }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = groups[activeIdx] ?? groups[0];

  return (
    <section className="industries-service-section-top pb-16 md:pb-24 bg-[#F7FAFE]">
      <div className="inner-page-container mx-auto">
        <div className="md:text-center mb-8">
          <div className="fs-16 font-semibold text-[#3A6CC9] mb-3 uppercase tracking-wider">{eyebrow}</div>
          <h2 className="fs-36 font-semibold mb-4 text-[#000000] md:max-w-3xl md:mx-auto">{title}</h2>
          {description && (
            <p className="fs-18 text-[#222222] md:max-w-3xl md:mx-auto">{description}</p>
          )}
        </div>

        {/* Category pills */}
        <div
          role="tablist"
          aria-label="Problem categories"
          className="flex flex-wrap md:justify-center gap-2 mb-8 -mx-1 px-1 overflow-x-auto"
        >
          {groups.map((g, i) => {
            const isActive = i === activeIdx;
            const cleanLabel = g.label.replace(/^[A-Z]\s*[·•\-]\s*/, "");
            return (
              <button
                key={g.label}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(i)}
                className={`whitespace-nowrap rounded-full fs-14 font-semibold px-5 py-2 transition-colors border ${
                  isActive
                    ? "bg-[#002467] text-white border-[#002467] shadow-sm"
                    : "bg-white text-[#002467] border-[#E6ECF5] hover:bg-[#EEF3FB]"
                }`}
              >
                {cleanLabel}
              </button>
            );
          })}
        </div>

        {active.heading && (
          <p className="fs-16 md:text-center text-[#3A6CC9] font-medium mb-6">{active.heading}</p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {active.cards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="bg-white rounded-2xl border border-[#E6ECF5] shadow-sm flex flex-col h-full overflow-hidden"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-[#FDECEC] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#B42318]" />
                  </div>
                  <h3 className="fs-20 font-semibold text-[#002467] mb-2">{c.title}</h3>
                  <p className="fs-14 text-[#555555] leading-relaxed">{c.description}</p>
                </div>
                <div className="bg-[#0059FF]/5 border-t border-[#0059FF]/10 px-6 py-4">
                  <span className="fs-12 font-bold text-[#0059FF] uppercase tracking-widest block mb-1">
                    The Vision AI Payoff
                  </span>
                  <p className="fs-14 text-[#002467] font-medium">{c.payoff}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
