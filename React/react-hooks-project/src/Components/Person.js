import React from "react";
import styled from "styled-components";

import "./Person.css";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 2px 2px #888888;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: "450px";
  }
`;

const Person = props => {
  return (
    <StyledDiv>
      <p onClick={props.deletePersonHandler}>
        I am a {props.name} and i am {props.age} old
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.nameChangeHandler}
        value={props.name}
      />
    </StyledDiv>
  );
};

export default Person;
