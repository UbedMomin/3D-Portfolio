import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            //
            1000,
            " Same substring at the start",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "We produce food for Hamsters ",
            1000,
          ]}
          wrapper="span"
          speed={60}
          deletionSpeed={70}
          // style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
