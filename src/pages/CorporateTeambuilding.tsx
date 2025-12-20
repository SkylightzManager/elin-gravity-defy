import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import CorporateTeamBuilding from "@/components/CorporateTeamBuilding";

const CorporateTeambuildingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <CorporateTeamBuilding showFullContent={true} />
      </div>
      <AppDownload />
      <Footer />
    </div>
  );
};

export default CorporateTeambuildingPage;
