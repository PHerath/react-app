import React from 'react';

var Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>i am {props.name}.i am {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.change} value = {props.name}></input>
        </div>
    )
};

//class person extends React.comp

export default Person;