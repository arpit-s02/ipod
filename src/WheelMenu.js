import React from "react";
import ZingTouch from "zingtouch";
import './WheelMenu.css';


class WheelMenu extends React.Component{

    // componentDidMount(){
    //     var currAngle = 15;

    //     const target = document.getElementById('wheelMenu');
    //     console.log(target);
    
    //     var region = new ZingTouch.Region(target);

    //     region.bind(target, 'rotate', (e) => {
    //         currAngle += e.detail.distanceFromLast;
    //         console.log('angle', currAngle);
    //     });
    // }

    render(){
        

        return(
            <div className="App">
                <div className = "wheelContainer">
                    <div className = "wheelBackground">
                        <div className = "wheelMenu" id = "wheelMenu">
                            <div className = "wheelForeground">
                            </div>
                            <span className='menuSpan'> Menu </span>
                            <img  className='forward' alt = "" src = "https://cdn-icons-png.flaticon.com/512/4211/4211386.png" />
                            <img  className='backward' alt = "" src = "https://cdn-icons-png.flaticon.com/512/3318/3318703.png" />
                            <img  className='playPause' alt = "" src = "https://cdn-icons-png.flaticon.com/512/7960/7960808.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WheelMenu;