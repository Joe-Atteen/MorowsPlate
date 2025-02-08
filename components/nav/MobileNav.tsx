import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  //   SheetDescription,
  //   SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLinks from "./NavLinks";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/hamburger.svg"
          alt="hamburger"
          width={30}
          height={30}
          priority={true}
          className="invert-colors block xl:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center justify-center gap-1">
          <Image src="/logo-alt.png" width={200} height={0} alt="Logo" />
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between gap-10 overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col items-center gap-8 pt-16 font-bungee text-[1.1rem]">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
