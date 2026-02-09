import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Overlay } from "./RotateOverlay.styles";
import PhoneRotateIcon from "../../assets/icons/smartphone-rotate.svg?react";

const phoneRotateAnimation = {
  initial: {
    rotate: 135,
  },
  animate: {
    rotate: 45,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const RotateOverlay = () => {
  const isLandscape = useMediaQuery(
    "(orientation: landscape) and (max-width: 768px)",
  );

  return (
    <AnimatePresence>
      {isLandscape && (
        <Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>Please rotate your device</h2>
          <motion.div
            variants={phoneRotateAnimation}
            initial="initial"
            animate="animate"
          >
            <PhoneRotateIcon />
          </motion.div>
          <p>This website is optimized for portrait orientation</p>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
