import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="max-w-[1400px] mx-auto px-3 sm:px-12 xl:px-12 mb-20">
        <h2 className="uppercase font-gellixBold text-2xl md:text-4xl text-center mb-5">
          Something for every indigenous food lover
        </h2>
        <HomeContent />
      </div>
    </div>
  );
}
