import React, { useState } from "react";
import { IoIosArrowDown } from 'react-icons/io';
import "./Transitions.css";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className="text">
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "Show details" : " Hide details"}
                <IoIosArrowDown size={14} className='ico' />
            </span>
            <p className="text2">{isReadMore ? text.slice(0, 0) : text}</p>
        </p>
            
        
    );
};


const Content = () => {

    return (
        <div className="container">
            <text className="text1">
                <ReadMore className='txtcontainer'>
                    <text className="ftext">APY</text>
                    <text className="ftext1">63.34%</text>
                    <br /><br />
                    <p className="fp">
                        <li className="li1">Calculated based on current rates</li>
                        <li className="li2">All fugures are estimates provided for your convenience only, and by no means represent guaranted returns.</li>
                    </p>
                </ReadMore>
            </text>
        </div>
    );
};



export default Content; 