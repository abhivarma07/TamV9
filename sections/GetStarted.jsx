"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div style={{ borderRadius: 40 }}>
          <img
            src="https://ik.imagekit.io/o3b14qow3gqi/Crew/princi_O8p_H9fUo_tS.jpg?updatedAt=1647430271746"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
            style={{ borderRadius: 40 }}
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Principal" />
        <TitleText title={<>Dr.P.Santosh Kumar Patra</>} />
        <div className="mt-[31px] flex flex-col max-w-[4000px] gap-[24px]">
          <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
            {
              "Dr.P.Santosh Kumar Patra , Principal of St.Martin's Engineering College is holding B.E. in Computer Science & Engineering, MTech in Computer Science & Engineering and Ph.D in Computer Science & Engineering degrees. His area of interests are Airtificial Intelligence,Software Engineering , Data mining and warehousing & Wireless Networks."
            }
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
