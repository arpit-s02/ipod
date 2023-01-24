import '../Static/HomeScreen.css'
import Screen from './Screen';
import Games from './Games'
import Settings from './Settings';
import Songs from './Songs';

function HomeScreen(props){
    const {options} = props;
    return(
        
        <div className='homeScreen'>

            {props.page === 'menu' ? <Screen 
                options = {options}
            /> : ''}

            {props.page === 'Games' ? <Games 
            /> : ''}

            {props.page === 'Settings' ? <Settings 
            /> : ''} 

            {props.page === 'Songs' ? <Songs 
                options = {options}
                page = {props.page}
            /> : ''}
            
        </div>
    );
}

export default HomeScreen