"use client";

import React, { useEffect } from "react";

import WorkIcon from "../public/work.svg";
import SchoolIcon from "../public/work.svg";

import timelineElements from "../components/timeline/timelineElements";

import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import ParticleBackground from "../components/ParticleBackground";
import { LaptopFill, PcDisplayHorizontal } from "react-bootstrap-icons";
import useWindowDimensions from "../components/windowDimensions";
import { useState } from "react";

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a24;
  position: fixed;
`;

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

const timeline = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

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
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="single bg-primary-black "
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ paddingTop: "5%" }}
    >
      <div className="gradient-02 z-0" />
      <ParticleBackground position="fixed" />
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div className="model">
              <motion.span className="first" variants={firstName}>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>M</motion.span>
                <motion.span variants={letter}> </motion.span>
                <motion.span variants={letter}>v</motion.span>
                <motion.span variants={letter}>9</motion.span>
                <motion.span variants={letter}> </motion.span>
              </motion.span>
              <motion.span className="last" variants={lastName}>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>e</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#0C0404" }}>
        <VerticalTimeline>
          {timelineElements.map((element, index) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <PcDisplayHorizontal /> : <LaptopFill />}
              >
                {index % 3 === 0 && (
                  <div
                    className="gradient-02 z-0"
                    style={{ zIndex: 0, marginLeft: 120 }}
                  />
                )}
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href={element.link}
                    target="_blank"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default timeline;
