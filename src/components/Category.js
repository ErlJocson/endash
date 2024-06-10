import styled from "styled-components";

function Category(props) {
  return (
    <>
      <CardContainer onClick={props.clicked}>
        <ButtonAndIconContainer>
          <IconContainer src={process.env.PUBLIC_URL + props.icon} />
          <ButtonContainer>
            <IconContainer2
              src={process.env.PUBLIC_URL + "/icons/play.png"}
              title={"Play Video for " + props.title}
            />
          </ButtonContainer>
        </ButtonAndIconContainer>
        <CardTitleContainer>
          <CardTitle>{props.title}</CardTitle>
        </CardTitleContainer>
      </CardContainer>
    </>
  );
}

export default Category;

const CardContainer = styled.div`
  width: 120px;
  height: 180px;
  margin: 10px;
  background-color: #00122b;
  border: 1px solid #000816;
  cursor: pointer;
  border-radius: 10px;
  position: relative;

  &:hover {
    img {
      display: inline;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100px;
    height: 160px;
  }

  @media screen and (max-width: 500px) {
    width: 80px;
    height: 125px;
  }
`;

const ButtonAndIconContainer = styled.div`
  position: relative;
  background-color: #dedede;
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const IconContainer = styled.img`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitleContainer = styled.div`
  padding: 9px 10px 10px 10px;
  @media screen and (max-width: 900px) {
    padding: 7px 8px 8px 8px;
  }

  @media screen and (max-width: 500px) {
    padding: 5px 6px 6px 6px;
  }
`;

const CardTitle = styled.h5`
  color: white;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const IconContainer2 = styled.img`
  display: none;
  width: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-11%, 0);
  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 900px) {
    & {
      width: 60px;
      transform: translate(-17%, 0);
    }
  }

  @media screen and (max-width: 500px) {
    & {
      width: 40px;
      transform: translate(-25%, 0);
    }
  }
`;
