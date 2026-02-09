export const skillCardsAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.7,
      delay: custom * 0.1,
      type: "spring",
    },
  }),
};

export const cardsWrapperAnimation = {
  hidden: {
    scale: 0.95,
  },
  visible: (custom) => ({
    scale: 1,
    transition: {
      delay: custom * 0.1,
      type: "easeInOut",
      duration: 0.4,
    },
  }),
};
