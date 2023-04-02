"use client";

import { AnimatePresence, motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { SLIDER_BGS, SLIDER_SRCS, timeline_cards } from "../constants";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

const World = () => {
  // console.log(SLIDER_BGS);

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [containerKey, setContainerKey] = useState(0);
  const id = 1;

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
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Timeline of TAM" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track events and invite your friends to enjoy and learn together
            </>
          }
          textStyles="text-center"
        />

        <AnimatePresence>
          <motion.div
            ref={carousel}
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="relative mt-[68px] flex w-full h-[550px] carousel"
            whileTap={{ cursor: "grabbing" }}
            key={containerKey}
            id={id}
          >
            <motion.div
              className="inner-carousel"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {timeline_cards.map((src, index) => {
                return (
                  <motion.div className="item" key={index}>
                    <div
                      className="absolute bottom-10 p-8 flex justify-start flex-col rounded-b-[24px] "
                      style={{
                        // backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 99,
                      }}
                    >
                      <p className="font-normal text-[12px] leading-[20.16px] text-white">
                        {src.date}
                      </p>
                      <h2 className="mt-[10px] font-semibold sm:text-[22px] text-[20px] text-white">
                        {src.heading}
                      </h2>
                    </div>
                    <img src={src.img} style={{ objectFit: "fill" }} />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default World;
