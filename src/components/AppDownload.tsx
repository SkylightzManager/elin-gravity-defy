import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

interface AppDownloadProps {
  className?: string;
  size?: "small" | "default";
}

const AppDownload = ({ className = "", size = "default" }: AppDownloadProps) => {
  const handleAppStore = () => {
    window.open('https://apps.apple.com/us/developer/elin-dance-studio-pte-ltd/id1750182306', '_blank', 'noopener,noreferrer');
  };

  const handlePlayStore = () => {
    window.open('https://play.google.com/store/apps/developer?id=Elin+Dance+Studio+Pte+Ltd&hl=en_IN', '_blank', 'noopener,noreferrer');
  };

  const imgHeight = size === "small" ? "h-8" : "h-12";

  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      <button
        onClick={handleAppStore}
        className="hover:opacity-80 transition-opacity"
        aria-label="Download on App Store"
      >
        <img src={appStoreBadge} alt="Download on App Store" className={`${imgHeight} w-auto`} />
      </button>
      <button
        onClick={handlePlayStore}
        className="hover:opacity-80 transition-opacity"
        aria-label="Get it on Google Play"
      >
        <img src={googlePlayBadge} alt="Get it on Google Play" className={`${imgHeight} w-auto`} />
      </button>
    </div>
  );
};

export default AppDownload;
