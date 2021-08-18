import './index.scss';
import React, { useState } from 'react';
import SessionClock from './SessionClock';
import StartStopResetButtons from './StartStopResetButtons';

const TwentyFivePlusFiveClock = () => {

const [sessionCount, setSessionCount] = useState(25);
const [breakCount, setBreakCount] = useState(5);


    return ( 
        <div>
            <div id="container-flex" className="d-flex flex-column justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <SessionClock sessionCount={sessionCount} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><label id="break-label">Break Length</label></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><button id="break-increment">U</button></div>
                                <div className="col-4">{breakCount}</div>
                                <div className="col-4"><button id="break-decrement">D</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><label id="session-label">Session Length</label></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><button id="session-increment">U</button></div>
                                <div className="col-4">{sessionCount}</div>
                                <div className="col-4"><button id="session-decrement">D</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">     
                        <StartStopResetButtons />
                    </div>  
                </div>    
            </div>
        </div>
     );
}
 
export default TwentyFivePlusFiveClock;