import './index.scss';
import React, { useState } from 'react';
import SessionClock from './SessionClock';
import useInterval from './useInterval';

const TwentyFivePlusFiveClock = () => {

const [sessionCount, setSessionCount] = useState(1500000);
const [breakCount, setBreakCount] = useState(300000);
const [time, setTime] = useState(1500000);
const [sessionCountToggle, setSessionCountToggle] = useState(true);
const [breakCountToggle, setBreakCountToggle] = useState(false);
const [isRunning, setIsRunning] = useState(false);
const delay = 1000;

useInterval(() => { 
    if(time < 1000){
        return handleSessionAndBreakToggle() + document.getElementById("beep").play()
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

const handleIncrement = (typeOfCount, count) => {
    if( count >3540000 || isRunning){
        return count;
    }
    else {
        if(typeOfCount === "breakCount"){
            return setBreakCount(count + 60000);
        }
        else if (typeOfCount === "sessionCount"){
            return setSessionCount(count + 60000) + setTime(count + 60000);
        }
    }
};

const handleDecrement = (typeOfCount, count) => {
    if( count <=60000 || isRunning){
        return count;
    }
    else {
        if(typeOfCount === "breakCount"){
            return setBreakCount(count - 60000);
        }
        else if (typeOfCount === "sessionCount"){
            return setSessionCount(count - 60000) + setTime(count - 60000);
        }
    }
};

const handleReset = () => {
    let audio = document.getElementById("beep");
    audio.currentTime = 0;
    return setSessionCount(1500000) + setBreakCount(300000) + setTime(1500000) + 
    setIsRunning(false) + setSessionCountToggle(true) + audio.pause();
};

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
                                <div className="col-4"><button id="break-increment" onClick={() => handleIncrement("breakCount", breakCount)}>
                                    <i className="fas fa-angle-double-up"></i></button></div>
                                <div className="col-4" id="break-length">{breakCount/60000}</div>
                                <div className="col-4"><button id="break-decrement" onClick={() => handleDecrement("breakCount", breakCount)}>
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
                                <div className="col-4"><button id="session-increment" onClick={() => handleIncrement("sessionCount", sessionCount)}><i className="fas fa-angle-double-up"></i></button></div>
                                <div className="col-4" id="session-length">{sessionCount/60000}</div>
                                <div className="col-4"><button id="session-decrement" onClick={() => handleDecrement("sessionCount", sessionCount)}><i className="fas fa-angle-double-down"></i></button></div>
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
                <audio id="beep" preload="auto" src="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg"/>    
            </div>
        </div>
     );
}
 
export default TwentyFivePlusFiveClock;