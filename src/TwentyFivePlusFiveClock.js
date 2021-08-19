import './index.scss';
import React, { useState } from 'react';
import SessionClock from './SessionClock';
import useInterval from './useInterval';

const TwentyFivePlusFiveClock = () => {

const [sessionCount, setSessionCount] = useState(1500000);
const [breakCount, setBreakCount] = useState(300000);
const [time, setTime] = useState(1500000);

const StartClock = () => {

    useInterval(() => { 
     setTime(time - 1000)
    }, 1000);
}

const StopClock = () => {

}
 
    return ( 
        <div>
            <div id="container-flex" className="d-flex flex-column justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <SessionClock time={time/1000} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><label id="break-label">Break Length</label></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><button id="break-increment" onClick={() => breakCount >3540000 ? breakCount : setBreakCount(breakCount + 60000)}>
                                    <i className="fas fa-angle-double-up"></i></button></div>
                                <div className="col-4 number-manipulation">{breakCount/60000}</div>
                                <div className="col-4"><button id="break-decrement" onClick={() => breakCount <=0 ? breakCount : setBreakCount(breakCount - 60000)}>
                                    <i className="fas fa-angle-double-down"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><label id="session-label">Session Length</label></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><button id="session-increment" onClick={() => sessionCount >3540000 ? sessionCount : setSessionCount(sessionCount + 60000) + setTime(sessionCount + 60000)}>
                                    <i className="fas fa-angle-double-up"></i></button></div>
                                <div className="col-4 number-manipulation">{sessionCount/60000}</div>
                                <div className="col-4"><button id="session-decrement" onClick={() => sessionCount <=0 ? sessionCount : setSessionCount(sessionCount - 60000) + + setTime(sessionCount - 60000)}>
                                    <i className="fas fa-angle-double-down"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">     
                        <div id="ssr-buttons">
                            <button id="start_stop" onClick={() => StartClock()}><i className="fas fa-play-circle"></i><i className="fas fa-pause-circle"></i></button>
                            <button id="reset" onClick={() => setSessionCount(1500000) + setBreakCount(300000) + setTime(1500000)}><i className="fas fa-redo"></i></button>
                        </div>
                    </div>  
                </div>    
            </div>
        </div>
     );
}
 
export default TwentyFivePlusFiveClock;