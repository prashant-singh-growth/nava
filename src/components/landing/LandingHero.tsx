import whitearrow from "@/assets/Icons/white-right-arrow.svg";

interface Props {
  heroImage: string;
  eyebrow: string;
  headline: string;
  sub: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

/**
 * Landing-page hero. Uses a full-bleed photo + gradient overlay so the
 * generated industrial imagery stays the focus, while text remains legible.
 */
const LandingHero = ({
  heroImage,
  eyebrow,
  headline,
  sub,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: Props) => {
  return (
    <section className="relative overflow-hidden bg-[#002467]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-90"
          width={1920}
          height={1080}
          // hero is LCP — eager + high priority
          loading="eager"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,36,103,0.70) 0%, rgba(0,36,103,0.45) 45%, rgba(0,36,103,0.10) 100%)",
          }}
        />
      </div>

      <div className="relative page-container py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="fs-16 font-semibold text-[#9DBCFF] uppercase tracking-widest mb-4">{eyebrow}</div>
          <h1 className="fs-56 md:fs-65 font-semibold text-white leading-tight mb-6 relative inline-block">
            {headline}
            <span className="absolute left-0 -bottom-3 md:w-20 md:h-1.5 w-16 h-1 bg-[#0059FF] rounded-full"></span>
          </h1>
          <p className="fs-18 text-white/90 mb-10 max-w-2xl mt-6">{sub}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={primaryHref}
              className="primary-button border border-[#3A6CC9] text-white inline-flex items-center justify-center gap-3 fs-18 py-3 px-5"
            >
              {primaryCta}
              <img src={whitearrow} alt="" />
            </a>
            {secondaryCta && secondaryHref && (
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-3 fs-18 py-3 px-5 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                {secondaryCta}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
