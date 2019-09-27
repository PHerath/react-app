import React from 'react';
import './UserInput.css'

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <p>Write Your Name</p>
            <input type = "text" onChange = {props.changed}/>
        </div>
    )
}

export default UserInput;