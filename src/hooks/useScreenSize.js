import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      switch (true) {
        case window.innerWidth <= 576:
          setScreenSize("mobile");
          break;
        case window.innerWidth <= 992 &&
          window.innerWidth >= 576 &&
          window.innerHeight >= 800:
          setScreenSize("tablet");
          break;
        case window.innerWidth <= 992 && window.innerWidth >= 576:
          setScreenSize("medium");
          break;
        default:
          setScreenSize("desktop");
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
};
