import React, { useState } from "react";
import "./Home.css";
import Transitions from '../switch/Transitions'
import { IoIosClose } from 'react-icons/io';
import cake from '../images/icon-round-512.png'


function Home() {
    const [rate, setRate] = useState('')
        return (
            <div className="home__row">
                <div className="main">
                    <div className="main1">
                        <div className="headerrow">
                            <text className="headretext">ROI Calculator</text>
                            <IoIosClose size={34} className='ico' />
                        </div>
                        <div className="headerb">
                            <img src={cake} className='cakeimg' />
                            <text className="txt">Cake</text>
                            <input className="yellow" type="checkbox" />
                            <text className="txt1" >USD</text>
                            
                            <input placeholder='2.100000 CAKE' className="input" />
                            <div className="bt">
                                <text className="bttxt">~$20.82</text>
                            </div>
                            <div className="row">
                                <text className="bttxt1">USE BALANCE</text>
                                <text className="bttxt2">$1000</text>
                                <text className="bttxt2">$100</text>
                            </div>
                            <text className="tfhead">Timeframe</text><br/>
                            <div className="tfrow">
                                <text className="new1">1Day</text>
                                <text className="newtxt">7Day</text>
                                <text className="newtxt">30Day</text>
                                <text className="newtxt">1Year</text>
                                <text className="newtxt">5Year</text>
                            </div>
                            <div class="containerAPY">
                                <text className="blanktxt">Enable Accelerated APY</text>
                                <input className="blank" type="checkbox" />
                            </div>
                            <text className="tfhblur">Select Tier</text><br />
                            <div className="tfrow2">
                                <text className="new1">Tier 1</text>
                                <text className="newtxt">Tier 2</text>
                                <text className="newtxt">Tier 3</text>
                                <text className="new2">Tier 4</text>
                                <text className="newtxt">Tier 5</text>
                            </div>
                            <text className="tfhblur2">ROI at Current Rates</text><br />
                            <div class="inputWithIcon">
                                <input type='text' value={rate} placeholder="100.0 USD" />
                                <i class="bi-pencil" ></i>
                            </div>
                            <text className="tfhblur3">~ 3CAKE + 10 DON</text><br />
                            <div className="tfrow3">
                                <text className="apply">Apply</text>
                                <text className="cancle">Cancel</text>
                            </div>
                            <div>
                                <Transitions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


export default Home
