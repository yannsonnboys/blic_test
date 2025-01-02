import BannerPic from "@/components/custom/BannerPic";
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
    </>
  );
};

export default HomeLayout;
