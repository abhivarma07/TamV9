import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

//Components
import ScrollForMore from "../components/scrollForMore";
import useWindowDimensions from "../components/windowDimensions";
import ParticleBackground from "../components/ParticleBackground";
import TeamCard from "../components/teamCard";
import Crew from "../components/Crew";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
const imageDetails = {
  width: 524,
  height: 650,
};

const App = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const { width, height } = useWindowDimensions();

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <div className="bg-primary-black" style={{ overflow: "hidden" }}>
      <motion.div
        onAnimationComplete={() => setCanScroll(true)}
        className="single"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ParticleBackground position="fixed" />
        <div className="container fluid">
          <div className="row center top-row">
            <div className="top">
              <motion.div className="model">
                <motion.span className="first" variants={firstName}>
                  <motion.span variants={letter}>T</motion.span>
                  <motion.span variants={letter}>A</motion.span>
                  <motion.span variants={letter}>M</motion.span>
                  <motion.span variants={letter}></motion.span>
                  <motion.span variants={letter}>v</motion.span>
                  <motion.span variants={letter}>9</motion.span>
                </motion.span>
                <motion.span className="last" variants={lastName}>
                  <motion.span variants={letter}>C</motion.span>
                  <motion.span variants={letter}>r</motion.span>
                  <motion.span variants={letter}>e</motion.span>
                  <motion.span variants={letter}>w</motion.span>
                </motion.span>
              </motion.div>
            </div>
          </div>
          <div className="row bottom-row">
            <div className="bottom">
              <motion.div className="image-container-single">
                <motion.div
                  initial={{
                    y: "-50%",
                    width: imageDetails.width,
                    height: imageDetails.height,
                  }}
                  animate={{
                    y: 0,
                    width: width > 1440 ? width - 200 : width - 40,
                    height: width > 1440 ? "100%" : "80%",
                    transition: { delay: 0.2, ...transition },
                    borderRadius: 20,
                  }}
                  className="thumbnail-single"
                >
                  <motion.div
                    className="frame-single"
                    whileHover="hover"
                    transition={transition}
                  >
                    <motion.img
                      src={"/team.jpg"}
                      alt="an image"
                      style={{
                        scale: scale,
                        objectFit: "cover",
                      }}
                      initial={{ scale: 1.0 }}
                      animate={{
                        transition: { delay: 0.2, ...transition },
                        //   y: width > 1440 ? width - 200 : width - 40,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <Crew />
    </div>
  );
};

export default App;
