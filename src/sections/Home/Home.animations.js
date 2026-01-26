export const sunMoonAnimation = {
  hidden: {
    x: -250,
    y: 100,
    opacity: 0,
  },
  visible: {
    x: [-250, -220, -200, -150, -100, 0],
    y: [100, 80, 50, 20, 0],
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
  exit: {
    x: [0, 40, 80, 120, 160, 200, 240, 280, 320],
    y: [0, 25, 50, 75, 100],
    opacity: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
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
      duration: 0.3,
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
      duration: 0.3,
      type: "spring",
    },
  }),
};
