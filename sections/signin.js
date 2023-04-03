// import "../css/slider.css"

import { AnimatePresence, motion, useDragControls } from "framer-motion";
import ImageSlider from "../components/Slider/index.js";
import TeamCard from "../components/teamCard.jsx";
import { fadeIn, staggerContainer } from "../utils/motion.js";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import styles from "../styles/index.js";
import { TitleText, TypingText } from "../components/CustomTexts.jsx";
import { timeline_cards } from "../constants/index.js";

const Signin = ({ data, autoplay, heading, headingdesc }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [containerKey, setContainerKey] = useState(0);
  const id = 1;

  const controls = useDragControls();

  function startDrag(event) {
    controls.start(event);
  }

  const [leftContraint, setLeftConstraint] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleLeftConstraint = useCallback(() => {
    const el = document.getElementById(id);
    if (el) {
      setLeftConstraint(el.scrollWidth - el.offsetWidth);
    }
  }, [id]);

  // set key and left constraint on resize
  useEffect(() => {
    const handleResize = () => {
      setContainerKey((prev) => prev + 1);
      handleLeftConstraint();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleLeftConstraint]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
      style={{ marginTop: 100 }}
    >
      <TypingText title={`| ${heading}`} textStyles="text-center" />
      <TitleText title={<>{`${headingdesc}`}</>} textStyles="text-center" />

      <AnimatePresence>
        <motion.div
          ref={carousel}
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative flex w-full h-[550px] carousel"
          whileTap={{ cursor: "grabbing" }}
          key={containerKey}
          id={id}
          style={{ marginTop: 20 }}
        >
          <motion.div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragControls={controls}
          >
            {data.map((src, index) => {
              return (
                <motion.div className="item" key={index}>
                  <img src={src.img} style={{ objectFit: "fill" }} />
                  <div className=" bottom-5 p-8 flex justify-start w-full flex-col rounded-b-[24px] ">
                    <p className="font-normal text-[16px] leading-[20.16px] text-white">
                      {src.role}
                    </p>
                    <h2 className="mt-[3px] font-semibold text-[24px] text-white">
                      {src.name}
                    </h2>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Signin;
