import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import InstructorComponent from "@/components/InstructorComponents";
import MovingCardsComponent from "@/components/MovingCardsComponent";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MovingCardsComponent />
      <UpComingWebinars />
      <InstructorComponent />
    </main>
  );
}
