import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavigationContainer className="shadow">
        <LinkContainer style={{ "margin-left": "150px" }}>
          <h3>NEW BACKGROUND: </h3>
          <p>
            <Link to="/video">Videos</Link>
          </p>
          <p>
            <Link to="/link">Links</Link>
          </p>
        </LinkContainer>

        <LinkContainer style={{ "margin-right": "150px" }}>
          <h3>OLD BACKGROUND: </h3>
          <p>
            <Link to="/old/video">Videos</Link>
          </p>
          <p>
            <Link to="/old/link">Links</Link>
          </p>
        </LinkContainer>
      </NavigationContainer>
      <BodyContainer>
        <img src={process.env.PUBLIC_URL + "/logo/hgs white logo.svg"} alt="" />
        <h3>EnDash</h3>
      </BodyContainer>
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

const BodyContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    height: 100px;
  }

  h3 {
    color: white;
    font-family: Georgia;
    font-size: 100px;
    margin-top: 50px;
    font-style: italic;
    letter-spacing: 1px;
  }
`;
