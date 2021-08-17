import './index.scss';
import React from 'react';
import SessionClock from './SessionClock';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';
import StartStopResetButtons from './StartStopResetButtons';

const TwentyFivePlusFiveClock = () => {

    return ( 
        <div>
            <div id="container" className="d-flex flex-column justify-content-center align-items-center">
                <div className="row">
                    <div className="col">
                        <SessionClock />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                         <BreakLength />
                    </div>
                    <div class="col">
                        <SessionLength />
                    </div>
                </div>
                <div className="row">
                    <div className="col">     
                        <StartStopResetButtons />
                    </div>  
                </div>    
            </div>
        </div>
     );
}
 
export default TwentyFivePlusFiveClock;