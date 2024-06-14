import React, { useEffect, useState } from 'react';
import './speedometer.css';

function Speedometer(){


    const [speed,setSpeed]=useState(null);

    // Simulating real-time data update
    useEffect(() => {
        const interval = setInterval(() => {
            setSpeed(Math.floor(Math.random() * 241));
            // setSpeed(0);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        var r=241/49;
        var n = ((speed/5) + 1);
        var m = ((speed/30) + 50);
        if(speed>=0 & speed<45)
        {
            for (let i = 1; i <= 49; i++) {
                const temp=document.getElementById(i);
                // temp.style.backgroundColor="yellow";
                temp.style.backgroundColor= i <= n ? "rgb(0, 255, 0)" : "grey";
            }
            for (let j = 50; j <= 58; j++) {
                const temp=document.getElementById(j);
                // temp.style.backgroundColor="yellow";
                temp.style.color= j <= m ? "rgb(0, 255, 0)" : "grey";
            }
            const temp=document.getElementById('100');
            temp.style.boxShadow = "inset 0px 20px 20px 0px rgb(0 255 0 / 63%)";
            // "inset 0px 20px 20px 0px rgb(0 255 0 / 63%)";
        }
        else if(speed>=45 & speed<=120)
        {
            for (let i = 1; i <= 49; i++) {
                const temp=document.getElementById(i);
                // temp.style.backgroundColor="yellow";
                temp.style.backgroundColor= i <= n ? "yellow" : "grey";
            }
            for (let j = 50; j <= 58; j++) {
                const temp=document.getElementById(j);
                // temp.style.backgroundColor="yellow";
                temp.style.color= j <= m ? "yellow" : "grey";
            }

            const temp=document.getElementById('100');
            temp.style.boxShadow = "inset 0px 20px 20px 0px rgb(255 255 0 / 63%)";
        }
        else
        {
            for (let i = 1; i <= 49; i++) {
                const temp=document.getElementById(i);
                // temp.style.backgroundColor="yellow";
                temp.style.backgroundColor= i <= n ? "red" : "grey";
            }
            for (let j = 50; j <= 58; j++) {
                const temp=document.getElementById(j);
                // temp.style.backgroundColor="yellow";
                temp.style.color= j <= m ? "red" : "grey";
            }

            const temp=document.getElementById('100');
            temp.style.boxShadow = "inset 0px 20px 20px 0px rgb(255 0 0 / 63%)";
        }
    }, [speed]);


    return(
        <div className='speed-container'>
            <div className='outline'>
                <div id='1' className='scale-0'></div>
                <div id='7' className='scale-0 scale-1'></div>
                <div id='13' className='scale-0 scale-2'></div>
                <div id='19' className='scale-0 scale-3'></div>
                <div id='25' className='scale-0 scale-4'></div>
                <div id='31' className='scale-0 scale-5'></div>
                <div id='37' className='scale-0 scale-6'></div>
                <div id='43' className='scale-0 scale-7'></div>
                <div id='49' className='scale-0 scale-8'></div>
                <div className='scale-0 scale-glow' style={{transform: `translateX(-50%)  rotate(${speed - 30}deg)`}}></div>
                <div id='2' className='thinscale-0'></div>
                <div id='3' className='thinscale-0 thinscale-1'></div>
                <div id='4' className='thinscale-0 thinscale-2'></div>
                <div id='5' className='thinscale-0 thinscale-3'></div>
                <div id='6' className='thinscale-0 thinscale-4'></div>
                <div id='8' className='thinscale-0 thinscale-5'></div>
                <div id='9' className='thinscale-0 thinscale-6'></div>
                <div id='10' className='thinscale-0 thinscale-7'></div>
                <div id='11' className='thinscale-0 thinscale-8'></div>
                <div id='12' className='thinscale-0 thinscale-9'></div>
                <div id='14' className='thinscale-0 thinscale-10'></div>
                <div id='15' className='thinscale-0 thinscale-11'></div>
                <div id='16' className='thinscale-0 thinscale-12'></div>
                <div id='17' className='thinscale-0 thinscale-13'></div>
                <div id='18' className='thinscale-0 thinscale-14'></div>
                <div id='20' className='thinscale-0 thinscale-15'></div>
                <div id='21' className='thinscale-0 thinscale-16'></div>
                <div id='22' className='thinscale-0 thinscale-17'></div>
                <div id='23' className='thinscale-0 thinscale-18'></div>
                <div id='24' className='thinscale-0 thinscale-19'></div>
                <div id='26' className='thinscale-0 thinscale-20'></div>
                <div id='27' className='thinscale-0 thinscale-21'></div>
                <div id='28' className='thinscale-0 thinscale-22'></div>
                <div id='29' className='thinscale-0 thinscale-23'></div>
                <div id='30' className='thinscale-0 thinscale-24'></div>
                <div id='32' className='thinscale-0 thinscale-25'></div>
                <div id='33' className='thinscale-0 thinscale-26'></div>
                <div id='34' className='thinscale-0 thinscale-27'></div>
                <div id='35' className='thinscale-0 thinscale-28'></div>
                <div id='36' className='thinscale-0 thinscale-29'></div>
                <div id='38' className='thinscale-0 thinscale-30'></div>
                <div id='39' className='thinscale-0 thinscale-31'></div>
                <div id='40' className='thinscale-0 thinscale-32'></div>
                <div id='41' className='thinscale-0 thinscale-33'></div>
                <div id='42' className='thinscale-0 thinscale-34'></div>
                <div id='44' className='thinscale-0 thinscale-35'></div>
                <div id='45' className='thinscale-0 thinscale-36'></div>
                <div id='46' className='thinscale-0 thinscale-37'></div>
                <div id='47' className='thinscale-0 thinscale-38'></div>
                <div id='48' className='thinscale-0 thinscale-39'></div>
                <div id='50' className='value-0'>0</div>
                <div id='51' className='value-0 value-1'>30</div>
                <div id='52' className='value-0 value-2'>60</div>
                <div id='53' className='value-0 value-3'>90</div>
                <div id='54' className='value-0 value-4'>120</div>
                <div id='55' className='value-0 value-5'>150</div>
                <div id='56' className='value-0 value-6'>180</div>
                <div id='57' className='value-0 value-7'>210</div>
                <div id='58' className='value-0 value-8'>240</div>
            </div>
            <div className='outlinehide'></div>
            <div id='100' className='inneroutline'></div>
            {/* <div className='inneroutline-mask'></div> */}
            <div className='inneroutlinehide'></div>
            <div className='intext'>
                <div className='intext-1'>SPEED</div>
                <div className='intext-2'>{speed}</div>
                <div className='intext-1'>Kmph</div>
            </div>
        </div>
    )
}

export default Speedometer;