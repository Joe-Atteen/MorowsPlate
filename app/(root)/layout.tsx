import Footer from "@/components/Footer";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
