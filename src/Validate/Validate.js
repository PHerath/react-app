import React from 'react';

const Validate = (props) => {
    return (
        <div>
            <p>text length is {props.length}</p>
            {
                props.length > 5 ? <p>Text to long</p> : <p>Text to short</p>
            }
        </div>
    )
}

export default Validate;