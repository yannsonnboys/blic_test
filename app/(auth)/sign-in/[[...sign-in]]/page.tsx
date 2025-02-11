import Footer from "@/components/custom/Footer";
import Sponsors_Donors from "@/components/custom/Sponsors_Donors";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-full flex flex-wrap items-center justify-evenly">
      <div className="pt-5 flex flex-col">
        <SignIn />
      </div>
      {/* Section Partners & Sponsors */}
      <Sponsors_Donors />
      {/* Footer */}
      <Footer />
    </div>
  );
}
