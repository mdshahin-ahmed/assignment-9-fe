import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import BloodDonor from "@/components/UI/HomePage/BloodDonor/BloodDonor";
import CoverageArea from "@/components/UI/HomePage/CoverageArea/CoverageArea";
import WhoCanDonate from "@/components/UI/HomePage/WhoCanDonate/WhoCanDonate";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <BloodDonor />
      <CoverageArea />
      <WhoCanDonate />
    </>
  );
};

export default HomePage;
