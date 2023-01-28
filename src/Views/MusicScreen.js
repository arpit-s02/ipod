import '../Static/MusicScreen.css'
import Slider from './Slider'
import { useState, useRef, useEffect } from 'react'

function MusicScreen(props){
    // using setState to get the changed value of slider
    const [isPlaying, setIsPlaying] = useState(true);
    const [percentage, setPercentage] = useState(0);

    const onChange = (e) => {
        const audio = audioRef.current;
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value);
    }

    const audioRef = useRef();

    const playPause = () => {
        const audio = audioRef.current;

        if(!isPlaying){
            setIsPlaying(true)
            audio.play();
        }
        else{
            setIsPlaying(false)
            audio.pause();
        }
    }

    useEffect(() => {
        setIsPlaying(true);
        audioRef.current.play();
    }, [])

    let song;
    let image;

    if(props.active === 'Desires'){
        song = props.songs.Desires.name;
        image = props.songs.Desires.image
    }
    else if(props.active === 'Brown Munde'){
        song = props.songs.BrownMunde.name;
        image = props.songs.BrownMunde.image
    }
    else{
        song = props.songs.Baller.name;
        image = props.songs.Baller.image
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
        setPercentage(percent);

        if(e.currentTarget.currentTime === e.currentTarget.duration){
            playPause();
        }
    }


    return(
        <div className="musicScreen">
            <div className='musicImage'>
                <img style={styles.image} alt = "" src = {image} />
            </div>
            <span style={{margin: '7px', marginBottom: '30px'}}> {props.active} </span>
                       
            <Slider 
                onChange = {onChange}
                percentage = {percentage}
            />
                
           <audio 
            ref = {audioRef} 
            src = {song}
            onTimeUpdate = {getCurrDuration}
           ></audio>
           {/* <img style={styles.forward} onClick={() => nextSong(props.options)} className='forward' alt = "" src = "https://cdn-icons-png.flaticon.com/512/4211/4211386.png" /> */}

           <img style={styles.playPause} onClick={playPause} className='playPause' alt = "" src = "https://cdn-icons-png.flaticon.com/512/7960/7960808.png" />
        </div>
    )
}

const styles = {
    playPause: {
        top: '470px'
    },
    image: {
        height: `100%`,
        width: `100%`
    },
    forward: {
        top: '405px'
    }
}

export default MusicScreen