import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import OurServices from "@/components/OurServices";
import Logos from "@/components/Logos"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="bg-bgcolour w-full"> 
      <Hero />
      <MeetTheTeam />
      <OurServices />
      <Logos />
      <Footer />
    </div>
  );
}
