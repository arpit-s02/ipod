import React from 'react';
import './App.css';
import WheelMenu from './WheelMenu'
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      options: [
        {
            name: 'Songs',
            isActive: false,
            id: '0',
            
        },
        {
            name: 'Albums',
            isActive: true,
            id: '1',
        },
        {
            name: 'Artists',
            isActive: false,
            id: '2',
        },
        {
          name: 'Playlists',
          isActive: false,
          id: '3',
        }
      ]
    }
  }

  changeSelectionClock = (options) => {
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

  changeSelectionAntiClock = (options) => {
    for(let i = 0; i < options.length; i++){
      if(options[i].isActive === true){
        options[i].isActive = false;
        let nextIndex;
        if((i - 1) >= 0){
            nextIndex = i - 1;
        }
        else{
            nextIndex = options.length - 1;
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
    const {options} = this.state;

    return (
      <Router>
        <div className='app'>
          <HomeScreen
            options = {options}
          />
          
          <WheelMenu
            options = {options}
            changeSelectionClock = {this.changeSelectionClock}
            changeSelectionAntiClock = {this.changeSelectionAntiClock}
          /> 
        </div>
      </Router>
    );
  }
}

export default App;
