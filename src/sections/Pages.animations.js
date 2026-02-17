export const headerAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom ? custom * 0.2 : 0.2,
      type: "spring",
      bounce: 0.4,
    },
  }),
};
