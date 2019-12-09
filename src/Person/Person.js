import React from 'react';
import Radium from 'radium';
import './Person.css';

var Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className = "Person" style={style}>
            <p onClick={props.click}>i am {props.name}.i am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value = {props.name}></input>
        </div>
    )
};

//class person extends React.comp

export default Radium(Person);