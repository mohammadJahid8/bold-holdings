import Banner from "@/components/global/banner";
import Challenges from "@/components/global/challanges";
import Clients from "@/components/global/clients";
import Footer from "@/components/global/footer";

import Global from "@/components/global/global";
import Header from "@/components/global/header";
import Helped from "@/components/global/helped";
import How from "@/components/global/how";
import Lenis from "@/components/global/lenis";
import Mission from "@/components/global/mission";
import Portfolio from "@/components/global/portfolio";
import Team from "@/components/global/team";
import DottedWave from "@/components/global/wave";

export default function Home() {
  return (
    <Lenis>
      <Header />

      <div className="bg-primary text-secondary-foreground pt-20 md:pt-52 px-4 md:px-12 relative overflow-hidden">
        <div className="border-t border-[rgba(254,_249,_239,_.3)] pt-6 md:pb-32">
          <Banner />
        </div>
        <div className="w-full md:absolute bottom-0">
          <DottedWave />
        </div>
      </div>

      <Mission />
      <Challenges />
      <Helped />
      <How />
      <Global />
      <Clients />
      <Portfolio />
      <Team />
      <Footer />
    </Lenis>
  );
}
