import React from "react";
import './Screen.css'

function Screen(props){
    var {options} = props;

    return(
        <div className="screenContainer">
            <h1 style={{marginTop: 0}}> Ipod </h1> 
            <div className="screenMenu">


                {
                options.map((option) => {
                    return (
                        <span className={option.isActive ? "activeOption" : "menuItem"}>
                            {option.name}
                            <span style={{color: "white"}}> > </span>
                        </span>
                    )
                })
                }
            </div>
        </div>
    );
    
}

export default Screen;