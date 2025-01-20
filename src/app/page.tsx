import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import MeetTheTeam from "@/components/MeetTheTeam";
import OurServices from "@/components/OurServices";
import ClientsWeSee from "@/components/ClientsWeSee"
import Logos from "@/components/Logos"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="bg-bgcolour w-full"> 
      <Navigation />
      <Hero />
      <MeetTheTeam />
      <OurServices />
      <Logos />
      <Footer />
    </div>
  );
}
