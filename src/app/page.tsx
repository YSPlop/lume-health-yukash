import Hero from "@/components/Hero";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function Home() {
  return (
    <div className="bg-bgcolour"> 
      <Navigation />
      <Hero />
      <MeetTheTeam />
    </div>
  );
}
