import { useState, useEffect } from "react";

/* 
    UseCase::
      => Pass down the dimensions.
      => return boolean [true::dimension, false::!dimension]
*/
const useIsMobile = (dimension) => {
  const breakpoint = dimension || 480;

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false // Ensure SSR safety
  );

  useEffect(() => {
    // Guard for SSR
    if (typeof window === "undefined") return;

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
