"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  data,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    // style={{ backgroundColor: "white" }}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <>
        <AnimatePresence>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 p-8 flex justify-start w-full flex-col"
          >
            {data.map((item, index) => {
              return (
                <div
                  className={`${styles.flexCenter} flex-row mt-2`}
                  key={index}
                >
                  <div style={{ width: 20 }}>
                    <p className="font-bold text-[20px] text-white">
                      <ArrowRight />
                    </p>
                  </div>
                  <p
                    className="flex-1  font-normal text-[18px] text-white"
                    style={{ marginLeft: 10 }}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
        <div className="explore-card absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Info about the card
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      </>
    )}
  </motion.div>
);

export default ExploreCard;
