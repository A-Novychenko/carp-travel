import {About} from "@/components/sections/About/About";
import {Career} from "@/components/sections/Career/Career";
import {Contacts} from "@/components/sections/Contacts/Contacts";
import {Gallery} from "@/components/sections/Gallery/Gallery";
import {Hero} from "@/components/sections/Hero/Hero";
import {Services} from "@/components/sections/Services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </main>
  );
}
