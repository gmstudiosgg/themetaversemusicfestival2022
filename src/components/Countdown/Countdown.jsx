import React, { useEffect, useState } from "react";
import { StyledCountdown } from "./styles";

const Countdown = () => {
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMins, setRemainingMins] = useState(0);
  const [remainingSecs, setRemainingSecs] = useState(0);

  let festivalDate = new Date("Nov 10, 2022 12:00:00 GMT");
  festivalDate = new Date(festivalDate);
  const UTCFestivalDate = new Date(festivalDate.toUTCString()).getTime();

  useEffect(() => {
    let interval = setInterval(() => {
      let now = new Date().getTime();
      let t = UTCFestivalDate - now;
      let days, hours, mins, secs;
      if (t >= 0) {
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        secs = Math.floor((t % (1000 * 60)) / 1000);

        days = ("0" + days).slice(1);
        hours = ("0" + hours).slice(-2);
        mins = ("0" + mins).slice(-2);
        secs = ("0" + secs).slice(-2);

        setRemainingDays(days);
        setRemainingHours(hours);
        setRemainingMins(mins);
        setRemainingSecs(secs);
        // console.log(days, hours, mins, secs);
      }
    }, 1000);
  }, []);

  return (
    <StyledCountdown>
      <div className="time-block days-wrapper">
        <span className="number">{remainingDays}</span>
        <span className="label">D.</span>
      </div>
      <div className="time-block days-wrapper">
        <span className="number">:</span>
      </div>
      <div className="time-block hours-wrapper">
        <span className="number">{remainingHours}</span>
        <span className="label">H.</span>
      </div>
      <div className="time-block days-wrapper">
        <span className="number">:</span>
      </div>
      <div className="time-block minutes-wrapper">
        <span className="number">{remainingMins}</span>
        <span className="label">M.</span>
      </div>
      <div className="time-block days-wrapper">
        <span className="number">:</span>
      </div>
      <div className="time-block seconds-wrappe">
        <span className="number">{remainingSecs}</span>
        <span className="label">S.</span>
      </div>
    </StyledCountdown>
  );
};

export default Countdown;
