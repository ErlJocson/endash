import { useState } from "react";
import Category from "../Category";
import { links } from "../Links";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  ContentContainer,
  WhiteImageContainer,
  CategoryContainer,
  DownButton,
  UpButton,
} from "../InstanceStyles";
import ParticleComponent from "../ParticleComponent";

const OldLinkInstances = () => {
  const navigate = useNavigate();
  const [showAllButton, setShowAllButton] = useState(false);

  const handleShowButton = () => {
    setShowAllButton(!showAllButton);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <ParticleComponent />
      <MainContainer>
        <ContentContainer>
          <WhiteImageContainer
            src={process.env.PUBLIC_URL + "/logo/hgs white logo.svg"}
            alt=""
            onClick={handleHomeClick}
          />

          <CategoryContainer showbutton={showAllButton}>
            {!showAllButton
              ? links.map((link, index) => {
                  if (index < 6) {
                    return (
                      <Category
                        key={index}
                        title={link.title}
                        icon={link.icon}
                        play={link.play}
                        clicked={() => (window.open(link.website), "_blank")}
                      />
                    );
                  }
                  return false;
                })
              : links.map((link, index) => {
                  return (
                    <Category
                      key={index}
                      title={link.title}
                      icon={link.icon}
                      clicked={() => (window.open(link.website), "_blank")}
                    />
                  );
                })}
          </CategoryContainer>

          {/* {showAllButton ? (
            <UpButton
              size={70}
              onClick={handleShowButton}
              className="jump"
              title="Close"
            />
          ) : (
            <DownButton
              size={70}
              onClick={handleShowButton}
              className="jump"
              title="See All"
            />
          )} */}
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default OldLinkInstances;
