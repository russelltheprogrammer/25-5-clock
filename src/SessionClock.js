import React from "react";
import './index.scss';
import convertMMSS from "./convertMMSS";

const SessionClock = ({ time, sessionStatus }) => {
    
let MMSS = convertMMSS(time);
let sessionTitle = "";

sessionStatus ? sessionTitle="Session" : sessionTitle="Break";

    return ( 
        <div id="session-clock">
            <label id="timer-label">{sessionTitle}</label>
            <div id="time-left">{MMSS}</div>
        </div>
     );
}
 
export default SessionClock;