import styled from "styled-components";

function Category(props) {
  return (
    <>
      <CardContainer className="dark-shadow">
        <ButtonAndIconContainer>
          <img src={process.env.PUBLIC_URL + props.icon} alt="" />

          <img
            src={process.env.PUBLIC_URL + props.icon2}
            alt=""
            className="second-icon"
          />
          <IconContainer2
            src={process.env.PUBLIC_URL + "/icons/play.png"}
            title={"Play Video for " + props.title}
            onClick={props.clicked}
            showPlayIcon={props.showPlayIcon}
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
  width: 180px;
  height: 250px;
  margin: 10px;
  background-color: white;
  border: 2px solid rgb(87, 88, 89);
  border-radius: 5px;

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
  height: 180px;
  background-color: #dedede;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-bottom: 0.3px solid rgb(87, 88, 89);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .second-icon {
    object-fit: cover;
    margin-right: 5px;
    margin-top: 5px;
    right: 0;
    border-radius: 5px;
    border: none;
    padding: 5px;
    height: 40px;
    width: 40px;
    background-color: white;
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

  font-size: 20px;
`;

const CardTitle = styled.h5`
  color: black;
  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const IconContainer2 = styled.img`
  padding: 45px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: all 500ms;
  opacity: ${(props) => (props.showPlayIcon ? ".7" : "0")};
`;
