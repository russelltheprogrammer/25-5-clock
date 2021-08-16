import React from "react";
import './index.css';

const SessionLength = () => {
    return (
        <div>
            <label id="session-label">Session Length</label>
            <button id="session-increment">U</button>
            <div>
                Session Length Number
            </div>
            <button id="session-decrement">D</button>
        </div>
      );
}
 
export default SessionLength;