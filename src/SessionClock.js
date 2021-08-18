import React from "react";
import './index.scss';
import convertMS from "./convertMS";

const SessionClock = ({ sessionCount }) => {
    
let MMSS = convertMMSS(sessionCount);

    return ( 
        <div id="session-clock">
            <label id="timer-label">Session</label>
            <div id="time-left">{MMSS}</div>
        </div>
     );
}
 
export default SessionClock;