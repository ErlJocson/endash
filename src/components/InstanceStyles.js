import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const ContentContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteImageContainer = styled.img`
  margin-top: ${(props) => (props.showAllButton ? "" : "100px")};
  height: 90px;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    & {
      height: 70px;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      height: 50px;
    }
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => (props.showAllButton ? "normal" : "center")};
  margin: 30px 0;
  height: ${(props) => (props.showAllButton ? "540px" : "220px")};
  transition: height 0.7s ease;
  overflow: ${(props) => (props.showAllButton ? "auto" : "hidden")};
  overflow: auto;
  width: 40%;

  @media screen and (max-width: 2100px) {
    & {
      width: 60%;
    }
  }

  @media screen and (max-width: 1600px) {
    & {
      width: 80%;
    }
  }

  @media screen and (max-width: 1300px) {
    & {
      width: 100%;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 900px) {
    width: 95%;
    height: 350px;
  }
`;

export const DownButton = styled(MdKeyboardArrowDown)`
  color: #adeee3;
  cursor: pointer;
  margin-bottom: 20px;
  margin-bottom: ${(props) => (props.showAllButton ? "" : "100px")};
`;

export const UpButton = styled(MdKeyboardArrowUp)`
  color: #adeee3;
  cursor: pointer;
  margin-bottom: 20px;
  margin-bottom: ${(props) => (props.showAllButton ? "" : "100px")};
`;
