import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function Home() {
  return (
    <div className="bg-bgcolour w-full"> 
      <Navigation />
      <Hero />
      <MeetTheTeam />
    </div>
  );
}
