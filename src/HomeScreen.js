import './HomeScreen.css'
import Screen from './Screen';
import { Routes, Route, Outlet } from 'react-router-dom';

function HomeScreen(props){
    const {options} = props;
    return(
        
        <div className='homeScreen'>
            <Routes>
                <Route exact path = '/' element = {<Outlet></Outlet>}></Route>
                <Route exact path = '/menu' element = {<Screen options = {options} />}></Route>
            </Routes>
        </div>
    );
}

export default HomeScreen