import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TeamCard from "./teamCard";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const p = [1, 2, 3, 4];

  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scroller}
          className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900  relative h-screen"
        >
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {p.map((item) => {
                return (
                  <div style={{ marginRight: 10 }}>
                    <TeamCard />
                  </div>
                );
              })}
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {p.map((item) => {
                return (
                  <div style={{ marginRight: 10 }}>
                    <TeamCard />
                  </div>
                );
              })}
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {p.map((item) => {
                return (
                  <div style={{ marginRight: 10 }}>
                    <TeamCard />
                  </div>
                );
              })}
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          ></section>
        </div>
      </div>
    </div>
  );
}

export default App;
