import Footer from "@/components/Footer";
import { ReactNode } from "react";
import Navbar from "@/components/nav/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
