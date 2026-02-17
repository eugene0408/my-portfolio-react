export const cardsWrapperAnimation = {
  hidden: {
    scale: 0.95,
  },
  visible: (custom) => ({
    scale: 1,
    transition: {
      delay: custom * 0.1,
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  }),
};

export const skillCardsAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      type: "spring",
      bounce: 0.4,
      duration: 0.3,
    },
  }),
};

export const textAnimation = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      bounce: 0.4,
    },
  }),
};
