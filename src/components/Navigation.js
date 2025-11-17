import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavigationContainer className="shadow">
        <LinkContainer style={{ "margin-left": "150px" }}>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/reorder">Reorder</Link>
          </p>
          <p>
            <Link to="/add-card">Add a Card</Link>
          </p>
        </LinkContainer>

        <LinkContainer style={{ "margin-right": "150px" }}>
          <h3>PRODUCTION: </h3>
          <p>
            <Link to="/old/video">Videos</Link>
          </p>
          <p>
            <Link to="/old/link">Links</Link>
          </p>
          <p>
            <Link to="https://www.oculus.com/casting">Occulus</Link>
          </p>
        </LinkContainer>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10vh;
  background-color: #051c3d;
  overflow: hidden;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: white;
  }

  p {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    * {
      color: white;
      letter-spacing: 1px;
      text-decoration: none;
    }
    *:hover {
      color: gray;
    }
  }
`;
