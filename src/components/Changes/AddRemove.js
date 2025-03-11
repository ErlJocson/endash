import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const AddRemove = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [icon, setIcon] = useState(null);
  const [video, setVideo] = useState(null);
  const [order, setOrder] = useState(2);

  const handleAddCard = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", title);
    formData.append("link", link);
    formData.append("icon", icon);
    formData.append("video", video);
    formData.append("order", order);

    axios
      .post("http://127.0.0.1:5000/api/add-card", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <MainContainer>
        <h3>ADD ANOTHER CARD</h3>
        <form action="">
          <InputContainer>
            <label htmlFor="">Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Link</label>
            <input
              type="text"
              required
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </InputContainer>

          <FileUploadContainer>
            <div>
              <label htmlFor="">Icon</label>
              <input
                type="file"
                required
                onChange={(e) => setIcon(e.target.files[0])}
              />
            </div>
            <div>
              <label htmlFor="">Video</label>
              <input
                type="file"
                required
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>
          </FileUploadContainer>

          <SubmitButtonContainer>
            <button className="submit" onClick={handleAddCard}>
              SUBMIT
            </button>
            <button
              className="reset"
              onClick={() => {
                setTitle("");
                setLink("");
                setIcon(null);
                setVideo(null);
              }}
            >
              RESET
            </button>
          </SubmitButtonContainer>
        </form>
      </MainContainer>
    </>
  );
};

export default AddRemove;

const MainContainer = styled.div`
  height: calc(100vh - 10vh);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    padding: 20px;
    background-color: #00122ba2;
    color: white;
    width: 600px;
  }

  h3 {
    color: white;
    margin-bottom: 20px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  label {
    margin-bottom: 8px;
  }

  input[type="text"] {
    padding: 8px;
    border: none;
  }
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 5px 20px;
    margin: 0 10px;
    cursor: pointer;
    border: none;
    transition: all 500ms;
  }

  .submit {
    background-color: #508484;
  }

  .reset {
    background-color: #f7934c;
  }

  .submit:hover {
    background-color: #508484bf;
  }

  .reset:hover {
    background-color: #f7934cc9;
  }
`;

const FileUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
