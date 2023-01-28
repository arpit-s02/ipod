import '../Static/Slider.css'
import { useState, useEffect } from 'react';

function Slider({onChange, percentage}){
    const [position, setPosition] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0);

    useEffect(() => {
        const centerThumb = (20 / 100) * percentage * -1;
        setMarginLeft(centerThumb);
        setPosition(percentage);
    }, [percentage]);

    return(
        <div className="slider-container">
            <div className="progress-bar-cover" style={{
                width: `${position}%`
            }}></div>
            <div className="thumb" style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`
            }}></div>
            <input type = 'range' step = '0.1' className="range" onChange={onChange} />
        </div>
    )
}

export default Slider;