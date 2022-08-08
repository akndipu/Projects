import { useState, useEffect } from "react";
import './Clock.css';
function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [refreshClock]);
  return <span className="timer">{date.toLocaleTimeString()}</span>;
}
export default Clock;
