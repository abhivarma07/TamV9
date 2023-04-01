"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newFeatures } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
        exit={{ x: -1000 }}
      >
        <TypingText title="| Faculty Advisor" />
        <TitleText title={<>E.Sowmya</>} />
        <div className="mt-[31px] flex flex-col max-w-[4000px] gap-[24px]">
          <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
            {
              "Every great organization has a great team and every great teams need a great Advisor. We as a crew at TAM have made it a point to ensure that every event is filled with a great deal of success, in addition to ensuring every participant is able to be served with equal priority. From planning the events to marketing, to making our website, we make sure that we are meeting the needs of every participant."
            }
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div style={{ borderRadius: 40, marginLeft: 50 }}>
          <img
            src="https://ik.imagekit.io/o3b14qow3gqi/Crew/sss_z642MOd4G.jpg?updatedAt=1647509408608"
            alt="get-started"
            className="w-[80%] h-[80%] object-contain"
            style={{ borderRadius: 40 }}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
