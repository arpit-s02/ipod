import '../Static/HomeScreen.css'
import Screen from './Screen';
import Games from './Games'
import Settings from './Settings';
import Songs from './Songs';
import MusicScreen from './MusicScreen';
import Desires from '../Songs/Desires.mp3'
import BrownMunde from '../Songs/BrownMunde.mp3'
import Baller from '../Songs/Baller.mp3'
import { useState } from 'react';

function HomeScreen(props){
    const {options} = props;

    // creating songs array to pass to the musicScreen
    const [songs] = useState([
        {
            name: 'Desires',
            audio: Desires,
            image: 'data:image/jpeg;base64,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'
        }, 
        {
            name: 'Brown Munde',
            audio: BrownMunde,
            image: 'https://c.saavncdn.com/973/Brown-Munde-Unknown-2020-20200915002420-500x500.jpg'
        }, 
        {
            name: 'Baller',
            audio: Baller,
            image: 'data:image/jpeg;base64,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'
        }
    ]);
    return(
        
        <div className='homeScreen'>

            {props.page === 'menu' ? <Screen 
                options = {options}
                active = {props.active}
            /> : ''}

            {props.page === 'Games' ? <Games 
            /> : ''}

            {props.page === 'Settings' ? <Settings 
            /> : ''} 

            {props.page === 'Songs' ? <Songs 
                options = {options}
                page = {props.page}
                active = {props.active}
                songs = {songs}
            /> : ''}

            {props.page === 'MusicScreen' ? <MusicScreen
                options = {options}
                page = {props.page}
                active = {props.active}
                songs = {songs}
            /> : ''}
            
        </div>
    );
}

export default HomeScreen