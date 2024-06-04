import HeroSection from "@/components/Home/HeroSection";
import TrendingSelectTab from "@/components/Home/TrendingSelectTab";
import TrendingTab from "@/components/Home/TrendingTab";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="hidden md:block">
        <TrendingTab />
      </div>
      <div className="md:hidden">
        <TrendingSelectTab />
      </div>
    </main>
  );
}
