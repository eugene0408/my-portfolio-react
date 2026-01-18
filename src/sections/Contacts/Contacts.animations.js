export const headerAnimation = {
  hidden: {
    opacity: 0,
    y: -150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export const mailIconAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 0.5,
    },
  },
};

export const mailTextAnimation = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.4,
    },
  },
};

export const actionIconAnimation = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const socialLinkAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      delay: custom * 0.1,
    },
  }),
  hover: {
    backgroundColor: "var(--accent)",
    transition: {
      duration: 0.3,
    },
  },
};

export const copyAlertAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    sclale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
