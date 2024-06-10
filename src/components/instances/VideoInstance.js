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

const VideoInstance = () => {
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

          <CategoryContainer showAllButton={showAllButton}>
            {!showAllButton
              ? links.map((link, index) => {
                  if (index < 6) {
                    return (
                      <Category
                        key={index}
                        title={link.title}
                        icon={link.icon}
                        play={link.play}
                        clicked={() => {
                          handleShowModal();
                          setVideoLink(process.env.PUBLIC_URL + link.link);
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
                  return (
                    <Category
                      key={index}
                      title={link.title}
                      icon={link.icon}
                      clicked={() => {
                        handleShowModal();
                        setVideoLink(process.env.PUBLIC_URL + link.link);
                        setWebsiteLink(link.website);
                        setVideoTitle(link.title);
                      }}
                      modal={() => handleShowModal()}
                    />
                  );
                })}
          </CategoryContainer>

          {showAllButton ? (
            <UpButton
              size={50}
              onClick={handleShowButton}
              className="jump"
              title="Close"
            />
          ) : (
            <DownButton
              size={50}
              onClick={handleShowButton}
              className="jump"
              title="See All"
            />
          )}
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default VideoInstance;
