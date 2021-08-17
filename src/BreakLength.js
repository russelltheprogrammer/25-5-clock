import React from "react";
import './index.scss';

const BreakLength = () => {
    return (
        <div>
            <label id="break-label">Break Length</label>
            <button id="break-increment">U</button>
            <div>
                Break Length Number
            </div>
            <button id="break-decrement">D</button>
        </div>
      );
}
 
export default BreakLength;