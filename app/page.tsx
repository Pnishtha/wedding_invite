



import Countdown from "@/components/wedding/Countdown";
import CoupleStory from "@/components/wedding/CoupleStory";
import FamilyDetails from "@/components/wedding/FamilyDetails";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import RSVP from "@/components/wedding/RSVP";
import Venue from "@/components/wedding/Venue";
import WeddingAssistant from "@/components/wedding/WeddingAssistant";
import WeddingEvents from "@/components/wedding/WeddingEvents";
import WeddingFooter from "@/components/wedding/WeddingFooter";
import WeddingGallery from "@/components/wedding/WeddingGallery";


import WeddingHero from "@/components/wedding/WeddingHero";
import WeddingNav from "@/components/wedding/WeddingNav";
import WeddingTraditions from "@/components/wedding/WeddingTraditions";
import WhatsAppHelp from "@/components/wedding/WhatsAppHelp";
import WhatsAppShare from "@/components/wedding/WhatsAppShare";
// import CoupleStory from "@/components/wedding/CoupleStory";
// import WeddingEvents from "@/components/wedding/WeddingEvents";
// import Countdown from "@/components/wedding/Countdown";
// import WeddingGallery from "@/components/wedding/WeddingGallery";
// import Venue from "@/components/wedding/Venue";
// import RSVP from "@/components/wedding/RSVP";
// import ThankYou from "@/components/wedding/ThankYou";

export default function Home() {
  return (
    <main>
      <WeddingNav/>
      <WeddingHero />

    <CoupleStory/>
    <FamilyDetails/>
    <WeddingEvents/>
    {/* <WeddingTraditions/> */}
    <Countdown/>
    <WeddingGallery/>
    {/* <MusicPlayer/> */}
    <Venue/>
    <RSVP/>
    <WeddingFooter/>
    {/* <WhatsAppHelp/> */}
    {/* <WhatsAppShare/> */}
    <WeddingAssistant/>
    </main>
  );
}