import styled from "styled-components";

function Category(props) {
  return (
    <>
      <CardContainer className="dark-shadow">
        <ButtonAndIconContainer>
          <img src={process.env.PUBLIC_URL + props.icon} alt="" />
          <IconContainer2
            src={process.env.PUBLIC_URL + "/icons/play.png"}
            title={"Play Video for " + props.title}
            onClick={props.clicked}
          />
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
  width: 150px;
  height: 210px;
  margin: 15px;
  background-color: #1f2937;
  border-radius: 10px;

  @media screen and (max-width: 900px) {
    width: 110px;
    height: 160px;
  }

  @media screen and (max-width: 500px) {
    width: 90px;
    height: 125px;
  }
`;

const ButtonAndIconContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 150px;
  background-color: #dedede;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    /* padding: 15px; */
  }
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
  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const IconContainer2 = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 500ms;
  &:hover {
    opacity: 1;
  }
`;
