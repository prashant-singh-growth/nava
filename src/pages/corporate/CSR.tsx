import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import csrBanner from "../../assets/Images/csr-banner.webp";
import csrEducation from "../../assets/Images/csr-img1.webp";
import csrScholarshipBg from "../../assets/Images/csr-sub-footer.webp";
import { ArrowRight, ChevronRight } from "lucide-react";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";

const CSR = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-no-repeat lg:bg-center md:bg-[75%] bg-[72%] flex" style={{ backgroundImage: `url(${csrBanner})` }}>
        <div className="page-container pt-24 md:pt-0">
          {/* Breadcrumb */}
          <div className="py-7 hidden md:flex">
            <nav className="flex items-center text-sm">
            <button
                    onClick={() => navigate("/")}
                    className="text-[#969696] hover:text-white"
              >Home
              </button>
              <ChevronRight className="w-4 h-4 text-[#969696]" />
              <span className="text-[#969696] font-medium">Corporate</span>
              <ChevronRight className="w-4 h-4 text-[#969696]" />
              <span className="text-[#ffffff] font-medium">CSR</span>
            </nav>
          </div>

          {/* Overline */}
          <div className="mx-auto py-6">
            <p className="relative fs-18 text-[#ffffff] mb-4 inline-block">
              CSR
              <span className="absolute left-0 bottom-[-20px] w-20 h-1.5 bg-[#0059FF] rounded-full"></span>
            </p>
          </div>

          {/* Title */}
          <h1 className="fs-65 font-semibold text-white mb-10  max-w-5xl">
            Committed to Communities, Focused on Impact
          </h1>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/contact-us")}
            className="primary-button mb-16 border border-[#3A6CC9] text-[#ffffff] items-center gap-3 xl:gap-8 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-4 hidden md:flex"
          >
            Get in touch
            <img src={whitearrow} alt="service-arrow-icon" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-top pb-[var(--size-60)]">
        {/* <div className="mx-auto"> */}
        <div className="mx-auto inner-page-container">
          <h2 className="fs-34 font-semibold text-[#222222] mb-[var(--size-10)]">Corporate Social Responsibility</h2>
          <p className="fs-18 text-[#222222] ">
            At NAVA Software Solutions, we believe in making a difference not only through the work we do but also by
            giving back to our communities. Our commitment to corporate social responsibility (CSR) reflects our core
            values of compassion, integrity, and community engagement. We strive to create positive, lasting impacts by
            supporting education, empowering young minds, and contributing to a brighter future for the communities we
            serve.
          </p>
        </div>

        {/* Image with Overlapping Card */}
        <div className="relative section-top mr-ml-20 lg:-mb-0 -mb-20">
          <div className="w-full page-container overflow-hidden csr-edu-card-img">
            {/* <img src={csrEducation}
              alt="Students in classroom"
              className="w-full h-full object-cover csr-edu-img md:rounded-3xl rounded-none" /> */}
            <div
            className="w-full lg:h-[var(--size-490)] h-[300px] bg-[72%] bg-no-repeat bg-cover md:rounded-3xl rounded-none"
            style={{ backgroundImage: `url(${csrEducation})` }}
          ></div>

          </div>

          {/* Overlapping Card */}
          <div className="inner-page-container mx-auto relative lg:-mt-28 !md:-pt-20 lg:top-0 -top-20">
            <div className="bg-[linear-gradient(180deg,#e8eaec,#ffffff)] rounded-3xl shadow-lg py-8 lg:py-8 xl:py-10 px-5 lg:px-10">
              <div>
                <h3 className="fs-34 font-semibold text-[#000000] mb-3 md:mb-4 lg:mb-6 xl:mb-8">
                  Supporting Education and Empowering Youth
                </h3>
                <p className="fs-18 text-[#000000] mb-6">
                  Education is the foundation for a better tomorrow, and we are dedicated to ensuring that every child
                  has access to learning opportunities that help them thrive. Through our CSR initiatives, we work
                  closely with schools to address their needs, provide essential resources, and create an environment
                  that nurtures growth and learning. From funding classroom materials to sponsoring extracurricular
                  programs, we aim to support schools in creating a holistic and inclusive learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Cards Section */}
        <div className="pt-12 md:pb-0 pb-12 csr-edu-card relative">
          <div className="inner-page-container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Dark Blue Card */}
              <div className="bg-[#305ba5] rounded-3xl py-14 px-6 text-[#ffffff]">
                <h3 className="fs-34 font-semibold mb-6 text-start">Together for a Better Tomorrow</h3>
                <p className="fs-18">
                  We invite you to join us in our mission to empower young minds and strengthen communities. At NAVA, we
                  are dedicated to making a positive difference, one child and one classroom at a time. Together, we can
                  build a future where every child has the opportunity to learn, grow, and succeed.
                </p>
              </div>

              {/* Violet Card */}
              <div className="bg-[#3345a5] rounded-3xl py-14 px-6 text-[#ffffff]">
                <h3 className="fs-34 font-semibold mb-6 text-start">Our Commitment to Social Impact</h3>
                <p className="fs-18">
                  Our CSR initiatives are rooted in a commitment to create meaningful change. We believe that by
                  investing in education, we're investing in the future of our communities. Through ongoing support,
                  partnerships with local schools, and student funding programs, we are proud to contribute to a more
                  equitable and inclusive society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section with Background */}
      <section
        className="relative bg-cover lg:bg-center md:bg-[70%] bg-[82%] bg-no-repeat lg:py-20 py-10 md:h-auto h-[250px]"
        style={{ backgroundImage: `url(${csrScholarshipBg})` }}
      >
        <div className="relative z-10 inner-page-container mx-auto md:flex hidden">
          <div className="flex items-center">
            {/* Card on Left Side */}
            <div className="w-full md:w-[450px] lg:w-[var(--size-550)] relative">
              <div className="bg-[#1d1d1e94] rounded-3xl px-5 py-10">
                <h3 className="fs-36 font-semibold text-[#ffffff] mb-6">Funding Futures: Scholarships for Students</h3>
                <p className="fs-18 text-[#ffffff] pr-6">
                  At NAVA, we recognize that financial barriers should never stand in the way of a child's education. We
                  provide scholarships and financial aid to underprivileged students, empowering them to pursue their
                  dreams and excel in their studies. By easing the financial burden on families, we help young learners
                  access quality education, build essential skills, and unlock their potential to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-10 flex md:hidden w-full">
        <div className="flex items-center">
          {/* Card on Left Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-[#3a3b3c] px-5 py-10">
              <h3 className="fs-36 font-semibold text-[#ffffff] mb-6">Funding Futures: Scholarships for Students</h3>
              <p className="fs-18 text-[#ffffff] pr-6">
                At NAVA, we recognize that financial barriers should never stand in the way of a child's education. We
                provide scholarships and financial aid to underprivileged students, empowering them to pursue their
                dreams and excel in their studies. By easing the financial burden on families, we help young learners
                access quality education, build essential skills, and unlock their potential to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CSR;
