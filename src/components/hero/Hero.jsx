import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
    scrollButton: {
      opacity: 0,
      y: 10,
    },
  },
};

const Hero = () => {

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Chulumanco Zee Majama</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See latest projects
            </motion.button>
            <motion.button variants={textVariants}>Get in touch</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="slidingTextContainer">Software Fanatic and Engineer</div>
      <div className="imageContainer">
        <img src="/thezeeheropic.png" alt="" />
      </div>
    </div>
  );

};

export default Hero;
