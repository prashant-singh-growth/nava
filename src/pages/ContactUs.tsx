import React from 'react';
import { Check } from "lucide-react";
import TrustedBy from "@/components/TrustedBy";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientContactForm } from "@/components/contact/ClientContactForm";
import { JobSeekerForm } from "@/components/contact/JobSeekerForm";
import Map from "../assets/Images/map.webp";
import MapBg from "../assets/Images/map-bg.webp";
import ContactformBg from "../assets/Images/pink-blue-gradient-bg.webp";
import GreenTick from "../assets/Icons/green-tick.webp";
import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const ContactUs = () => {

   const features = [
    "Quick response – we'll get back to you within 24 hours.",
    "Transparency & trust – NDA available upon request.",
    "Senior leadership involved – you'll always be talking to experts, not trainees."
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-5 py-[var(--size-40)] text-white">
         <div className="page-container mx-auto" id="form-client">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-sm text-[#969696]">
              <span>Home</span> <span className="mx-2">&gt;</span> <span className='text-[#000000]'>Contact Us</span>
            </nav>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:justify-normal contact-form-columns lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-20 items-start mt-12">
            {/* Left Column */}
            <div className='max-w-xl'>
              <div className="mb-6 lg:mt-8">
                <span className="fs-18 text-[#000000] relative inline-block">
                  Contact Us
                  <div className="absolute -bottom-4 left-0 w-[85px] h-[6px] bg-[#0059FF] rounded"></div>
                </span>
              </div>         
              <h1 className="fs-65 mt-4 font-semibold text-[#222222]">
                Get In Touch
              </h1>
              <p className="fs-18 text-[#222222] my-7">
                We're here to help you explore how NAVA Software Solutions can support your digital transformation, 
                product engineering, and operational goals. Whether you have questions about our services, want to 
                discuss a potential project, or simply wish to connect, we'd love to hear from you.
              </p>

              {/* Feature Points */}
              <div className="flex flex-col gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex  gap-5">
                    <div className="flex-shrink-0 mt-0.5">
                    <img src={GreenTick} className="lg:w-[var(--size-29)] lg:h-[var(--size-29)] w-7 h-7 text-accent-blue" alt="Check mark icon" />
                    </div>
                    <p className="fs-18 text-[#222222] mt-0.5">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            

            {/* Right Column - Contact Form with Tabs */}
            <div className="bg-[#ffffff] rounded-3xl -mt-10 relative
                            before:content-[''] before:absolute before:inset-0 
                            before:bg-[url('assets/Images/pink-blue-gradient-bg.webp')] 
                            before:bg-no-repeat before:left-[-8%] before:bg-right before:bg-cover 
                            before:blur-[40px] before:z-[-1]"
                            >

            {/* <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[100%] blur-[10px] contrast-[40%] z-0"
                style={{ backgroundImage: `url(${ContactformBg})` }}
              ></div> */}

              <Tabs defaultValue="client" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-transparent rounded-none border-b p-0 h-auto">
                  <TabsTrigger 
                    value="client" 
                    className="fs-18 data-[state=active]:font-bold font-normal lg:p-[var(--size-25)] p-6 border-none rounded-none rounded-tl-3xl data-[state=active]:bg-[#E8F0FF] data-[state=active]:text-[#00328E] data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#222222] data-[state=inactive]:border-transparent"
                  >
                    For Client
                  </TabsTrigger>
                  <TabsTrigger 
                    value="jobseeker" 
                    className="fs-18 data-[state=active]:font-bold font-normal lg:p-[var(--size-25)] p-6 rounded-none rounded-tr-3xl data-[state=active]:bg-[#E8F0FF] data-[state=active]:text-[#00328E] data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#222222] data-[state=inactive]:border-transparent"
                  >
                    For Jobseekers
                  </TabsTrigger>
                </TabsList>
 
              <div className='lg:p-[var(--size-30)] p-5'>
                <TabsContent value="client">
                  <ClientContactForm />
                </TabsContent>

                <TabsContent value="jobseeker">
                  <JobSeekerForm />
                </TabsContent>
              </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="logos" height={300} />}>
        <TrustedBy />
      </LazySection>

      {/* Our Locations Section */}
      <section className="md:py-[var(--size-30)] py-5">
        <div className="">
          <div className="relative mx-auto"
            style={{
              backgroundImage: `url(${MapBg})`,
              backgroundSize: "85%",       
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat", 
            }}>
          <h2 className="page-container fs-34 font-semibold text-center">
            Our Locations
          </h2>     
            <img src={Map} alt="Global office locations map" className='lg:max-w-[var(--size-1200)] w-full page-container mx-auto md:pt-[var(--size-75)] md:pb-[var(--size-40)] py-5' />
          {/* </div> */}
          </div>

          {/* Location Details */}
          <div className="grid lg:grid-cols-3 gap-0 bg-white lg:rounded-3xl rounded-3xl inner-page-container mx-auto">
            {/* Head Office */}
            <div className="p-8 lg:border-r lg:border-b-0 border-b border-gray-200">
              <h3 className="fs-24 text-[#000000] font-medium">Head Office</h3>
              <p className="fs-18 mt-4">
                NAVA Software Solutions<br />
                Southway Executive Park<br />
                35 Cold Spring Road, Suite 125<br />
                Rocky Hill, CT 06067
              </p>
            </div>

            {/* Other Locations */}
            <div className="p-8 lg:border-r border-gray-200">
              <h3 className="fs-24 text-[#000000] font-medium">Other Locations</h3>
              <p className="fs-18 mt-4">
                Hyderabad, India<br />
                Guadalajara, Mexico
              </p>
            </div>

            {/* Contact Info */}
            <div className="p-8 bg-[linear-gradient(120deg,#007FFF,#00FF93)] lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-b-none rounded-b-3xl">
              <h3 className="fs-24 text-[#ffffff] font-medium">Contact Us</h3>
              <div className="fs-18 mt-4 text-[#ffffff]">
                <p>E: ai@navasoftware.com</p>
                <p>P: +1 860 615 9008</p>
                <p>F: +1 866 678 6282</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
