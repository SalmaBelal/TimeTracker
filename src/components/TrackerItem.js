import React from 'react'
import "./TrackerItem.css"
import { useStopwatch } from 'react-timer-hook';

function TrackerItem({ id, title }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    return (
        <div className='trackerItem'>
            <h2>{title}</h2>
            <div className="trackerItem__timer">
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button>Stop</button>
            </div>
            <h2>Time Spent: {days} {hours} {minutes} {seconds}</h2>
            <div className="trackerItem__modify">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TrackerItem