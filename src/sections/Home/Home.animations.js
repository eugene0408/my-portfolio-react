export const sunMoonAnimation = {
  hidden: {
    x: -250,
    y: 100,
    opacity: 0,
  },
  visible: {
    x: [-250, -225, -200, -175, -150, -125, -100, 0],
    y: [100, 75, 50, 25, 0],
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "tween",
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  exit: {
    x: [0, 40, 80, 120, 160, 200, 240, 280, 320],
    y: [0, 25, 50, 75, 100],
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.2,
    },
  },
};

export const imageAnimation = {
  hidden: {
    x: 250,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      bounce: 0.4,
    },
  }),
};

export const imageBgAnimation = {
  ...imageAnimation,
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

export const textAnimation = {
  hidden: {
    x: -250,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      type: "spring",
      bounce: 0.4,
    },
  }),
};
