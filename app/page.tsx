import HeroLuxury from "@/components/sections/HeroLuxury";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import BrandPhilosophy from "@/components/sections/BrandPhilosophy"
import Marquee from "@/components/sections/Marquee";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Trust from "@/components/sections/Trust";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";




import Projects from "@/components/sections/Projects";
// import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";
import Stats from "@/components/sections/Stats";
import Instagram from "@/components/sections/Instagram";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <HeroLuxury />
      <BrandPhilosophy/>
      <Marquee />
      <WhoWeAre/>
        <Process />
        <FeaturedProjects />
        <Trust/>
        <CTA/>
        <Footer/>
{/* <FeaturedProjects />
       
      <Projects />
      <About />
      <Services />
      <Process />
      <Testimonial />
      <Stats />
      <Instagram />
      <Contact />
      <Footer /> */}
    </main>
  );
}