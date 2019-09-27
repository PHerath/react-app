import React from 'react';
import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

    state = {
        username: "Pathum Herath Max"
    }

    userNameChangeHandler = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    render(){
        return(
            <div className = "App">
                <UserInput changed={this.userNameChangeHandler}></UserInput>
                <br/>
                <div onClick={this.userNameChangeHandler}><button>Save Change</button></div>
                <br/>
                <UserOutput userName = {this.state.username}></UserOutput>
                <UserOutput userName = {this.state.username}></UserOutput>
                <UserOutput userName = {this.state.username}></UserOutput>
            </div>
        )
    }

}

export default App;
