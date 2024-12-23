import { motion } from "framer-motion"
import "./AnimatingBg.css"

import el1 from "../../assets/bg/Ellipse1.svg"
import el2 from "../../assets/bg/Ellipse3.svg"
import el3 from "../../assets/bg/Ellipse4.svg"
import el4 from "../../assets/bg/Ellipse5.svg"

import st2 from "../../assets/bg/Star2.svg"


const AnimatingBg = () => {

    const animationValue = {
        animate: {
            x: ["0%", "50%", "50%", "-50%", "-50%", "0%"],
            y: ["0%", "0%", "50%", "50%", "-50%", "0%"],

            transition: {
                duration: 20,
                ease: "linear",
                repeat: "loop"
            }
        },
    }

    return (
        <motion.div id="bg-div"
        >
            <motion.img
                variants={animationValue}
                initial={{ top: " 50%" }}
                animate="animate"
                src={el1} alt="background Image mesh gradient" />

            <motion.img
                variants={animationValue}
                initial={{ top: " 10%" }}
                animate="animate"
                src={el2} alt="background Image mesh gradient" />

            <motion.img
                variants={animationValue}
                initial={{left: " 50%"}}
                animate="animate"
                src={el3} alt="background Image mesh gradient" />

            <motion.img
                variants={animationValue}
                initial={{left: " 50%"}}
                animate="animate"
                src={el4} alt="background Image mesh gradient" />

            

            <motion.img
                variants={animationValue}
                initial={{left: " 10%"}}
                animate="animate"
                src={st2} alt="background Image mesh gradient" />

        </motion.div>
    );
};

export default AnimatingBg;