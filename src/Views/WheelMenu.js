import React from "react";
import ZingTouch from "zingtouch";
import '../Static/WheelMenu.css'
// import { Link } from "react-router-dom";

class WheelMenu extends React.Component{
    constructor(){
        super();

        if(window.location.href === 'http://localhost:3000/'){
            this.state = {
                nextPath: '/menu'
            }
        }
        else{
            this.state = {
                nextPath: '../'
            }
        }
    }

    componentDidMount(){
        var currAngle = 15;
        var newAngle = 15;
        const {changeSelectionClock, changeSelectionAntiClock} = this.props;
        const target = document.getElementById('wheelMenu');
    
        var region = new ZingTouch.Region(target);

        region.bind(target, 'rotate', (e) => {
            newAngle += e.detail.distanceFromLast;
            if((newAngle - currAngle) >= 15){
                currAngle = newAngle;
                if(this.props.page === 'menu' || this.props.page === 'Songs'){
                    // console.log(this.props.page)
                    changeSelectionClock(this.props.options);
                }
                
            }
            else if(currAngle - newAngle >= 15){
                currAngle = newAngle;
                if(this.props.page === 'menu' || this.props.page === 'Songs'){
                    changeSelectionAntiClock(this.props.options);
                }
                
            }
        }, {
            passive: true
        });
    }

    getPathButton = () => {
        const {options} = this.props;

        const a = options.filter((option) => option.isActive === true);

        return a[0].name;
    }

    changeMenuPath = () => {
        const {nextPath} = this.state;

        if(nextPath === '/menu'){
            this.setState({
                nextPath: '../'
            })
        }
        else if(nextPath === '../'){
            if(window.location.href === 'http://localhost:3000/menu'){
                this.setState({
                    nextPath: '/menu'
                })
            }
            else{
                this.setState({
                    nextPath: '../'
                })
            }
        }

    }

    // changeMenuPathButton = () => {
    //     this.setState({
    //         nextPath: '../'
    //     })
    // }

    

    render(){
        return(
            <div className="App">
                <div className = "wheelContainer">
                    
                    <div className = "wheelMenu" id = "wheelMenu">
                        <button onClick = {this.props.changeScreenButton} className = "wheelForeground">
                            <div>
                            </div>
                        </button>
                        
                        <button onClick = {this.props.changeScreenMenu} className="menuSpan"> Menu </button>        
                        <img  className='forward' alt = "" src = "https://cdn-icons-png.flaticon.com/512/4211/4211386.png" />
                        <img  className='backward' alt = "" src = "https://cdn-icons-png.flaticon.com/512/3318/3318703.png" />
                        <img  className='playPause' alt = "" src = "https://cdn-icons-png.flaticon.com/512/7960/7960808.png" />
                    </div>
                    
                </div>
            </div>
        );
        
    }
}

export default WheelMenu;