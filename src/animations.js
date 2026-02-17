export const bounceIn = {
  hidden: ({ startScale } = {}) => ({
    opacity: 0,
    scale: startScale ?? 0.8,
  }),
  visible: ({ delayIndex } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: delayIndex ? delayIndex * 0.2 : 0.2,
      type: "spring",
      bounce: 0.4,
    },
  }),
};
