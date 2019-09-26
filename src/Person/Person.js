import React from 'react';

var Person = (props) => {
    return (
        <div>
            <p>i am {props.name}.i am {props.age}.</p>
            <p>{props.children}</p>
        </div>
    )
};

//class person extends React.comp

export default Person;