import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
{
    width: 60%;
    margin: auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}

@media (min-width: 500px) {
    {
        width: 450px;
    }
}`;
var Person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // };
    return (
        //<div className = "Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>i am {props.name}.i am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value = {props.name}></input>
        </StyledDiv>
    )
};

//class person extends React.comp

export default Person;