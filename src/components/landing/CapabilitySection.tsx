import type { LucideIcon } from "lucide-react";

export interface CapabilityItem {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Optional image (kept for back-compat; not rendered in compact bento layout) */
  image?: string;
  imageAlt?: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  items: CapabilityItem[];
}

/**
 * Compact bento layout: sticky left header (4/12) + dense capability bento (8/12).
 * The final item is promoted to a full-width dark accent card to anchor the grid.
 */
const CapabilitySection = ({ eyebrow, title, description, items }: Props) => {
  const head = items.slice(0, -1);
  const featured = items[items.length - 1];
  const FeaturedIcon = featured?.icon;

  return (
    <section className="industries-service-section-top pb-16 md:pb-24 bg-white">
      <div className="inner-page-container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            {eyebrow && (
              <div className="fs-14 font-bold text-[#0059FF] mb-3 uppercase tracking-widest">{eyebrow}</div>
            )}
            <h2 className="fs-32 font-semibold text-[#002467] leading-tight">{title}</h2>
            {description && <p className="fs-16 text-[#444444] mt-4">{description}</p>}
          </div>

          {/* Right bento */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {head.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="p-4 bg-[#F7FAFE] rounded-xl border border-[#E6ECF5] hover:border-[#0059FF]/40 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E6ECF5] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-[#0059FF]" />
                  </div>
                  <h3 className="fs-14 font-bold text-[#002467] mb-1 leading-snug">{c.title}</h3>
                  <p className="fs-12 text-[#555555] leading-snug">{c.description}</p>
                </article>
              );
            })}

            {featured && FeaturedIcon && (
              <article className="sm:col-span-2 md:col-span-3 p-5 bg-[#002467] rounded-xl text-white flex items-start gap-4">
                <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FeaturedIcon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="fs-16 font-bold mb-1">{featured.title}</h3>
                  <p className="fs-13 text-white/75 leading-relaxed">{featured.description}</p>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitySection;
