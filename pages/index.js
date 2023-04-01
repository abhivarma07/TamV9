import { Footer, Navbar } from "../components";
import ParticleBackground from "../components/ParticleBackground";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  ThreeHero,
  WhatsNew,
  World,
} from "../sections";
import { Banner } from "../sections/Banner";
import Model from "../sections/Hero2";

const Home = () => (
  <div className="bg-primary-black" style={{ overflow: "hidden" }}>
    <Navbar />
    <Model />
    {/* <Banner /> */}
    {/* <div>
      <Hero />
    </div> */}
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
