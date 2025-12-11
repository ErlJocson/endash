import styled from "styled-components";
import { useRef, useState, useEffect, useCallback } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ videoLink, modal, website, title }) => {
  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState(false);

  const handleEscapeKey = useCallback(() => {
    modal();
  }, [modal]);

  useEffect(() => {
    handlePlay()
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleEscapeKey();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleEscapeKey]);

  const handlePlay = () => {
    if (videoRef.current) {
 
      videoRef.current.play();
    }

    setVideoStatus(!videoStatus);
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoStatus(!videoStatus);
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <ModalContainer>
      <MainContentContainer>

         <video ref={videoRef} controls >
          <source src={videoLink} type="video/mp4" />
        </video>

      <ButtonContainer>
          <button
            onClick={() => {
              handleStop();
              modal();
            }}
            className="btn-danger"
            title="Close the Video"
          >
            <IoMdCloseCircleOutline />
          </button>

        </ButtonContainer>
      </MainContentContainer>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  flex-direction: column-reverse;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  video {
    border-radius: 5px;
    max-width: 100%;  
    height: 650px; 
    object-fit: cover; 
    // margin-bottom: 5vh;

  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: right;
  align-items: center;
  position: absolute;
  bottom:0;
  button {
    padding: 4px 40px;
    cursor: pointer;
    text-align: center;
    align-items: center;
    font-size: 20px;
    margin: 10px 0;
  }

  @media screen and (max-width: 900px) {
    button {
      padding: 4px 8px;
      font-size: 10px;
    }
  }
`;
