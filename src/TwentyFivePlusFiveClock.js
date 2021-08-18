import './index.scss';
import React, { useState } from 'react';
import SessionClock from './SessionClock';

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
                                <div className="col-4"><button id="break-increment" onClick={() => breakCount >59 ? breakCount : setBreakCount(breakCount + 1)}>
                                    <i class="fas fa-angle-double-up"></i></button></div>
                                <div className="col-4 number-manipulation">{breakCount}</div>
                                <div className="col-4"><button id="break-decrement" onClick={() => breakCount <=0 ? breakCount : setBreakCount(breakCount - 1)}>
                                    <i class="fas fa-angle-double-down"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><label id="session-label">Session Length</label></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><button id="session-increment" onClick={() => sessionCount >59 ? sessionCount : setSessionCount(sessionCount + 1)}>
                                    <i class="fas fa-angle-double-up"></i></button></div>
                                <div className="col-4 number-manipulation">{sessionCount}</div>
                                <div className="col-4"><button id="session-decrement" onClick={() => sessionCount <=0 ? sessionCount : setSessionCount(sessionCount - 1)}>
                                    <i class="fas fa-angle-double-down"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">     
                        <div id="ssr-buttons">
                            <button id="start_stop"><i class="fas fa-play-circle"></i><i class="fas fa-pause-circle"></i></button>
                            <button id="reset" onClick={() => setSessionCount(25) + setBreakCount(5)}><i class="fas fa-redo"></i></button>
                        </div>
                    </div>  
                </div>    
            </div>
        </div>
     );
}
 
export default TwentyFivePlusFiveClock;