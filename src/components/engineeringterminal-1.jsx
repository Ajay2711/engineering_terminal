import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './engstyles-1.css';
import Propeller from './propellers.jsx';
import { ReactComponent as Wing1 } from './copterwing-1.svg';
import { ReactComponent as Flap1 } from './flap.svg';
import { ReactComponent as Flap2 } from './flap.svg';
// import "./header.css";

function Terminal1() {

        // State to hold the data
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get('https://missionplanner-api.onrender.com/tdata-data');
                setData(response.data);
                setLoading(false);
                setTimeout(fetchData, 5);
              }
              catch(error) {
                setError(error);
                setLoading(false);
                setTimeout(fetchData, 5);
            }
        };  
        fetchData();
        return () => clearTimeout(fetchData);
        },[]);
    
        const [messages, setMessages] = useState('');

        const [status, setStatus] = useState('Fetching messages...');
    
        
        useEffect(() => {
          const fetchMessages = async () => {
            try {
              const response = await axios.get('https://missionplanner-api.onrender.com/messages-data');
              const data = response.data; 
              setMessages(data.m_StringValue);
              setStatus('Messages fetched successfully');
            //   console.log("messages are",messages);
            } catch (error) {
            //   console.error('Error fetching messages data:', error);
              setStatus('Error fetching messages');
            }
          };
          fetchMessages();
          const fetchInterval = setInterval(fetchMessages, 5);
          return () => {
            clearInterval(fetchInterval); // Clear interval when component unmounts
          };
        }, []); 
          
    
        const [altitude, setAltitude] = useState(null); 
        const [yaw, setYaw] = useState(null);
        const [pitch, setPitch] = useState(null);
        const [roll, setRoll] = useState(null);
        const [batteryVoltage, setBatteryVoltage] = useState(null);
        const [batteryCurrent, setBatteryCurrent] = useState(null);
        const [batteryTemp, setBatteryTemp] = useState(null);
        const [batteryRemainingMinutes, setBatteryRemainingMinutes] = useState(null);
        const [vibrationX, setVibrationX] = useState(null);
        const [vibrationY, setVibrationY] = useState(null);
        const [vibrationZ, setVibrationZ] = useState(null);
        const [airspeed, setAirspeed] = useState(null);
        const [verticalSpeed, setVerticalSpeed] = useState(null);
        const [groundSpeed, setGroundSpeed] = useState(null);
        const [distanceTraveled, setDistanceTraveled] = useState(null);
        const [distanceFromMovingBase, setDistanceFromMovingBase] = useState(null);
        const [waypointDistance, setWaypointDistance] = useState(null);
        const [gpsStatus, setGpsStatus] = useState(null);
        const [gps, setGps] = useState(null);
        const [motorControl, setMotorControl] = useState(null);
        const [climbRate, setClimbRate] = useState(null);
        const [ekfStatus, setEkfStatus] = useState(null);
        const [ekfFlags, setEkfFlags] = useState(null);
        const [ekfVelocityVariance, setEkfVelocityVariance] = useState(null);
        const [ekfCompassVariance, setEkfCompassVariance] = useState(null);
        const [ekfHorizontalPositionVariance, setEkfHorizontalPositionVariance] = useState(null);
        const [ekfVerticalPositionVariance, setEkfVerticalPositionVariance] = useState(null);
        const [ekfTerrainAltitude, setEkfTerrainAltitude] = useState(null);
        const [ekfTerrainAltitudeError, setEkfTerrainAltitudeError] = useState(null);
        const [navigationRoll, setNavigationRoll] = useState(null);
        const [navigationPitch, setNavigationPitch] = useState(null);
        const [navigationBearing, setNavigationBearing] = useState(null);
        const [altitudeError, setAltitudeError] = useState(null);
        const [airspeedError, setAirspeedError] = useState(null);
        const [latitude, setLatitude] = useState(null);
        const [longitude, setLongitude] = useState(null);
        const [terrainCurrentAltitude, setTerrainCurrentAltitude] = useState(null);
        const [satelliteCount, setSatelliteCount] = useState(null);
        const [gyroX, setGyroX] = useState(null);
        const [gyroY, setGyroY] = useState(null);
        const [gyroZ, setGyroZ] = useState(null);
        const [accelerationX, setAccelerationX] = useState(null);
        const [accelerationY, setAccelerationY] = useState(null);
        const [accelerationZ, setAccelerationZ] = useState(null);
        const [magneticFieldX, setMagneticFieldX] = useState(null);
        const [magneticFieldY, setMagneticFieldY] = useState(null);
        const [magneticFieldZ, setMagneticFieldZ] = useState(null);
        const [mode,setMode]=useState(null);
        const [message,setMessage]=useState(null);
        const [disttohome,setDisttohome]=useState(null);
        const [boardvoltage,setBoardvoltage]=useState(null);
        const [sgyroX, setSgyroX] = useState(null);
        const [sgyroY, setSgyroY] = useState(null);
        const [sgyroZ, setSgyroZ] = useState(null);
        const [saccelerationX, setSaccelerationX] = useState(null);
        const [saccelerationY, setSaccelerationY] = useState(null);
        const [saccelerationZ, setSaccelerationZ] = useState(null);
        const [smagneticFieldX, setSmagneticFieldX] = useState(null);
        const [smagneticFieldY, setSmagneticFieldY] = useState(null);
        const [smagneticFieldZ, setSmagneticFieldZ] = useState(null);
        //const [satcount,setSatcount]=useState(null);
        const [throttle,setThrottle]=useState(null);
        const [sensors,setSensors]=useState(null);
        const [abspressure,setAbspressure]=useState(null);
        const [diffpressure,setDiffpressure]=useState(0);
        const [chin1,setChin1]=useState(null);
        const [chin2,setChin2]=useState(null);
        const [chin3,setChin3]=useState(null);
        const [chin4,setChin4]=useState(null);
        const [chin5,setChin5]=useState(null);
        const [chin6,setChin6]=useState(null);
        const [chin7,setChin7]=useState(null);
        const [chin8,setChin8]=useState(null);
        const [chin9,setChin9]=useState(null);
        const [chin10,setChin10]=useState(null);
        const [chin11,setChin11]=useState(null);
        const [chin12,setChin12]=useState(null);
        const [chin13,setChin13]=useState(null);
        const [chin14,setChin14]=useState(null);
        const [chin15,setChin15]=useState(null);
        const [chin16,setChin16]=useState(null);
        const [chout1, setChout1] = useState(null);
        const [chout2, setChout2] = useState(null);
        const [chout3, setChout3] = useState(null);
        const [chout4, setChout4] = useState(null);
        const [chout5, setChout5] = useState(null);
        const [chout6, setChout6] = useState(null);
        const [chout7, setChout7] = useState(null);
        const [chout8, setChout8] = useState(null);
        const [chout9, setChout9] = useState(null);
        const [chout10, setChout10] = useState(null);
        const [chout11, setChout11] = useState(null);
        const [chout12, setChout12] = useState(null);
        const [chout13, setChout13] = useState(null);
        const [chout14, setChout14] = useState(null);
        const [chout15, setChout15] = useState(null);
        const [chout16, setChout16] = useState(null);
        const [batteryremaining, setBatteryremaining] = useState(null);
        const [connection, setConnection] = useState(null);
        const [wpno,setWpno]=useState(null)
        const [hwvoltage,setHwvoltage]=useState(null)
        const [servovoltage,setServovoltage]=useState(null)
        const [battusedmah,setBattusedmah]=useState(null)
        const [battkmleft,setBattkmleft]=useState(0)
        const [battcolor,setBattcolor]=useState(null);
        const [batteryPercentage, setBatteryPercentage] = useState(null);
        const [showdiv,setShowdiv]=useState(false);
        const [closed, setClosed] = useState(false);
        const [rpm, setRpm]=useState(false);



        //preflight checks colors...
        const [precolor1, setPrecolor1] = useState('green');
        const [precolor2, setPrecolor2] = useState('green');
        const [precolor3, setPrecolor3] = useState('green');
        const [precolor4, setPrecolor4] = useState('green');

        useEffect(() => {
            // Update color based on percentage
            if (gps < 3) {
              setPrecolor1('red');
            } else if (gps >= 3) {
              setPrecolor1('rgb(0, 255, 0)');
            }
        }, [gps]);



        useEffect(() => {
            // Update color based on percentage
            if (satelliteCount < 5) {
              setPrecolor2('red');
            } else if (satelliteCount >=5) {
              setPrecolor2('rgb(0, 255, 0)');
            }
        }, [satelliteCount]);


        useEffect(() => {
            // Update color based on percentage
            if (connection < 95) {
              setPrecolor3('red');
            } else if (connection >= 95) {
              setPrecolor3('rgb(0, 255, 0)');
            }
        }, [connection]);


        useEffect(() => {
            // Update color based on voltage
            if (batteryPercentage < 20) {
              setPrecolor4('red');
            } else if (batteryPercentage >= 20) {
              setPrecolor4('rgb(0, 255, 0)');
            }
        }, [batteryPercentage]);




        //ekf-consts and useeffects...
        const [color1, setColor1] = useState('green');
        const [color2, setColor2] = useState('green');
        const [color3, setColor3] = useState('green');
        const [color4, setColor4] = useState('green');
        const [color5, setColor5] = useState('green');
        const [color6, setColor6] = useState('green');

        useEffect(() => {
          // Update color based on percentage
          if (ekfCompassVariance <= 0.5) {
            setColor1('green');
          } else if (ekfCompassVariance >= 0.5 && ekfCompassVariance<=0.8) {
            setColor1('orange');
          } else {
            setColor1('red');
          }
        }, [ekfCompassVariance]);

        useEffect(() => {
            if (ekfVelocityVariance <= 0.5) {
              setColor2('green');
            } else if (ekfVelocityVariance >= 0.5 && ekfVelocityVariance<=0.8) {
              setColor2('orange');
            } else {
              setColor2('red');
            }
        }, [ekfVelocityVariance]);

        useEffect(() => {
            if (ekfHorizontalPositionVariance <= 0.5) {
              setColor3('green');
            } else if (ekfHorizontalPositionVariance >= 0.5 && ekfHorizontalPositionVariance<=0.8) {
              setColor3('orange');
            } else {
              setColor3('red');
            }
        }, [ekfHorizontalPositionVariance]);

        useEffect(() => {
            if (ekfVerticalPositionVariance <= 0.5) {
              setColor4('green');
            } else if (ekfVerticalPositionVariance >= 0.5 && ekfVerticalPositionVariance<=0.8) {
              setColor4('orange');
            } else {
              setColor4('red');
            }
        }, [ekfVerticalPositionVariance]);

        useEffect(() => {
            if (ekfTerrainAltitude <= 0.5) {
              setColor5('green');
            } else if (ekfTerrainAltitude >= 0.5 && ekfTerrainAltitude<=0.8) {
              setColor5('orange');
            } else {
              setColor5('red');
            }
        }, [ekfTerrainAltitude]);

        useEffect(() => {
            if (ekfStatus <= 0.5) {
              setColor6('green');
            } else if (ekfStatus >= 0.5 && ekfStatus<=0.8) {
              setColor6('orange');
            } else {
              setColor6('red');
            }
        }, [ekfStatus]);


        //battery
        useEffect(() => {
            // Update color based on percentage
            if (batteryPercentage <= 25) {
                setBattcolor('red')
            } else if (batteryPercentage > 25 && batteryPercentage<=75) {
                setBattcolor('orange')
            }
            // else if (connection > 50 && connection<=75) {
            //     setSigcolor1('rgb(0, 255, 0)')
            // }
            else if (batteryPercentage > 75 && batteryPercentage<=100) {
                setBattcolor('rgb(0, 255, 0)')
            }
        }, [batteryPercentage]);


        //signal strength and useeffects
        const [sigcolor1, setSigcolor1] = useState('green');
        const [sigcolor2, setSigcolor2] = useState('green');
        const [sigcolor3, setSigcolor3] = useState('green');
        const [sigcolor4, setSigcolor4] = useState('green');

        useEffect(() => {
            if (connection <= 25) {
                setSigcolor1('red')
                setSigcolor2('white')
                setSigcolor3('white')
                setSigcolor4('white')
            } else if (connection > 25 && connection<=50) {
                setSigcolor1('red')
                setSigcolor2('red')
                setSigcolor3('white')
                setSigcolor4('white')
            }
            else if (connection > 50 && connection<=75) {
                setSigcolor1('rgb(0, 255, 0)')
                setSigcolor2('rgb(0, 255, 0)')
                setSigcolor3('rgb(0, 255, 0)')
                setSigcolor4('white')
            }
            else if (connection > 75 && connection<=100) {
                setSigcolor1('rgb(0, 255, 0)')
                setSigcolor2('rgb(0, 255, 0)')
                setSigcolor3('rgb(0, 255, 0)')
                setSigcolor4('rgb(0, 255, 0)')
            }
        }, [connection]);

        // Simulating real-time data update
        // useEffect(() => {
        //     const interval = setInterval(() => {
        //         setBatteryPercentage(Math.floor(Math.random() * 101));
        //     }, 2000);
        //     return () => clearInterval(interval);
        // }, []);

        //header consts and useeffects
        const [degree, setDegree] = useState(null);
        const [a, setA] = useState(null);
        const [b, setB] = useState(null);
        const [c, setC] = useState(null);
        const [d, setD] = useState(null);
        const [e, setE] = useState(null);


        const degrees = {};
        for (let i = 0; i < 361; i++) {
            degrees[i] = i;
        }
        degrees[0] = "N";
        degrees[45] = "NE";
        degrees[90] = "E";
        degrees[135] = "SE";
        degrees[180] = "S";
        degrees[225] = "SW";
        degrees[270] = "W";
        degrees[315] = "NW";

        useEffect(() => {
            setA(degrees[(degree - 2 + 360) % 360]);
            setB(degrees[(degree - 1 + 360) % 360]);
            setC(degrees[degree % 360]);
            setD(degrees[(degree + 1) % 360]);
            setE(degrees[(degree + 2) % 360]);
        },[degree]);


        useEffect(() => {
            if((precolor1==='red' || precolor2==='red' || precolor3==='red' || precolor4==='red') &&  !closed)
            {
                setShowdiv(true);
            }
            if(precolor1==='rgb(0, 255, 0)' && precolor2==='rgb(0, 255, 0)' && precolor3==='rgb(0, 255, 0)' && precolor4==='rgb(0, 255, 0)')
            {
                setShowdiv(false);
            }
        },[precolor1,precolor2,precolor3,precolor4]);


        useEffect(() => {
            if (isNaN(parseInt(data?.Target?.input?.battery_kmleft))) {
                setBattkmleft(null);
              } else {
                setBattkmleft(data?.Target?.input?.battery_kmleft.toFixed(1));
            }
            setRpm(data?.Target?.input?.battery_usedmah.toFixed(1))
            // setBattkmleft(data?.Target?.input?.battery_kmleft.toFixed(1));
            setBattusedmah(data?.Target?.input?.battery_usedmah.toFixed(1));
            setServovoltage(data?.Target?.input?.servovoltage.toFixed(1));
            setHwvoltage(data?.Target?.input?.hwvoltage.toFixed(1));
            setWpno(data?.Target?.input?.wpno);
            setDegree(parseInt(data?.Target?.input?.yaw));
            setBatteryPercentage(data?.Target?.input?.battery_remaining.toFixed(0));
            setBatteryremaining(data?.Target?.input?.battery_remaining.toFixed(2));
            setConnection(data?.Target?.input?.linkqualitygcs);
            setChin1(data?.Target?.input?.ch1in.toFixed(1));
            setChin2(data?.Target?.input?.ch2in.toFixed(1));
            setChin3(data?.Target?.input?.ch3in.toFixed(1));
            setChin4(data?.Target?.input?.ch4in.toFixed(1));
            setChin5(data?.Target?.input?.ch5in.toFixed(1));
            setChin6(data?.Target?.input?.ch6in.toFixed(1));
            setChin7(data?.Target?.input?.ch7in.toFixed(1));
            setChin8(data?.Target?.input?.ch8in.toFixed(1));
            setChin9(data?.Target?.input?.ch9in.toFixed(1));
            setChin10(data?.Target?.input?.ch10in.toFixed(1));
            setChin11(data?.Target?.input?.ch11in.toFixed(1));
            setChin12(data?.Target?.input?.ch12in.toFixed(1));
            setChin13(data?.Target?.input?.ch13in.toFixed(1));
            setChin14(data?.Target?.input?.ch14in.toFixed(1));
            setChin15(data?.Target?.input?.ch15in.toFixed(1));
            setChin16(data?.Target?.input?.ch16in.toFixed(1));
            // setChin10(data?.Target?.input?.ch10in.toFixed(2));
            setChout1(data?.Target?.input?.ch1out.toFixed(1));
            setChout2(data?.Target?.input?.ch2out.toFixed(1));
            setChout3(data?.Target?.input?.ch3out.toFixed(1));
            setChout4(data?.Target?.input?.ch4out.toFixed(1));
            setChout5(data?.Target?.input?.ch5out.toFixed(1));
            setChout6(data?.Target?.input?.ch6out.toFixed(1));
            setChout7(data?.Target?.input?.ch7out.toFixed(1));
            setChout8(data?.Target?.input?.ch8out.toFixed(1));
            setChout9(data?.Target?.input?.ch9out.toFixed(1));
            setChout10(data?.Target?.input?.ch10out.toFixed(1));
            setChout11(data?.Target?.input?.ch11out.toFixed(1));
            setChout12(data?.Target?.input?.ch12out.toFixed(1));
            setChout13(data?.Target?.input?.ch13out.toFixed(1));
            setChout14(data?.Target?.input?.ch14out.toFixed(1));
            setChout15(data?.Target?.input?.ch15out.toFixed(1));
            setChout16(data?.Target?.input?.ch16out.toFixed(1));
            // setChout9(data?.Target?.input?.ch9out.toFixed(2));
            // setChout10(data?.Target?.input?.ch10out.toFixed(2));
            //setDiffpressure(data?.Target?.input?.press_diff.toFixed(1));
            setDiffpressure(data?.Target?.input?.differential_pressure);
            setAbspressure(data?.Target?.input?.press_abs.toFixed(1));
            setSensors(data?.Target?.input?.sensors?.value);
            setThrottle(data?.Target?.input?.ch3percent.toFixed(2));
            setSatelliteCount(data?.Target?.input?.satcount);
            setSgyroX(data?.Target?.input?.gx2.toFixed(1));
            setSgyroY(data?.Target?.input?.gy2.toFixed(1));
            setSgyroZ(data?.Target?.input?.gy2.toFixed(1));
            setSaccelerationX(data?.Target?.input?.ax2.toFixed(1));
            setSaccelerationY(data?.Target?.input?.ay2.toFixed(1));
            setSaccelerationZ(data?.Target?.input?.az2.toFixed(0));
            setSmagneticFieldX(data?.Target?.input?.mx2.toFixed(1));
            setSmagneticFieldY(data?.Target?.input?.my2.toFixed(1));
            setSmagneticFieldZ(data?.Target?.input?.mz2.toFixed(1));
            setBoardvoltage(data?.Target?.input?.boardvoltage.toFixed(2));
            setDisttohome(data?.Target?.input?.DistToHome.toFixed(2));
            setMode(data?.Target?.input?.mode);
            setMessage(data?.Target?.input?.message);
            setAltitude(data?.Target?.input?.alt.toFixed(2));
            setYaw(data?.Target?.input?.yaw.toFixed(2));
            setPitch(data?.Target?.input?.pitch.toFixed(2));
            setRoll(data?.Target?.input?.roll.toFixed(2));
            setBatteryVoltage(data?.Target?.input?.battery_voltage.toFixed(2));
            setBatteryCurrent(data?.Target?.input?.current.toFixed(2));
            setBatteryTemp(data?.Target?.input?.battery_temp);
            setBatteryRemainingMinutes(data?.Target?.input?.battery_remaining.toFixed(2));
            setVibrationX(data?.Target?.input?.vibex);
            setVibrationY(data?.Target?.input?.vibey);
            setVibrationZ(data?.Target?.input?.vibez);
            setAirspeed(data?.Target?.input?.airspeed.toFixed(2));
            setVerticalSpeed(data?.Target?.input?.verticalspeed.toFixed(2));
            setGroundSpeed(data?.Target?.input?.groundspeed.toFixed(2));
            setDistanceTraveled(data?.Target?.input?.distTraveled.toFixed(1));
            setDistanceFromMovingBase(data?.Target?.input?.DistFromMovingBase);
            setWaypointDistance(data?.Target?.input?.wp_dist.toFixed(2));
            setGpsStatus(data?.Target?.input?.gps);
            setGps(data?.Target?.input?.gpsstatus);
            setMotorControl(data?.Target?.input?.motor_control);
            setClimbRate(data?.Target?.input?.climbrate.toFixed(2));
            setEkfStatus(data?.Target?.input?.ekfstatus);
            setEkfFlags(data?.Target?.input?.ekfflags);
            setEkfVelocityVariance(data?.Target?.input?.ekfvelv);
            setEkfCompassVariance(data?.Target?.input?.ekfcompv);
            setEkfHorizontalPositionVariance(data?.Target?.input?.ekfposhor);
            setEkfVerticalPositionVariance(data?.Target?.input?.ekfposvert);
            setEkfTerrainAltitude(data?.Target?.input?.ekfteralt);
            setNavigationRoll(data?.Target?.input?.nav_roll.toFixed(2));
            setNavigationPitch(data?.Target?.input?.nav_pitch.toFixed(2));
            setNavigationBearing(data?.Target?.input?.nav_bearing);
            setAltitudeError(data?.Target?.input?.alt_error.toFixed(2));
            setAirspeedError(data?.Target?.input?.aspd_error);
            setLatitude(data?.Target?.input?.lat);
            setLongitude(data?.Target?.input?.lng);
            setTerrainCurrentAltitude(data?.Target?.input?.ter_curalt);
            setSatelliteCount(data?.Target?.input?.satcount);
            setGyroX(data?.Target?.input?.gx);
            setGyroY(data?.Target?.input?.gy);
            setGyroZ(data?.Target?.input?.gz);
            setAccelerationX(data?.Target?.input?.ax);
            setAccelerationY(data?.Target?.input?.ay);
            setAccelerationZ(data?.Target?.input?.az);
            setMagneticFieldX(data?.Target?.input?.mx);
            setMagneticFieldY(data?.Target?.input?.my); 
            setMagneticFieldZ(data?.Target?.input?.mz);  
        }, [data]);
        // if (loading) return <p>Loading...</p>;
        // if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='Root-container'>
            {/* <div className='Preflightdiv'>
                <div className='Container' style={{top:'10%',color:'white'}}>PRE-FLIGHT CHECKS</div>
                <div className='Container' style={{justifyContent:'space-around',width:'90%',top:'30%'}}>
                    <div className='Preflightin' style={{color:precolor1}}>Verify Gps  - 3<div className='Preflightright'>/10</div></div>
                    <div className='Preflightin' style={{color:precolor2}}>Gps Sat Count  - 10<div className='Preflightright'>/10</div></div>
                </div>
                <div className='Container' style={{justifyContent:'space-around',width:'90%',top:'70%'}}>
                    <div className='Preflightin' style={{color:precolor3}}>Telemetry Signal  - 100%<div className='Preflightright'>/10</div></div>
                    <div className='Preflightin' style={{color:precolor4}}>Battery Level  - 100%<div className='Preflightright'>/10</div></div>
                </div>
            </div> */}
            <div className='Divtop'>
                <div className='Grbox' style={{height:'90%',width:'97%'}}>
                    <div className='Container' style={{width:'90%',justifyContent:'space-around',alignItems:'center'}}>
                        <div className='Colgrp'>
                            <div className='Texttop'>DISTANCE</div>
                            <div className='Textbox'>{distanceTraveled}</div>
                            <div className='Measures'>M</div>
                        </div>
                        <div className='Colgrp'>
                            <div className='Texttop'>DISTANCE TO HOME</div>
                            <div className='Textbox'>{disttohome}</div>
                            <div className='Measures'>M</div>
                        </div>
                        <div className="heading">
                            <div className="heading-arrow">
                                {/* <i className="ri-triangle-fill"></i> */}
                                {/* <img className="ri-triangle-fill" src={Triangle}></img>  */}
                                <div className='triangle-down'></div>
                            </div>
                            <div className="values">
                                <span className="val" style={{width:'10px'}}>{a}</span>
                                <span className="val" style={{width:'10px'}}>{b}</span>
                                <span className="val" style={{width:'10px'}}>{c}</span>
                                <span className="val" style={{width:'10px'}}>{d}</span>
                                <span className="val" style={{width:'10px'}}>{e}</span>
                            </div>
                        </div>
                        <div className='Colgrp'>
                            <div className='Texttop'>ALT</div>
                            <div className='Textbox'>{altitude}</div>
                            <div className='Measures'>M</div>
                        </div>
                        <div className='Colgrp'>
                            <div className='Texttop'>SPEED</div>
                            <div className='Textbox'>{airspeed}</div>
                            <div className='Measures'>M/S</div>
                        </div>
                        {/* <div className='Colgrp'>
                            <div className='Rowgrpsig' style={{height:'4vh',width:'1.7vw',marginBottom:'7px'}}>
                                <div style={{height:'25%',width:'15%',backgroundColor:sigcolor1}}></div>
                                <div style={{height:'50%',width:'15%',backgroundColor:sigcolor2}}></div>
                                <div style={{height:'75%',width:'15%',backgroundColor:sigcolor3}}></div>
                                <div style={{height:'100%',width:'15%',backgroundColor:sigcolor4}}></div>
                            </div>
                            <div className='Measures'>{connection}%</div>
                        </div> */}
                        <div className='Colgrp' style={{position:'absolute',left:'102.5%',top:'7%'}}>
                            <div className='Rowgrpsig' style={{height:'3vh',width:'1.5vw',marginBottom:'7px'}}>
                                <div style={{height:'25%',width:'15%',backgroundColor:sigcolor1}}></div>
                                <div style={{height:'50%',width:'15%',backgroundColor:sigcolor2}}></div>
                                <div style={{height:'75%',width:'15%',backgroundColor:sigcolor3}}></div>
                                <div style={{height:'100%',width:'15%',backgroundColor:sigcolor4}}></div>
                            </div>
                            <div className='Measures'>{connection}%</div>
                        </div>
                    </div>
                    <div style={{ position:'absolute',backgroundColor: 'white', height: '0.1%', width: '90%',top:'52%',left:'5%'}}></div>
                    <div className='Container' style={{width:'90%',top:'58%'}}>
                        <div className='Colgrp'>
                            <div className='Texttop'>FLYING TYPE</div>
                            <div className='Textbox'>vtol</div>
                        </div>
                        {/* <div className='Colgrp'>
                            <div className='Texttop'>MISSION</div>
                            <div className='Rowgrp'>
                                <div className='Textbox'></div>
                                <div className='Measures'>%</div>
                            </div>
                        </div> */}
                        <div className='Colgrp'>
                            <div className='Texttop'>WAY POINT</div>
                            <div className='Rowgrp'>
                                <div className='Textbox' style={{justifyContent:'center'}}>{wpno}</div>
                                <div className='Measures'></div>
                            </div>
                        </div>
                        <div className='Colgrp'>
                            <div className='Texttop'>FLIGHT MODE</div>
                            <div className='Textbox' style={{width:'80%'}}>{mode}</div>
                        </div>
                        <div className='Colgrp'>
                            <div className='Texttop'>THROTTLE</div>
                            <div className='Rowgrp'>
                                <div className='Textbox'>{throttle}</div>
                                <div className='Measures'>%</div>
                            </div>
                        </div>
                        <div className='Colgrp'>
                            <div className='Texttop'>CLIMB</div>
                            <div className='Rowgrp'>
                                <div className='Textbox'>{climbRate}</div>
                                <div className='Measures'>%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Divmiddle'>
                <div className='Divcol' style={{width:'25%',height:'100%',justifyContent:'space-between'}}>
                    <div className='Grbox' style={{height:'39%'}}>
                        <div className='Text' style={{position:'absolute',top:'35%',left:'7%',width:'10%'}}>POWER STATUS</div>
                        <div style={{ position:'absolute',backgroundColor: 'white', height: '80%', width: '0.1%',top:'10%',left:'25%'}}></div>
                        <div className='Rowgrp' style={{position:'absolute',top:'10%',left:'30%'}}>
                            <div className='Text' style={{width:'10.5em'}}>VCE BOARD VOLTAGE :</div>
                            <div className='Textbox'>{boardvoltage}</div>
                            <div className='Measures'>volts</div>
                        </div>
                        <div className='Rowgrp' style={{position:'absolute',top:'50%',left:'35%'}}>
                            <div className='Text' style={{width:'8.9em'}}>OUTPUT VOLTAGE :</div>
                            <div className='Textbox'>{servovoltage}</div>
                            <div className='Measures'>volts</div>
                        </div>
                    </div>
                    <div className='Grbox' style={{height:'54%'}}>
                        <div className='Text'>ATITTUDE</div>
                        <div className='Container' style={{width:'90%',top:'20%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'3.5em',display:'flex',justifyContent:'right'}}>ROLL :</div>
                                <div className='Textbox'>{roll}</div>
                                <div className='Measures'>DEG</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'5.5em'}}>AIR_SPEED :</div>
                                <div className='Textbox'>{airspeed}</div>
                                <div className='Measures'>M/S</div>
                            </div>
                        </div>
                        <div className='Container' style={{width:'90%',top:'45%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'3.5em',display:'flex',justifyContent:'right'}}>PITCH :</div>
                                <div className='Textbox'>{pitch}</div>
                                <div className='Measures'>DEG</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'8.1em'}}>GROUND_SPEED :</div>
                                <div className='Textbox'>{groundSpeed}</div>
                                <div className='Measures'>M/S</div>
                            </div>
                        </div>
                        <div className='Container' style={{width:'90%',top:'70%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'3.5em',display:'flex',justifyContent:'right'}}>YAW :</div>
                                <div className='Textbox'>{yaw}</div>
                                <div className='Measures'>DEG</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'8.1em'}}>VERTICAL_SPEED :</div>
                                <div className='Textbox'>{verticalSpeed}</div>
                                <div className='Measures'>M/S</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Messagebox' style={{marginLeft:'0.6%',marginRight:'0.6%'}}>
                    <div className='Text' style={{paddingTop:'1.5%',paddingBottom:'0.3%'}}>MESSAGES</div>
                    {/* <div className='Messages'>{messages}</div> */}
                    <pre className='Messages'>{messages}</pre>
                    <div>
                        <button className='myButton' onClick={()=>setShowdiv(true)}>pre-flight checks</button>
                        {showdiv && (
                            <div className='Preflightdiv1'>
                                <button className='closebutton' onClick={() => { setShowdiv(false); setClosed(true); }}>Close</button>
                                <div className='Container' style={{top:'10%',color:'white'}}>PRE-FLIGHT CHECKS</div>
                                <div className='Container' style={{justifyContent:'space-around',width:'90%',top:'30%'}}>
                                    <div className='Preflightin' style={{color:precolor1,width:'30%'}}>Verify Gps  - {gps}<div className='Preflightright'></div></div>
                                    <div className='Preflightin' style={{color:precolor2,width:'30%'}}>Gps Sat Count  - {satelliteCount}<div className='Preflightright'></div></div>
                                </div>
                                <div className='Container' style={{justifyContent:'space-around',width:'90%',top:'70%'}}>
                                    <div className='Preflightin' style={{color:precolor3,width:'30%'}}>Telemetry Signal  - {connection}<div className='Preflightright'></div></div>
                                    <div className='Preflightin' style={{color:precolor4,width:'30%'}}>Battery Level  - {batteryPercentage}<div className='Preflightright'></div></div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                    {/* <div className='Preflightchecks'>
                        <div className='Container' style={{justifyContent:'space-around',width:'90%',top:'70%'}}>
                            <div style={{fontSize:'0.9vw',color:'red'}}>Verify Gps</div>
                            <div style={{fontSize:'0.9vw',color:'red'}}>Gps Sat Count</div>
                        </div>
                        <div className='Container' style={{justifyContent:'space-around',width:'90%',top:'83%'}}>
                            <div style={{fontSize:'0.9vw',color:'red'}}>Telemetry Signal</div>
                            <div style={{fontSize:'0.9vw',color:'red'}}>Battery Level</div>
                        </div>
                    </div> */}
                </div>
                <div className='Grbox' style={{width:'24.5%'}}>
                    <div className='Text' style={{paddingTop:'1.5%'}}>BATTERY</div>
                    <div className='Container' style={{width:'80%',top:'20%'}}>
                        <div className='Colgrp'>
                            <div className='Text'>VOLTAGE</div>
                            <div className='Rowgrp'>
                                <div className='Textbox'>{batteryVoltage}</div>
                                <div className='Measures'>VOLTS</div>
                            </div>
                        </div>
                        <div className='Colgrp'>
                            <div className='Text'>CURRENT</div>
                            <div className='Rowgrp'>
                                <div className='Textbox'>{batteryCurrent}</div>
                                <div className='Measures'>A</div>
                            </div>
                        </div>
                        <div className='Colgrp'>
                            <div className='Text'>TEMP</div>
                            <div className='Rowgrp'>
                                <div className='Textbox'>{batteryTemp}</div>
                                <div className='Measures'>DEG</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ position:'absolute',backgroundColor: 'white', height: '0.1%', width: '90%',top:'48%',left:'5%'}}></div>
                    <div className='battery-group'>
                        <div className='battery-top'></div>
                        <div className='battery'>
                            <div className='battery-inline'>
                                <div className='battery-level' style={{backgroundColor: battcolor , height: `${batteryPercentage}%`}}></div>
                            </div>
                            {/* <div className='battery-cell'></div>
                            <div className='battery-cell'></div>
                            <div className='battery-cell'></div> */}
                        </div>
                    </div>
                    <div className='Rowgrp' style={{position:'absolute',top:'50%'}}>
                        <div className='Text' style={{width:'11em',display:'flex',justifyContent:'right'}}>BATT_USED(mah) :</div>
                        <div className='Textbox'>{battusedmah}</div>
                        <div className='Measures' style={{width:'2em',display:'flex',justifyContent:'left'}}>mah</div>
                    </div>
                    <div className='Rowgrp' style={{position:'absolute',top:'66%'}}>
                        <div className='Text' style={{width:'11em',display:'flex',justifyContent:'right'}}>REMAINING BATTERY :</div>
                        <div className='Textbox'>{batteryremaining}</div>
                        <div className='Measures' style={{width:'2em',display:'flex',justifyContent:'left'}}>%</div>
                    </div>
                    <div className='Rowgrp' style={{position:'absolute',top:'82%'}}>
                        <div className='Text' style={{width:'11em',display:'flex',justifyContent:'right'}}>BATT_KM REMAINING :</div>
                        <div className='Textbox'>{battkmleft}</div>
                        <div className='Measures' style={{width:'2em',display:'flex',justifyContent:'left'}}>km</div>
                    </div>
                </div>
            </div>
            <div className='Divbottom'>
                <div className='Trbox' style={{height:'98%',width:'49.5%',top:'1%',marginRight:'0.3%'}}>
                    <div className='Divrow' style={{height:'30%'}}>
                        <div className='Grbox' style={{width:'70%',top:'7%',marginRight:'0.3%'}}>
                            <div className='Text'>EKF STATUS</div>
                            <div className='Container' style={{width:'90%',top:'25%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'6em',display:'flex',justifyContent:'right'}}>COMPASS :</div>
                                    <div className='Textbox-spl'>
                                        <div className='Textbox-fill' style={{backgroundColor: color1 , width: `${ekfCompassVariance*100}%`}}><div style={{paddingLeft:'0.15em'}}>{ekfCompassVariance}</div></div>
                                    </div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'6em',display:'flex',justifyContent:'right'}}>VELOCITY :</div>
                                    <div className='Textbox-spl'>
                                        <div className='Textbox-fill' style={{backgroundColor: color2 , width: `${ekfVelocityVariance*100}%`}}><div style={{paddingLeft:'0.1em'}}>{ekfVelocityVariance}</div></div>
                                    </div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'6em',display:'flex',justifyContent:'right'}}>HORZ_POS :</div>
                                    <div className='Textbox-spl'>
                                        <div className='Textbox-fill' style={{backgroundColor: color3 , width: `${ekfHorizontalPositionVariance*100}%`}}><div style={{paddingLeft:'0.1em'}}>{ekfHorizontalPositionVariance}</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className='Container' style={{width:'90%',top:'60%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'6em',display:'flex',justifyContent:'right'}}>VERT_POS :</div>
                                    <div className='Textbox-spl'>
                                        <div className='Textbox-fill' style={{backgroundColor: color4 , width: `${ekfVerticalPositionVariance*100}%`}}><div style={{paddingLeft:'0.1em'}}>{ekfVerticalPositionVariance}</div></div>
                                    </div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'6em',display:'flex',justifyContent:'right'}}>TERRIAN :</div>
                                    <div className='Textbox-spl'>
                                        <div className='Textbox-fill' style={{backgroundColor: color5 , width: `${ekfTerrainAltitude*100}%`}}><div style={{paddingLeft:'0.1em'}}>{ekfTerrainAltitude}</div></div>
                                    </div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'6em',display:'flex',justifyContent:'right'}}>STATUS :</div>
                                    <div className='Textbox-spl'>
                                        <div className='Textbox-fill' style={{backgroundColor: color6 , width: `${ekfStatus*100}%`}}><div style={{paddingLeft:'0.1em'}}>{ekfStatus}</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Grbox' style={{width:'25%',top:'7%'}}>
                            <div className='Text'>PRESSURE</div>
                            <div className='Container' style={{top:'25%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'6em',display:'flex',justifyContent:'right'}}>ABSOLUTE :</div>
                                    <div className='Textbox'>{abspressure}</div>
                                    <div className='Measures'>BAR</div>
                                </div>
                            </div>
                            <div className='Container' style={{top:'60%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'6.1em',display:'flex',justifyContent:'right'}}>DIFFERENCE :</div>
                                    <div className='Textbox'>0</div>
                                    <div className='Measures'>BAR</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Divrow' style={{height:'64%',justifyContent:'flex-start',marginLeft:'1.2%'}}>
                        <div className='Grbox' style={{width:'48%',top:'7%',marginRight:'0.3%'}}>
                            <div className='Text'>INPUTS</div>
                            <div className='Container' style={{width:'90%',top:'18%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>MOTOR_1 :</div>
                                    <div className='Textbox'>{chin1}</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>SERVO_1 :</div>
                                    <div className='Textbox'>{chin2}</div>
                                </div>
                            </div>
                            <div className='Container' style={{width:'90%',top:'36%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>MOTOR_2 :</div>
                                    <div className='Textbox'>{chin3}</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>SERVO_2 :</div>
                                    <div className='Textbox'>{chin4}</div>
                                </div>
                            </div>
                            <div className='Container' style={{width:'90%',top:'54%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>MOTOR_3 :</div>
                                    <div className='Textbox'>{chin5}</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>SERVO_3 :</div>
                                    <div className='Textbox'>{chin6}</div>
                                </div>
                            </div>
                            <div className='Container' style={{width:'90%',top:'72%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>MOTOR_4 :</div>
                                    <div className='Textbox'>{chin7}</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>SERVO_4 :</div>
                                    <div className='Textbox'>{chin8}</div>
                                </div>
                            </div>
                        </div>
                        <div className='Grbox' style={{width:'48%',top:'7%'}}>
                            <div className='Text'>OUTPUTS</div>
                            <div className='Container' style={{width:'90%',top:'18%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>MOTOR_1 :</div>
                                    <div className='Textbox'>{chout1}</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>SERVO_1 :</div>
                                    <div className='Textbox'>{chout2}</div>
                                </div>
                            </div>
                            <div className='Container' style={{width:'90%',top:'36%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>MOTOR_2 :</div>
                                    <div className='Textbox'>{chout3}</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>SERVO_2 :</div>
                                    <div className='Textbox'>{chout4}</div>
                                </div>
                            </div>
                            <div className='Container' style={{width:'90%',top:'54%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>MOTOR_3 :</div>
                                    <div className='Textbox'>{chout5}</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>SERVO_3 :</div>
                                    <div className='Textbox'>{chout6}</div>
                                </div>
                            </div>
                            <div className='Container' style={{width:'90%',top:'72%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>MOTOR_4 :</div>
                                    <div className='Textbox'>{chout7}</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'5.0em'}}>SERVO_4 :</div>
                                    <div className='Textbox'>{chout8}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Trbox' style={{height:'98%',width:'49.3%',top:'1%'}}>
                    {/* <div className='Divrow' style={{height:'35%'}}>
                        <div className='Grbox' style={{width:'96.5%',top:'7%'}}>
                            <div className='Text'>NAVIGATION</div>
                            <div className='Container' style={{width:'90%',top:'25%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'9em',display:'flex',justifyContent:'right'}}>NAV ROLL :</div>
                                    <div className='Textbox'>{navigationRoll}</div>
                                    <div className='Measures' style={{width:'2em',display:'flex'}}>DEG</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'9em',display:'flex',justifyContent:'right'}}>NAV PITCH :</div>
                                    <div className='Textbox'>{navigationPitch}</div>
                                    <div className='Measures' style={{width:'2em',display:'flex'}}>DEG</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'9em',display:'flex',justifyContent:'right'}}>BEARING :</div>
                                    <div className='Textbox'>{navigationBearing}</div>
                                    <div className='Measures' style={{width:'2em',display:'flex'}}>DEG</div>
                                </div>
                            </div>
                            <div className='Container' style={{width:'90%',top:'60%'}}>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'9em',display:'flex',justifyContent:'right'}}>AIR SPEED ERROR :</div>
                                    <div className='Textbox'>{airspeedError}</div>
                                    <div className='Measures' style={{width:'2em',display:'flex'}}>M</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'9em',display:'flex',justifyContent:'right'}}>W.P. DISTANCE :</div>
                                    <div className='Textbox'>{waypointDistance}</div>
                                    <div className='Measures' style={{width:'2em',display:'flex'}}>M</div>
                                </div>
                                <div className='Rowgrp'>
                                    <div className='Text' style={{width:'9em',display:'flex',justifyContent:'right'}}>ALT ERROR :</div>
                                    <div className='Textbox'>{altitudeError}</div>
                                    <div className='Measures' style={{width:'2em',display:'flex'}}>M/S</div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='Grbox' style={{position:'absolute',height:'44%',width:'45%',top:'51%',left:'52%'}}>
                        <div className='Text'>IMU</div>
                        <div className='Container' style={{width:'90%',top:'18%',justifyContent:'space-around'}}>
                            <div className='Rowgrp'>
                                <div className='Text'>ACC</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text'>GYRO</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text'>MAG</div>
                            </div>
                        </div>
                        <div className='Container' style={{width:'90%',top:'36%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>X :</div>
                                <div className='Textbox'>{accelerationX}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>X :</div>
                                <div className='Textbox'>{gyroX}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>X :</div>
                                <div className='Textbox'>{magneticFieldX}</div>
                            </div>
                        </div>
                        <div className='Container' style={{width:'90%',top:'54%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Y :</div>
                                <div className='Textbox'>{accelerationY}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Y :</div>
                                <div className='Textbox'>{gyroY}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Y :</div>
                                <div className='Textbox'>{magneticFieldY}</div>
                            </div>
                        </div>
                        <div className='Container' style={{width:'90%',top:'72%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Z :</div>
                                <div className='Textbox'>{accelerationZ}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Z :</div>
                                <div className='Textbox'>{gyroZ}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Z :</div>
                                <div className='Textbox'>{magneticFieldZ}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{position:'absolute',top:'-10%',left:'5%'}}><Propeller /></div>
                    <div className='Rowgrp wings'>
                        <div className='wingstyle2'><Wing1 width='95%' height='100%' /></div>
                        <div className='wingstyle1'><Wing1 width='95%' height='100%' /></div>
                        {/* <div><Wing1 width='50%' height='50%' /></div> */}
                        <Flap1 className='flap-1'/>
                        <Flap2 className='flap-2'/>
                        <Flap2 className='flap-3'/>
                        <Flap2 className='flap-4'/>
                        {/* <Flap2 className='flap-2'/> */}
                        {/* <div className='flap1'></div> */}
                        {/* <div className='flap2'></div> */}
                        {/* <div className='flap3'></div> */}
                        {/* <div className='flap4'></div> */}
                    </div>
                    <div className='Grbox' style={{position:'absolute',width:'45%',height:'45%',top:'2%',left:'52%'}}>
                        <div className='Text'>SENSOR OFFSETS</div>
                        <div className='Container' style={{width:'90%',top:'18%',justifyContent:'space-around'}}>
                            <div className='Rowgrp'>
                                <div className='Text'>ACC</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text'>GYRO</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text'>MAG</div>
                            </div>
                        </div>
                        <div className='Container' style={{width:'90%',top:'36%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>X :</div>
                                <div className='Textbox'>{saccelerationX}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>X :</div>
                                <div className='Textbox'>{sgyroX}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>X :</div>
                                <div className='Textbox'>{smagneticFieldX}</div>
                            </div>
                        </div>
                        <div className='Container' style={{width:'90%',top:'54%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Y :</div>
                                <div className='Textbox'>{saccelerationY}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Y :</div>
                                <div className='Textbox'>{sgyroY}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Y :</div>
                                <div className='Textbox'>{smagneticFieldY}</div>
                            </div>
                        </div>
                        <div className='Container' style={{width:'90%',top:'72%'}}>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Z :</div>
                                <div className='Textbox'>{saccelerationZ}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Z :</div>
                                <div className='Textbox'>{sgyroZ}</div>
                            </div>
                            <div className='Rowgrp'>
                                <div className='Text' style={{width:'1.2em'}}>Z :</div>
                                <div className='Textbox'>{smagneticFieldZ}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Terminal1;