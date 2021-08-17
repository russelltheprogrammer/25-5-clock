import React from "react";
import './index.scss';

const SessionClock = ({ sessionCount }) => {
    
    return ( 
        <div id="session-clock">
            <label id="timer-label">Session</label>
            <div id="timer-label">{sessionCount}</div>
        </div>
     );
}
 
export default SessionClock;