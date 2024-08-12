import styled from "styled-components";

const MainPage = () => {
  return (
    <BodyContainer>
      <img src={process.env.PUBLIC_URL + "/logo/hgs white logo.svg"} alt="" />
      <h3>EnDash</h3>
    </BodyContainer>
  );
};

export default MainPage;
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
