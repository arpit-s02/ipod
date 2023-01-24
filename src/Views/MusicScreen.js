import '../Static/MusicScreen.css'

function MusicScreen(props){
    // console.log('hii');
    return(
        <div className="musicScreen">
            <div className='musicImage'>

            </div>
            <span style={{margin: '7px'}}> {props.active} </span>
        </div>
    )
}



export default MusicScreen