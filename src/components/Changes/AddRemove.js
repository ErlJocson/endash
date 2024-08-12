import styled from "styled-components";

const AddRemove = () => {
  return (
    <>
      <MainContainer>
        <h3>ADD ANOTHER CARD</h3>
        <form action="">
          <InputContainer>
            <label htmlFor="">Title</label>
            <input type="text" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Link</label>
            <input type="text" />
          </InputContainer>

          <FileUploadContainer>
            <div>
              <label htmlFor="">Icon</label>
              <input type="file" />
            </div>
            <div>
              <label htmlFor="">Video</label>
              <input type="file" />
            </div>
          </FileUploadContainer>

          <SubmitButtonContainer>
            <button className="submit">SUBMIT</button>
            <button className="reset">RESET</button>
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
