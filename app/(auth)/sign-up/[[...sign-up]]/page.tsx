import Footer from "@/components/custom/Footer";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-full flex flex-col items-center justify-evenly">
      <div className="pt-5 flex flex-col">
        <SignUp />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
