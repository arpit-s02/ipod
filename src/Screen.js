import React from "react";
import './Screen.css'

class Screen extends React.Component{

    constructor(){
        super();

        this.state = {
            options: [
                {
                    name: 'Songs',
                    isActive: false,
                    key: 0,
                    
                },
                {
                    name: 'Albums',
                    isActive: true,
                    key: 1,
                },
                {
                    name: 'Artists',
                    isActive: false,
                    key: 2,
                },
                {
                    name: 'Playlists',
                    isActive: false,
                    key: 3,
                }
            ]
        }
    }

    changeSelection = (options) => {
        for(let i = 0; i < options.length; i++){
            if(options[i].isActive === true){
                options[i].isActive = false;
                let nextIndex;
                if((i + 1) < options.length){
                    nextIndex = i + 1;
                }
                else{
                    nextIndex = 0;
                }
                options[nextIndex].isActive = true;
                break;
            }
        }

        this.setState({
            options: options
        })
     
    }

    render(){
        var {options} = this.state;
        var changeSelection = this.changeSelection;

        return(
            <div className="screenContainer">
                <h1 onClick={() => changeSelection(options)} style={{marginTop: 0}}> Ipod </h1> 
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
}

export default Screen;