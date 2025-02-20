import { useState } from "react";
import Category from "../Category";
import { links } from "../Links";
import Modal from "../Modal";
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

const OldVideoInstance = () => {
  const navigate = useNavigate();
  const [showAllButton, setShowAllButton] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  const handleShowButton = () => {
    setShowAllButton(!showAllButton);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
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

          {showModal && (
            <Modal
              videoLink={videoLink}
              modal={() => handleShowModal()}
              website={websiteLink}
              title={videoTitle}
            />
          )}

          <CategoryContainer showbutton={showAllButton}>
            {!showAllButton
              ? links.map((link, index) => {
                  if (index < 6 &&  link.video) {
                    return (
                      <Category
                        key={index}
                        title={link.title}
                        icon={link.icon}
                        play={link.play}
                        clicked={() => {
                          handleShowModal();
                          setVideoLink(process.env.PUBLIC_URL + link.video);
                          setWebsiteLink(link.website);
                          setVideoTitle(link.title);
                        }}
                        modal={() => handleShowModal()}
                      />
                    );
                  }
                  return false;
                })
              : links.map((link, index) => {
                if (link.video) {
                  return (
                    <Category
                      key={index}
                      title={link.title}
                      icon={link.icon}
                      clicked={() => {
                        handleShowModal();
                        setVideoLink(process.env.PUBLIC_URL + link.video);
                        setWebsiteLink(link.website);
                        setVideoTitle(link.title);
                      }}
                      modal={() => handleShowModal()}
                    />
                  )};
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
export default OldVideoInstance;
