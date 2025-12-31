import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CorporateTeamBuilding from "@/components/CorporateTeamBuilding";

const CorporateTeambuildingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <CorporateTeamBuilding showFullContent={true} />
      </div>
      <Footer />
    </div>
  );
};

export default CorporateTeambuildingPage;
