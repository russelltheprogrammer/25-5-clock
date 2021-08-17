import React from "react";
import './index.scss';

const SessionClock = () => {
    return ( 
        <div id="session-clock">
            <label id="timer-label">Session</label>
            <div id="timer-label">MM:SS</div>
        </div>
     );
}
 
export default SessionClock;