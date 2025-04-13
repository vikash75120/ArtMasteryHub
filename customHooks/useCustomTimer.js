import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Timer from "easytimer.js";

// Convert "00:00:20" to { minutes, seconds }
const parseTimeString = (timeStr) => {
  const [hours, minutes, seconds] = timeStr.split(":").map(Number);
  return {
    minutes: hours * 60 + minutes,
    seconds,
  };
};

const useCustomTimer = () => {
  const { timerSelection = {} } = useSelector((state) => state.configuration);

  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("preparation_time");

  const timerRef = useRef(null);

  const getTimerValues = (label) => {
    const raw = timerSelection?.[label] || "00:00:20";
    return parseTimeString(raw);
  };

  const startPhase = (label) => {
    if (timerRef.current) timerRef.current.stop();

    const { minutes, seconds } = getTimerValues(label);
    timerRef.current = new Timer();

    timerRef.current.start({
      countdown: true,
      startValues: { minutes, seconds },
    });

    timerRef.current.addEventListener("secondsUpdated", () => {
      setTimeLeft(timerRef.current.getTimeValues().toString());
    });

    timerRef.current.addEventListener("targetAchieved", () => {
      if (label === "preparation_time") {
        setCurrentPhase("round_time");
        startPhase("round_time");
      } else if (label === "round_time") {
        setCurrentPhase("rest_time");
        startPhase("rest_time"); // Optionally loop or stop here
      } else if (label === "rest_time") {
        setIsRunning(false); // Stop completely, or loop again if needed
      }
    });

    setCurrentPhase(label);
    setIsRunning(true);
  };

  const startTimer = () => {
    startPhase("preparation_time");
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      timerRef.current.pause();
      setIsRunning(false);
    }
  };

  const resumeTimer = () => {
    if (timerRef.current) {
      timerRef.current.start();
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    startPhase("rest_time");
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        timerRef.current.stop();
      }
    };
  }, []);

  return {
    timeLeft,
    isRunning,
    currentPhase,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  };
};

export default useCustomTimer;
