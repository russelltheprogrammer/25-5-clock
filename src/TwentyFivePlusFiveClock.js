import './index.scss';
import React, { useState } from 'react';
import SessionClock from './SessionClock';
import useInterval from './useInterval';

const TwentyFivePlusFiveClock = () => {

const [sessionCount, setSessionCount] = useState(1500000);
const [breakCount, setBreakCount] = useState(300000);
const [sessionCountToggle, setSessionCountToggle] = useState(true);
const [breakCountToggle, setBreakCountToggle] = useState(false);
const [time, setTime] = useState(1500000);
const [delay, setDelay] = useState(1000);
const [isRunning, setIsRunning] = useState(false);

useInterval(() => { 
    if(time < 1000){
        handleSessionAndBreakToggle()
    }
    else if(time > 0 && sessionCountToggle) { 
        setTime(time - 1000)
    }
    else if(time > 0 && breakCountToggle){
        setTime(time - 1000)
    }
}, isRunning ? delay : null);

const handlePlayStop = () => isRunning ? setIsRunning(false) : setIsRunning(true);

const handleSessionAndBreakToggle = () => sessionCountToggle 
        ? setSessionCountToggle(false) + setBreakCountToggle(true) + setTime(breakCount)
        : setSessionCountToggle(true) + setBreakCountToggle(false) + setTime(sessionCount);

const handleIncrement = (typeOfCount) => {
    if( typeOfCount >3540000 || isRunning){
        return typeOfCount;
    }
    else {
        if(typeOfCount === breakCount){
            return setBreakCount(typeOfCount + 60000);
        }
        else if (typeOfCount === sessionCount){
            return setSessionCount(typeOfCount + 60000) + setTime(typeOfCount + 60000);
        }
    }
};

const handleDecrement = (typeOfCount) => {
    if( typeOfCount <=60000 || isRunning){
        return typeOfCount;
    }
    else {
        if(typeOfCount === breakCount){
            return setBreakCount(typeOfCount - 60000);
        }
        else if (typeOfCount === sessionCount){
            return setSessionCount(typeOfCount - 60000) + setTime(typeOfCount - 60000);
        }
    }
};

const handleReset = () => setSessionCount(1500000) + setBreakCount(300000) + setTime(1500000) + setIsRunning(false) + setSessionCountToggle(true);

    return ( 
        <div>
            <div id="container-flex" className="d-flex flex-column justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <SessionClock time={time/1000} sessionStatus={sessionCountToggle} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><label id="break-label">Break Length</label></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><button id="break-increment" onClick={() => handleIncrement(breakCount)}>
                                    <i className="fas fa-angle-double-up"></i></button></div>
                                <div className="col-4 number-manipulation">{breakCount/60000}</div>
                                <div className="col-4"><button id="break-decrement" onClick={() => handleDecrement(breakCount)}>
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
                                <div className="col-4"><button id="session-increment" onClick={() => handleIncrement(sessionCount)}><i className="fas fa-angle-double-up"></i></button></div>
                                <div className="col-4 number-manipulation">{sessionCount/60000}</div>
                                <div className="col-4"><button id="session-decrement" onClick={() => handleDecrement(sessionCount)}><i className="fas fa-angle-double-down"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">     
                        <div id="ssr-buttons">
                            <button id="start_stop" onClick={() => handlePlayStop()}><i className="fas fa-play-circle"></i><i className="fas fa-pause-circle"></i></button>
                            <button id="reset" onClick={() => handleReset()}><i className="fas fa-redo"></i></button>
                        </div>
                    </div>  
                </div>    
            </div>
        </div>
     );
}
 
export default TwentyFivePlusFiveClock;