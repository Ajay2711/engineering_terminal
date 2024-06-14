import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import './switch.css';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className='Toggle-div'>
      <button className={`Toggle ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
        <div className={`Toggle-knob ${isOn ? 'knob-on' : 'knob-off'}`}>
          {isOn ? <i class="ri-moon-line"></i> : <i class="ri-sun-line"></i>}
        </div>
        <div className={`Toggle-text ${isOn ? 'text-on' : 'text-off'}`}>{isOn ? 'NIGHT MODE' : 'DAY MODE'}</div>
      </button>
    </div>
    // <div className='try-div'>
    //   <div className='alttext'>Altitude</div>
    //   <div className='alttext-1'>123 ft</div>
    //   <div className='up'></div>
    //   <div className='alttext-2'>24 ft</div>
    //   <img src="alt.png" style={{position:'absolute',left:'180px',top:'30px',height:'80px',width:'80px'}}></img>
    // </div>
  );
};

export default ToggleButton;
