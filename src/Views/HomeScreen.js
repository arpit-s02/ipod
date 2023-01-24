import '../Static/HomeScreen.css'
import Screen from './Screen';
import Games from './Games'
import Settings from './Settings';
import Songs from './Songs';
import MusicScreen from './MusicScreen';

function HomeScreen(props){
    const {options} = props;
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
            /> : ''}

            {props.page === 'MusicScreen' ? <MusicScreen
                options = {options}
                page = {props.page}
                active = {props.active}
            /> : ''}
            
        </div>
    );
}

export default HomeScreen