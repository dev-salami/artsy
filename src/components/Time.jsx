import { useEffect, useState } from "react";
function CountdownTimer({ m, year, day }) {
  const [expiryTime, setExpiryTime] = useState(`${day} ${m} ${year} 15:30:25`);
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <div className="">
      <div className="text-xs font-semibold">
        <div className="flex ">
          {expiryTime !== false ? (
            <>
              <div className="flex items-center space-x-1">
                <span>{countdownTime.countdownDays}</span> <span>Days</span>
              </div>
              <div className="mx-2">:</div>
              <div className="flex items-center space-x-1">
                <span>{countdownTime.countdownHours}</span> <span>Hrs</span>
              </div>
              <div className="mx-2">:</div>
              <div className="flex items-center space-x-1">
                <span> {countdownTime.countdownMinutes}</span> <span>Mins</span>
              </div>
              <div className="mx-2 font-bold">:</div>
              <div className="flex items-center space-x-1">
                <span>{countdownTime.countdownSeconds}</span> <span>Secs</span>
              </div>
            </>
          ) : (
            <p>Deal has been Expired</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default CountdownTimer;
