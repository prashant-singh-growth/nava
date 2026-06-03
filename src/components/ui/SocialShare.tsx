import twitter from "../../assets/Icons/twitter.webp";
import linkedin from "../../assets/Icons/linkedin.webp";
import facebook from "../../assets/Icons/facebook.webp";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = description ? encodeURIComponent(description) : "";

  const handleShare = (platform: "twitter" | "linkedin" | "facebook") => {
    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-4 my-9">
      <span className="fs-18">Share:</span>
      {/* <div className="flex gap-4">
        <button 
          onClick={() => handleShare('twitter')}
          className="p-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-lg transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} />
        </button>
        <button 
          onClick={() => handleShare('linkedin')}
          className="p-2 bg-[#0077B5] hover:bg-[#006097] text-white rounded-lg transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </button>
        <button 
          onClick={() => handleShare('facebook')}
          className="p-2 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-lg transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} />
        </button>
      </div> */}

      <div className="flex gap-3 z-10">
        <a
          onClick={() => handleShare("twitter")}
          className="p-3 lg:w-8 lg:h-8 xl:w-11 xl:h-11 flex items-center bg-[#1B1E5A] justify-center rounded-xl cursor-pointer"
        >
          <img src={twitter} className="footer-social-icons flex items-center" alt="Share on Twitter" />
        </a>
        <a
          onClick={() => handleShare("linkedin")}
          className="p-3 lg:w-8 lg:h-8 xl:w-11 xl:h-11 flex items-center bg-[#1B1E5A] justify-center rounded-xl cursor-pointer"
        >
          <img src={linkedin} className="footer-social-icons flex items-center" alt="Share on LinkedIn" />
        </a>
        <a
          onClick={() => handleShare("facebook")}
          className="p-3 lg:w-8 lg:h-8 xl:w-11 xl:h-11 flex items-center justify-center bg-[#1B1E5A] rounded-xl cursor-pointer"
        >
          <img src={facebook} className="footer-social-icons flex items-center" alt="Share on Facebook" />
        </a>
      </div>

      {/* <div className="flex gap-3 z-10">
        <a
          href="https://x.com/navasoftware?s=11&t=2SpMVaok8GuCjEk4INxjig"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 lg:w-8 lg:h-8 xl:w-11 xl:h-11 flex items-center bg-[#1B1E5A] justify-center rounded-xl"
        >
          <img src={twitter} className="footer-social-icons flex items-center" alt="logo-image" />
        </a>
        <a
          href="https://www.linkedin.com/company/nava-software-solutions/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 lg:w-8 lg:h-8 xl:w-11 xl:h-11 flex items-center bg-[#1B1E5A] justify-center rounded-xl"
        >
          <img src={linkedin} className="footer-social-icons flex items-center" alt="logo-image" />
        </a>
        <a
          href="https://www.facebook.com/navasoftsol"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 lg:w-8 lg:h-8 xl:w-11 xl:h-11 flex items-center justify-center bg-[#1B1E5A] rounded-xl"
        >
          <img src={facebook} className="footer-social-icons flex items-center" alt="logo-image" />
        </a>
      </div> */}
    </div>
  );
};

export default SocialShare;
