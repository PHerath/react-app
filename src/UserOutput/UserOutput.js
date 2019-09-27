import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {

    return(
        <div className="UserOutput">
            <p value={props.userName}>UserName: {props.userName}</p>
            <p>Post is very worst</p>
        </div>
    )

}

export default UserOutput;