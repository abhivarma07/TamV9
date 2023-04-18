"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import useWindowDimensions from "../components/windowDimensions";
import TeamCard from "../components/teamCard";

const Hero = () => {
  const { height, width } = useWindowDimensions();

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Technical Awareness Month"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className={`${styles.yPaddings} sm:pl-16 pl-6 no-scrollbar `}
      style={{
        width: "100%",
        height: height,
      }}
    >
      <ParticleBackground />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        // className={`${styles.innerWidth} mx-auto flex flex-col`}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="flex justify-center items-center relative z-10 "
          style={{ display: "flex", flexDirection: "row" }}
        >
          <motion.div
            variants={textVariant(0.5)}
            className="justify-center items-center"
            style={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white" }} className={styles.heroHeading}>
              {"Technical "}
            </h1>
          </motion.div>
          <motion.div
            variants={textVariant(0.8)}
            className="justify-center items-center"
            style={{
              alignItems: "center",
              textAlign: "center",
              marginLeft: 10,
            }}
          >
            <h1 style={{ color: "white" }} className={styles.heroHeading}>
              {" Awareness "}
            </h1>
          </motion.div>
          <motion.div
            variants={textVariant(1.1)}
            className="justify-center items-center"
            style={{
              alignItems: "center",
              textAlign: "center",
              marginLeft: 10,
            }}
          >
            <h1 style={{ color: "white" }} className={styles.heroHeading}>
              {" Month"}
            </h1>
          </motion.div>
        </div>
        <motion.div
          variants={textVariant(2)}
          style={{
            alignItems: "center",
            textAlign: "center",
            alignSelf: "center",
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              height: 400,
              width: 600,
              alignSelf: "center",
            }}
          >
            <img
              src="/eagle_logo.png"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>
      </motion.div>
      {/* <TeamCard /> */}
    </section>
  );
};

export default Hero;
