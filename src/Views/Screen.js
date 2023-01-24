import React from "react";

import '../Static/Screen.css'

function Screen(props){
    var {options} = props;
    // console.log(props.active)
    return(
        <div className="screenMenu">
            <h1 style={{marginLeft: 5}}> Ipod </h1> 
            {
            options.map((option) => {
                
                return (
                    <span key = {option.id} className={option.isActive ? "activeOption" : "menuItem"}>
                        <span style={{marginLeft: 5}}> {option.name} </span>
                        <span style={{color: "white", marginRight: 5}}> {'>'}</span>
                    </span>
                )
            })
        }
        </div>
    );
}



export default Screen;