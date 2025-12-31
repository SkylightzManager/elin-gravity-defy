import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

interface AppDownloadProps {
  className?: string;
  size?: "small" | "default" | "large";
}

const AppDownload = ({ className = "", size = "default" }: AppDownloadProps) => {
  const handleAppStore = () => {
    window.open('https://apps.apple.com/us/developer/elin-dance-studio-pte-ltd/id1750182306', '_blank', 'noopener,noreferrer');
  };

  const handlePlayStore = () => {
    window.open('https://play.google.com/store/apps/developer?id=Elin+Dance+Studio+Pte+Ltd&hl=en_IN', '_blank', 'noopener,noreferrer');
  };

  // Increased sizes by 20%: small: h-10→h-12, default: h-14→h-16, large: h-16→h-20
  const imgHeight = size === "small" ? "h-12" : size === "large" ? "h-20" : "h-16";
  // Increased widths by 20%: small: w-28→w-32, default: w-36→w-44, large: w-44→w-52
  const imgWidth = size === "small" ? "w-32" : size === "large" ? "w-52" : "w-44";

  return (
    <div className={`flex flex-row -space-x-1 ${className}`}>
      <button
        onClick={handleAppStore}
        className="hover:opacity-80 hover:scale-105 transition-all duration-300"
        aria-label="Download on App Store"
      >
        <img src={appStoreBadge} alt="Download on App Store" className={`${imgHeight} ${imgWidth} object-contain`} />
      </button>
      <button
        onClick={handlePlayStore}
        className="hover:opacity-80 hover:scale-105 transition-all duration-300"
        aria-label="Get it on Google Play"
      >
        <img src={googlePlayBadge} alt="Get it on Google Play" className={`${imgHeight} ${imgWidth} object-contain`} />
      </button>
    </div>
  );
};

export default AppDownload;
