import React from "react";
import './propellers.css';
import { ReactComponent as Clockwise } from './clockwisearrow.svg';
import { ReactComponent as Anticlockwise } from './anticlockwisearrow.svg';
import { ReactComponent as Line } from './propline.svg';

function Propeller()
{
    return(
        <div className="prop-main">
            {/* <div className="clockwise-div">
                <Clockwise width='30px' height='30px' background-color='blue'/>
            </div>
            <div className="anticlockwise-div">
                <Anticlockwise width='30px' height='30px'/>
            </div> */}
            <img src="./naats-uav1.png" className="" style={{height:'300px' , width:'300px'}}></img>
            <img src="./naats-fin2.png"  className="prop-1" style={{height:'9px' , width:'50px'}}></img>
            <img src="./naats-fin2.png"  className="prop-2" style={{height:'9px' , width:'50px'}}></img>
            <img src="./naats-fin2.png"  className="prop-3" style={{height:'9px' , width:'50px'}}></img>
            <img src="./naats-fin2.png"  className="prop-4" style={{height:'9px' , width:'50px'}}></img>
            <div className="line-div-1">
                <Line width='80px' height='80px'/>
            </div>
            <div className="text-style" style={{top:'43px',left:'240px'}}>RPM</div>
            <div className="text-style" style={{top:'60px',left:'235px'}}>TEMP</div>
            <div className="line-div-2">
                <Line width='80px' height='80px'/>
            </div>
            <div className="text-style" style={{top:'181px',left:'230px'}}>RPM</div>
            <div className="text-style" style={{top:'198px',left:'238px'}}>TEMP</div>
            <div className="line-div-3">
                <Line width='80px' height='80px'/>
            </div>
            <div className="text-style" style={{top:'43px',left:'35px'}}>RPM</div>
            <div className="text-style" style={{top:'60px',left:'35px'}}>TEMP</div>
            <div className="line-div-4">
                <Line width='80px' height='80px'/>
            </div>
            <div className="text-style" style={{top:'181px',left:'40px'}}>RPM</div>
            <div className="text-style" style={{top:'198px',left:'35px'}}>TEMP</div>
        </div>
    )
}
export default Propeller;