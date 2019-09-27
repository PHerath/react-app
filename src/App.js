import React from 'react';
import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

    render(){
        return(
            <div>
                <UserInput></UserInput>
            </div>
        )
    }

}

export default App;
