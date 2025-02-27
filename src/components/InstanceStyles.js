import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteImageContainer = styled.img`
  margin-top: ${(props) => (props.showAllButton ? "" : "80px")};
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
  align-items: ${(props) => (props.showbutton ? "" : "space-between")};
  align-items: center;
  margin: 30px 0;
  height: ${(props) => (props.showbutton ? "400px" : "auto")};
  transition: height 0.7s ease;
  overflow: ${(props) => (props.showbutton ? "auto" : "hidden")};
  width: 1200px;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For IE and Edge */

  @media screen and (max-width: 1300px) {
    width: 80vw;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DownButton = styled(MdKeyboardArrowDown)`
  color: #adeee3;
  cursor: pointer;
  margin-bottom: 20px;
  margin-bottom: ${(props) => (props.showAllButton ? "" : "50px")};
`;

export const UpButton = styled(MdKeyboardArrowUp)`
  color: #adeee3;
  cursor: pointer;
  margin-bottom: 10px;
  margin-bottom: ${(props) => (props.showAllButton ? "" : "50px")};
`;
