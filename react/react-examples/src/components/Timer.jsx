import React, {useState} from "react"

const Timer = () => {
  const [action, setAction] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  let timerId;
  
  const getTime = () => {
    if(action) return;
    setSeconds(seconds => seconds + 1);
    console.log(seconds);
    if(seconds >= 60){
      setSeconds(0);
      setMinutes(minutes => minutes + 1);
    }
    if(minutes >= 60){
      setMinutes(0);
      setHours(hours => hours + 1)    
    }
  }

  const start = () => {
    setAction(true);
    timerId = setInterval(() => getTime(), 1000)
  }

  const stop = () => {
    clearInterval(timerId);
    setAction(false);
  }

  return(
    <>
      <div className="timer">
        {hours}:{minutes}:{seconds}
      </div>
      <button onClick={action ? stop : start}>{action ? "Stop" : "Start"}</button>
    </>
  )
}

export default Timer;