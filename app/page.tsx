import AnimatedBackground from "@/sections/AnimatedBackground";
import { HomePage } from "./HomePage";
import AboutPage from "../sections/about";
import SkillPage from "../sections/skill";
import FeaturedProjects from "../sections/featuredProjects";
import WorkExperience from "../sections/workExperience";
import GetInTouch from "../sections/getInTouch";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      <AnimatedBackground />
      <HomePage/>
      <AboutPage/>
      <SkillPage/>
      <FeaturedProjects/>
      <WorkExperience/>
      <GetInTouch/>
      <Footer/>
      {/* Your existing sections */}
      {/* <HeroSection />
      <FeatureSection />
      <CardStackSection /> */}

    </main>
  );
}