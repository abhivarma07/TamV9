"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        {/* <img
          src="/logo.png"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        /> */}
        <h1 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          TAM v9
        </h1>
        <button
          className=".register-button hover:bg-green-100 hover:text-black text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/timeline")}
        >
          Register Here
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
