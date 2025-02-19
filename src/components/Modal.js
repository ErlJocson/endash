import styled from "styled-components";
import { useRef, useState, useEffect, useCallback } from "react";
import { GiPlayButton, GiPauseButton } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineFullscreen } from "react-icons/ai";

const Modal = ({ videoLink, modal, website, title }) => {
  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState(false);

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleEscapeKey = useCallback(() => {
    modal();
  }, [modal]);

  useEffect(() => {
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
      <ButtonContainer>
          {videoStatus ? (
            <button
              onClick={handlePause}
              className="btn-pause"
              title="Pause the Video"
            >
              <GiPauseButton />
            </button>
          ) : (
            <button
              onClick={handlePlay}
              className="btn-success"
              title="Play the Video"
            >
              <GiPlayButton />
            </button>
          )}

          <button
            onClick={() => {
              window.location.href = website;
            }}
            className="btn-site"
            title={"Visit Website for " + title}
          >
            <CgWebsite />
          </button>

          <button
            onClick={handleFullScreen}
            title="Fullscreen"
            className="btn-full"
          >
            <AiOutlineFullscreen />
          </button>

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
        <video ref={videoRef} className="shadow" >
          <source src={videoLink} type="video/mp4" />
        </video>
        
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction:column ;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  video {
    border-radius: 5px;
    max-width: 100%;  
    height: 750px; 
    object-fit: cover; 
    margin-bottom: 50px;
  }
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  margin-top: 2px;

  button {
    padding: 4px 40px;
    cursor: pointer;
    text-align: center;
    align-items: center;
    font-size: 20px;
    margin: 10px;
  }

  @media screen and (max-width: 900px) {
    button {
      padding: 4px 8px;
      font-size: 10px;
    }
  }
`;
