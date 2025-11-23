import { Apple, PlaySquare } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

interface AppDownloadProps {
  className?: string;
}

const AppDownload = ({ className = "" }: AppDownloadProps) => {
  const handleAppStore = () => {
    window.open('https://apps.apple.com/us/developer/elin-dance-studio-pte-ltd/id1750182306', '_blank', 'noopener,noreferrer');
  };

  const handlePlayStore = () => {
    window.open('https://play.google.com/store/apps/developer?id=Elin+Dance+Studio+Pte+Ltd&hl=en_IN', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <button
        onClick={handleAppStore}
        className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors"
        aria-label="Download on App Store"
      >
        <Apple className="w-8 h-8" />
        <div className="text-left">
          <div className="text-xs">Download on the</div>
          <div className="text-lg font-semibold">App Store</div>
        </div>
      </button>
      <button
        onClick={handlePlayStore}
        className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors"
        aria-label="Get it on Google Play"
      >
        <PlaySquare className="w-8 h-8" />
        <div className="text-left">
          <div className="text-xs">GET IT ON</div>
          <div className="text-lg font-semibold">Google Play</div>
        </div>
      </button>
    </div>
  );
};

export default AppDownload;
