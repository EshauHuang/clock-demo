import { useRef, useState, useEffect, useCallback } from "react";
import _ from "lodash-es";

const useClock = ({ initialClockTime, timeLimitSetting }) => {
  const animationRequestId = useRef(null);
  const [clockTime, setClockTime] = useState(initialClockTime);
  const [tmpClockTime, setTmpClockTime] = useState(initialClockTime);
  const [isClockTimeLoaded, setIsClockTimeLoaded] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(0);
  const [isClockStop, setIsClockStop] = useState(false);
  const cancelAnimationFrame =
    window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  const { hours, minutes, seconds } = clockTime;

  const stopClock = useCallback(() => {
    cancelAnimationFrame(animationRequestId.current);
    animationRequestId.current = null;
    setIsClockStop(true);
  }, [cancelAnimationFrame]);

  const startClock = useCallback(() => {
    setIsClockStop(false);
    setIsClockTimeLoaded(false);
  }, []);

  useEffect(() => {
    if (isClockStop || isClockTimeLoaded) return;

    if (!isClockTimeLoaded) {
      setIsClockTimeLoaded(true);
    }

    const secondsEle = document.querySelector(".second");
    const minuteEle = document.querySelector(".minute");
    const hourEle = document.querySelector(".hour");
    const squareEle = document.querySelector(".square");
    const triangleEle = document.querySelector(".triangle");
    const innerCircle = document.querySelector(".innerCircle");

    const fps = 30;
    const frameInterval = 1000 / fps;

    const lastUpdateTime = lastUpdate;

    function update(timestamp, lastUpdateTime) {
      const deltaTime = timestamp - lastUpdateTime;

      if (deltaTime >= frameInterval) {
        const currentMillisecond = seconds * 1000 + deltaTime;
        const currentSeconds = Math.floor((seconds + deltaTime / 1000) % 60);
        const currentMinutes = Math.floor(
          (minutes + currentMillisecond / 1000 / 60) % 60
        );
        const currentHours = Math.floor(
          (hours + minutes / 60 + currentMillisecond / 1000 / 60 / 60) % 24
        );

        const timeSetting = {
          hours: currentHours,
          minutes: currentMinutes,
          seconds: currentSeconds,
        };

        setClockTime((prev) => {
          if (!_.isEqual(prev, timeSetting)) {
            return timeSetting;
          }

          return prev;
        });

        // console.log("currentSeconds:", currentSeconds);
        // console.log("currentMinutes:", currentMinutes);
        // console.log("currentHours:", currentHours);

        const secondRotateDegree = ((currentMillisecond % 60000) / 60000) * 360;
        const squareRotateDegree = -45 + secondRotateDegree;

        const minuteRotateDegree =
          (((minutes * 60 * 1000 + currentMillisecond) % (60000 * 60)) /
            (60000 * 60)) *
          360;

        const hourRotateDegree =
          (((hours * 60 * 60 * 1000 +
            minutes * 60 * 1000 +
            currentMillisecond) %
            (60000 * 60 * 12)) /
            (60000 * 60 * 12)) *
          360;

        const triangleRotateDegree = minuteRotateDegree;

        secondsEle.style.setProperty("--rotate", `${secondRotateDegree}deg`);
        squareEle.style.setProperty("--rotate", `${squareRotateDegree}deg`);
        minuteEle.style.setProperty("--rotate", `${minuteRotateDegree}deg`);
        triangleEle.style.setProperty("--rotate", `${triangleRotateDegree}deg`);
        hourEle.style.setProperty("--rotate", `${hourRotateDegree}deg`);
        innerCircle.style.setProperty("--rotate", `${hourRotateDegree}deg`);
      }

      animationRequestId.current = requestAnimationFrame((timestamp) =>
        update(timestamp, lastUpdateTime)
      );
    }

    animationRequestId.current = requestAnimationFrame((timestamp) =>
      update(timestamp, lastUpdateTime)
    );
  }, [
    seconds,
    minutes,
    hours,
    isSetting,
    cancelAnimationFrame,
    lastUpdate,
    stopClock,
    isClockStop,
    isClockTimeLoaded,
  ]);

  const handleOpenClockEditor = () => {
    setIsSetting(true);
    setTmpClockTime(clockTime);
    stopClock();
  };

  const handleCloseClockEditor = () => {
    setIsSetting(false);
    setClockTime(tmpClockTime);
    startClock();
    setLastUpdate(performance.now());
  };

  const handleSubmitClockTime = () => {
    setIsSetting(false);
    setTmpClockTime(clockTime);
    startClock();
    setLastUpdate(performance.now());
  };

  const checkValue = ({ value, min, max }) => {
    const numValue = Number(value);
    const numMin = Number(min);
    const numMax = Number(max);

    if (isNaN(numValue) || isNaN(numMin) || isNaN(numMax)) return numMin;

    if (numValue > numMax) return numMax;

    if (numValue < numMin) return numMin;

    return numValue;
  };

  const HandleChangeClockTime = (e) => {
    const { value, name } = e.target;
    const { max, min } = timeLimitSetting[name];

    const newValue = checkValue({ value, min, max });

    setClockTime((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleClockTimeAdd = (name) => {
    const { max, min } = timeLimitSetting[name];
    const value = clockTime[name] + 1;

    const newValue = checkValue({ value, min, max });

    setClockTime((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleClockTimeReduce = (name) => {
    const { max, min } = timeLimitSetting[name];
    const value = clockTime[name] - 1;

    const newValue = checkValue({ value, min, max });

    setClockTime((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  return {
    isSetting,
    setIsSetting,
    clockTime,
    setClockTime,
    animationRequestId,
    handleOpenClockEditor,
    handleCloseClockEditor,
    handleSubmitClockTime,
    HandleChangeClockTime,
    handleClockTimeAdd,
    handleClockTimeReduce,
  };
};

export default useClock;
