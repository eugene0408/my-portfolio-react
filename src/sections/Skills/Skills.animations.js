const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

export const skillCardsAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: !isSmallScreen ? 180 : 50,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      duration: !isSmallScreen ? 0.8 : 0.7,
      delay: custom * 0.2,
      type: "spring",
    },
  }),
};
