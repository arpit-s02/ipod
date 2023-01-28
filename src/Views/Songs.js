
import '../Static/Screen.css'



function Songs(props){
    var {options} = props;
    
    // console.log(props.songs);
    return(
        <div className="screenMenu">
            <h1 style={{marginLeft: 5}}> Songs </h1> 
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

export default Songs;