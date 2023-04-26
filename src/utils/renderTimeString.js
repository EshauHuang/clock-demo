export const convertMilliseconds = (time) => ({
  hours: Math.floor(time / (60 * 60)),
  minutes: Math.floor(time / 60),
  seconds: Math.ceil(time % (60 * 60)) % 60,
});

export const renderMillisecondsToTimeString = (time) => {
  const { hours, minutes, seconds } = convertMilliseconds(time);
  let timeStr = "";

  if (hours) {
    timeStr += `${hours}:`;
    timeStr += minutes ? `${minutes}:` : "0:";
    timeStr += seconds ? `${seconds.toString().padStart(2, "0")}` : "00";
  } else {
    timeStr += minutes ? `${minutes}:` : "0:";
    timeStr += seconds ? `${seconds.toString().padStart(2, "0")}` : "00";
  }

  return timeStr;
};

export const renderTimeObjToString = (timeObj) => {
  const { hours, minutes, seconds } = timeObj;
  let timeStr = "";

  if (hours) {
    timeStr += `${hours}:`;
    timeStr += minutes ? `${minutes}:` : "0:";
    timeStr += seconds ? `${seconds.toString().padStart(2, "0")}` : "00";
  } else {
    timeStr += "0:";
    timeStr += minutes ? `${minutes.toString().padStart(2, "0")}:` : "00:";
    timeStr += seconds ? `${seconds.toString().padStart(2, "0")}` : "00";
  }

  return timeStr;
};
