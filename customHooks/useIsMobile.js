import { useState, useEffect } from "react";
/* 
    UseCase::
      => Pass down the dimesioms.
      => return boolean [true::dimension, false::!dimension]
  */
const useIsMobile = (dimension) => {
  let breakpoint = dimension ? dimension : 480;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
