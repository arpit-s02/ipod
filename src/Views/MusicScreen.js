import '../Static/MusicScreen.css'
import Slider from './Slider'
import { useState, useRef, useEffect } from 'react'

function MusicScreen(props){
    // using setState to get the changed value of slider
    const [isPlaying, setIsPlaying] = useState(true);
    const [percentage, setPercentage] = useState(0);

    // filtering the song which was selected
    const currentSong = props.songs.filter((s) => {
        return s.name === props.active; 
    })

    // setting the state of the song's audio, image and name
    const [song, setSong] = useState(currentSong[0].audio);
    const [image, setImage] = useState(currentSong[0].image);
    const [songName, setSongName] = useState(currentSong[0].name);

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

    // when song is changed or first played
    useEffect(() => {
        // when song is first played or the forward button is pressed
        setIsPlaying(true);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }, [song])


    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
        setPercentage(percent);

        if(e.currentTarget.currentTime === e.currentTarget.duration){
            playPause();
        }
    }

    const forward = () => {

        // selecting the next song from the array
        if(song === props.songs[0].audio){
            setSong(props.songs[1].audio);
            setImage(props.songs[1].image);
            setSongName(props.songs[1].name);
        }
        else if(song === props.songs[1].audio){
            setSong(props.songs[2].audio);
            setImage(props.songs[2].image);
            setSongName(props.songs[2].name);
            
        }
        else{
            return;
        }
        
    }


    return(
        <div className="musicScreen">
            <div className='musicImage'>
                <img style={styles.image} alt = "" src = {image} />
            </div>
            <span style={{margin: '7px', marginBottom: '30px'}}> {songName} </span>
                       
            <Slider 
                onChange = {onChange}
                percentage = {percentage}
            />
                
           <audio 
            ref = {audioRef} 
            src = {song}
            onTimeUpdate = {getCurrDuration}
           ></audio>
           <img style={styles.forward} onClick = {forward} className='forward' alt = "" src = "https://cdn-icons-png.flaticon.com/512/4211/4211386.png" />

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
        position: 'absolute',
        height: '25px',
        width: '25px',
        right: '430px',
        top: '400px'

    }
}

export default MusicScreen