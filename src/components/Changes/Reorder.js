import styled from "styled-components";
import { links } from "../Links";
import { useState } from "react";

const Reorder = () => {
  const [newOrder, setNewOrder] = useState([]);

  return (
    <>
      <MainContainer>
        <NewOrderContainer className="container"></NewOrderContainer>
        <LinkContainer className="container">
          {links.map((link, index) => {
            return (
              <div key={index} draggable>
                {link.title}
              </div>
            );
          })}
        </LinkContainer>
      </MainContainer>
    </>
  );
};

export default Reorder;

const MainContainer = styled.div`
  height: calc(100vh - 10vh);

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    margin: 0 10px;
    padding: 10px;
    height: 80vh;
    width: 30%;
  }
`;

const LinkContainer = styled.div`
  background-color: #00122ba2;
  overflow: auto;
  display: grid;

  div {
    padding: 8px;
    background-color: #dededecf;
    margin-bottom: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 500ms;
  }

  div:hover {
    background-color: #dedede;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const NewOrderContainer = styled.div`
  background-color: #00122ba2;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
