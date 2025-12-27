const wrapperAnimation = {
  hidden: {
    scale: 0.98,
  },
  visible: (custom) => ({
    scale: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.4,
      type: "ease-in-out",
    },
  }),
  exit: {
    opacity: 0,
  },
};

const bigScreenAnimation = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};

const smallScreenAnimation = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      opacity: { duration: 0.1 },
      x: { duration: 0.3 },
    },
  },
};

const tagAnimation = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "ease-in",
      duration: 0.1,
    },
  },
};

const titleAnimation = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "ease-in",
    },
  },
};

const textAnimation = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const linksAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.15,
      duration: 0.3,
      type: "spring",
    },
  }),
};

const linkArrowAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0,
    scale: 0.8,
  },
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "ease-in-out",
    },
  },
};

const staggerItemsAnimation = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export {
  wrapperAnimation,
  bigScreenAnimation,
  smallScreenAnimation,
  titleAnimation,
  tagAnimation,
  textAnimation,
  linksAnimation,
  linkArrowAnimation,
  staggerItemsAnimation,
};
