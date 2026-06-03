import { useLocation } from "react-router-dom";
import googleCloudLogo from "../../../assets/Images/google-cloud.webp";
import awsPartnerLogo from "../../../assets/logos/aws-partner-new-logo.webp";
import SalesforceLogo from "../../../assets/logos/salesforce-new-logo.webp";
import microsoftPartnerLogo from "../../../assets/Images/microsoft.webp";
import databricksLogo from "../../../assets/Images/databricks.webp";
import snowflakeLogo from "../../../assets/Images/snowflake.webp";

const Footer = () => {
  const partners = [
    // { logo: googleCloudLogo, className: "google-cloud-logo" },
    { logo: awsPartnerLogo, className: "aws-logo" },
    { logo: SalesforceLogo, className: "salesforce-logo" },
    // { logo: microsoftPartnerLogo, className: "microsoft-logo" },
    // { logo: databricksLogo, className: "databricks-logo" },
    // { logo: snowflakeLogo, className: "snowflake-logo" },
];


const location = useLocation();
const isHome = location.pathname === "/";


  return (
    <section className={`footer-logo-section ${
      isHome ? "pt-3 pb-2 lg:pt-[var(--size-180)] lg:pb-[var(--size-10)]" : "py-5"
    }`}>
      <div className="flex justify-center items-center gap-6 bottom-0 w-full">
                <div className="partner-logos page-container flex items-center gap-8 justify-center py-7">
                    <span className="fs-18 font-semibold text-[#ededed5d]">OUR PARTNERSHIPS</span>
                    <div className="flex justify-center items-center gap-6 md:gap-7 lg:gap-6 flex-wrap">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3"
                            >
                                <img src={partner.logo}
                                    alt={`${partner.className.replace('-logo', '')} partner logo`}
                                    className={`${partner.className}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </section>
  );
};

export default Footer;
