import BannerPic from "@/components/custom/BannerPic";
import Footer from "@/components/custom/Footer";
import Sponsors_Donors from "@/components/custom/Sponsors_Donors";
import Topbar from "@/components/layout/Topbar";
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* To bar */}
      <Topbar />
      {/* Banner */}
      <div className="flex flex-wrap gap-7 justify-center">
        <BannerPic />
      </div>
      {/* Page router */}
      {children}
      {/* Section Partners & Sponsors */}
      <div className="frlx flewrap gap-7 justify-center">
        <Sponsors_Donors />
      </div>
      {/* Footer */}
      <div className="frlx flewrap gap-7 justify-center">
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
