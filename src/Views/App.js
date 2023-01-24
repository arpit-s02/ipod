import React from 'react';
import '../Static/App.css';
import WheelMenu from './WheelMenu'
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      options: this.menu,
      page: 'homepage',
      active: 'none'
    }
  }

  menu = [
    {
      name: 'Songs',
      isActive: true,
      id: '0',
      
    },
    {
        name: 'Games',
        isActive: false,
        id: '1',
    },
    {
      name: 'Settings',
      isActive: false,
      id: '3',
    }
  ]

  songs = [
    {
      name: 'Desires',
      isActive: false,
      id: '0',
      
    },
    {
        name: 'Brown Munde',
        isActive: true,
        id: '1',
    },
    {
      name: 'Baller',
      isActive: false,
      id: '3',
    }
  ]

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
        // console.log(options[nextIndex].name)
        this.setState({
          active: options[nextIndex].name
        })
        // console.log(this.state.active);
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
        // console.log(options[nextIndex].name)
        this.setState({
          active: options[nextIndex].name
        });
        
        break;
      }
    }

    this.setState({
        options: options
    })
 
  }

  changeScreenMenu = () => {
    if(this.state.page === 'homepage'){
      if(this.state.active === 'none'){
        this.setState({
          page: 'menu',
          active: 'Songs'
        })
      }
      else{
        this.setState({
          page: 'menu',
        })
      }
      
    }

    else if(this.state.page === 'menu'){
      this.setState({
        page: 'homepage',
      })
    }

    else if(this.state.page === 'Songs'){
      this.setState({
        page: 'menu',
        options: this.menu
      })
    }

    else{
      this.setState({
        page: 'menu',
      })
    }
  }

  changeScreenButton = () => {
    if(this.state.active === 'Songs'){
      this.setState({
        page: this.state.active,
        options: this.songs
      })
      return;
    }
    this.setState({
      page: this.state.active,
    })
  }

  render(){
    const {options} = this.state;

    return (
      <Router>
        <div className='app'>
          <HomeScreen
            options = {options}
            page = {this.state.page}
          />
          
          <WheelMenu
            options = {options}
            changeSelectionClock = {this.changeSelectionClock}
            changeSelectionAntiClock = {this.changeSelectionAntiClock}
            page = {this.state.page}
            changeScreenMenu = {this.changeScreenMenu}
            changeScreenButton = {this.changeScreenButton}
          /> 
        </div>
      </Router>
    );
  }
}

export default App;
