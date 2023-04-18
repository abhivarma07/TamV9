import { lazy } from "react";
import { Footer, Navbar } from "../components";
import {
  About,
  Feedback,
  GetStarted,
  Insights,
  WhatsNew,
  World,
} from "../sections";

import Model from "../sections/Hero2";

const Explore = lazy(() => import("../sections/Explore"));
// const About = lazy(() => import("../sections/About"));
// const Feedback = lazy(() => import("../sections/Feedback"));
// const GetStarted = lazy(() => import("../sections/GetStarted"));
// const Insights = lazy(() => import("../sections/Insights"));
// const WhatsNew = lazy(() => import("../sections/WhatsNew"));
// const World = lazy(() => import("../sections/World"));

const Home = () => (
  <div className="bg-primary-black" style={{ overflow: "hidden" }}>
    <Navbar />
    <Model />
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
    <div className="worlds">
      <World />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
